import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { uploadProfileAndRefresh } from '../../../../store/features/uploads'
import Button from '../../../../cmps/button/Button'
import { FaFileUpload } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'

import * as S from './style'

const UpdateProfileImg = () => {

    const dispatch = useDispatch();
    const Icon = ({icon}) => <span
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'blue',
        borderRadius: '10%',
        height: '60px',
        width: '60px',
        border: '1px solid gray',
        margin: 'auto',
        cursor: 'pointer'
    }}
    >{icon}</span>
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
    
        return(

             <S.UploadProfileImgComponent className="upload-page">

                <form className="upload-form-media" onSubmit={handleSubmit}>
                    {/* <Button bgColor={'red'} onClick={() => console.log('click test')} text={"hello"} /> */}
                    <Icon icon={<FaFileUpload style={{width: '50px', height: '50px'}} />} />
                    <label className="up-btn" id="select-profile-img">
                        
                        <input 
                            type="file"
                            name="uploadFile"
                            {...register("profileImg",{required: false})}
                            onChange={handleFile}
                        
                        />
                    </label>
                        
                    {/* <input type="file" name="video" onChange={handleFile} /> */}
                    <label className="up-btn" id="upload-profile-img">
                    <Icon icon={<GiConfirmed style={{width: '50px', height: '50px'}}/>} />
                    <input type="submit" value={"עדכן תמונה"} onClick={onSubmit}/>
                    </label>

                </form>

             </S.UploadProfileImgComponent>

        )
}

export default UpdateProfileImg