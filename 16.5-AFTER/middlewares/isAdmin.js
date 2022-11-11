const admin = true;

const isAdmin = (req, res, next) => {
    if(admin) next();
    else res.status(401).json({ msg: 'No autorizado' })
};

export default isAdmin;