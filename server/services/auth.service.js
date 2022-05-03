

async function authUserByEmailAndPassword(req, res){

    res.status(200).json({
        message: "all good at login path"
    })
    console.log("authUserByEmailAndPassword function")
}


async function verifyToken(req, res, next){

    // Get the Auth header value
    const bearerHeader = req.headers['authorization'];
    // check if is undefined

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();

    }else{
        // Forbidden
        res.sendStatus(403);
    }

}


module.exports = {
    authUserByEmailAndPassword,
    verifyToken,
    
}
