import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { uploadProfileAndRefresh } from '../../../../store/features/uploads'
import Button from '../../../../cmps/button/Button'

import * as S from './style'

const UpdateProfileImg = () => {

    const dispatch = useDispatch();

    const [fileToUpload, setFileToUpload] = useState("");

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'onTouched' });
    
    const onSubmit = e => {
        e.preventDefault()
        dispatch(uploadProfileAndRefresh(fileToUpload))
        
    }

    const handleFile = e => {
        console.log("[onChange]");

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFileToUpload(reader.result)
        }
        
    }
    // useEffect(()=>{console.log(fileToUpload)},[fileToUpload])
    
        return(

             <S.UploadProfileImgComponent className="upload-page">

                <form className="upload-form-media" onSubmit={handleSubmit}>
                    {/* <Button bgColor={'red'} onClick={() => console.log('click test')} text={"hello"} /> */}
                    <label className="up-btn" id="select-profile-img">
                        <span>בחר תמונה חדשה</span>
                        <input 
                            type="file"
                            name="uploadFile"
                            {...register("profileImg",{required: false})}
                            onChange={handleFile}
                        
                        />
                    </label>
                        
                    {/* <input type="file" name="video" onChange={handleFile} /> */}
                    <label className="up-btn" id="upload-profile-img">
                    <span>עדכן תמונה</span>
                    <input type="submit" value={"עדכן תמונה"} onClick={onSubmit}/>
                    </label>

                </form>

             </S.UploadProfileImgComponent>

        )
}

export default UpdateProfileImg