// https://github.com/jaredhanson/passport-google-oauth2

import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import path from "path";
import session from "express-session";
import MongoStore from 'connect-mongo';
import { Strategy as googleStrategy } from "passport-google-oauth20";
import { ensureLoggedIn } from "connect-ensure-login";
import cors from "cors";

dotenv.config();

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/oauth2/redirect/accounts.google.com",  
      scope: ["profile"], 
      state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_ATLAS_URL,
    ttl: ttlSeconds,
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),
  secret: 'secretString',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

const app = express(); 
app.use(cors());        
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.resolve() + "/views");
app.set("view engine", "ejs");

app.use(session(StoreOptions)); 
app.use(passport.initialize());
app.use(passport.session());

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/google", passport.authenticate("google"));

router.get(
  "/oauth2/redirect/accounts.google.com",
  passport.authenticate("google", { assignProperty: "User", failureRedirect: "/login" }),

  (req, res, next) => {
    console.log(req.User);
    const user = {
      displayName: req.User.displayName,
      photo: req.User.photos[0].value,
    };
    req.login(user, (err) => {
      if (err) {
        return next(err);
      } else {
        res.redirect("/");
      }
    });
  }
);

router.get("/", ensureLoggedIn(), (req, res) => {
  res.send(`
            <h1>Nombre: ${req.user.displayName}</h1> <a href="/logout" >Logout</a>
            `);
  console.log(req.sessionID);
  console.log(req.session);
  console.log(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.use("/", router);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server start on port ${PORT}`),
);
server.on("error", (err) => console.log(err));

