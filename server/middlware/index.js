const admin = require('../config/firebase-config')

class Middleware{

    async decodeToken( req, res, next){
        try{
            const token = req.headers.authorization.split(' ')[1];

            const decodeValue = await admin.auth().verifyIdToken("")// <- token

            if(decodeValue){
                return next()
            }
            return res.json({message: 'No Access'})
        }catch(err){
            if(err.code == 'auth/id-token-expired')
            return res.json({error : err})
        }
    }
}

module.exports = new Middleware();