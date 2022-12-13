export const isLoggedIn = (req, res, next) => {
    console.log(req.isAuthenticated());
    if(!req.isAuthenticated()) return res.status(401).json({msg: 'Unauthorized'});
    next();
}
  
