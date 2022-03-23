import { useState } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form"
// upload is accessable only to registered users
import { uploadProfileAndRefresh } from '../../store/features/uploads'

import { refreshLocalUser } from "../../store/features/user";

import CardsUpload from "./sub_cmps/cards/cards/card/card.upload";

const Upload = () => {

    const dispatch = useDispatch();

    const [fileToUpload, setFileToUpload] = useState("");

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'onTouched' });
    
    const onSubmit = e => {
        e.preventDefault()
        // fd.append( 'file', fileToUpload )
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

             <section className="upload-page">
                 <CardsUpload />
                <h1 className="upload-page-header">
                    ברוך הבא לדף ההעלאות! 
                </h1>

                <form className="upload-form-media" onSubmit={handleSubmit}>

                    <input 
                        type="file"
                        name="profileImg"
                        {...register("profileImg",{required: false})}
                        onChange={handleFile}

                        />
                        
                    {/* <input type="file" name="video" onChange={handleFile} /> */}

                    <input type="submit" value={"עדכן תמונה"} onClick={onSubmit}/>

                </form>

             </section>

        )
}

export default Upload