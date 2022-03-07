const { cloudinary } = require('../config/cloudinary')

async function uploadProfileImageOfUser(fileStr, id){
    
    return cloudinary.uploader.upload(fileStr, {
        public_id: `${id}_profile`,
        upload_preset: 'dev_setups',
        use_filename: true,
    });

}

async function getProfileImageOfUser(id){
    console.log(id)
    return cloudinary.api.resources(
        function(error, result) {console.log(result, error); });
    // return cloudinary.image(id, {secure: true, transformation: [
        // {width: 150, height: 150, gravity: "face", crop: "thumb"},
        // {radius: 20},
        // {effect: "sepia"},
        // {overlay: "cloudinary_icon_blue", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
        // {angle: 10}
        // ]})
}

async function uploadVideo(){
    
    return
}

async function getVideo(){
    
    return
}


async function uploadImages(){
    
    return
}

async function getImages(){
    
    return
}


module.exports = {
    uploadProfileImageOfUser,
    getProfileImageOfUser,
    uploadVideo,
    getVideo,
    uploadImages,
    getImages,
}