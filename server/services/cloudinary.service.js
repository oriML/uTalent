const { cloudinary } = require('../config/cloudinary')

async function uploadProfileImageOfUser(id, fileStr){
    
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


async function uploadImages(id, images){
    
    let urls = []

    try{
        
    for (const image of images) {
        
        urls.push(
            await cloudinary.uploader.upload(image.src, {
            public_id: `${id}_image:${image.title}`,
            upload_preset: 'dev_setups',
            use_filename: true,
            folder: `user_${id}`
        })
        .then(res => res)
        .catch(err => console.log(err))
        )
    }
    
    }catch(err){
        throw new Error(err)
    }
    return urls
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