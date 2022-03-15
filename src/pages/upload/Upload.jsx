import { useForm } from "react-hook-form"
import { useState } from "react";
import { useDispatch } from "react-redux";
// upload is accessable only to registered users
import { uploadProfileAndRefresh } from '../../store/features/uploads'
import { useEffect } from "react";
import { refreshLocalUser } from "../../store/features/user";

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

                <h1 className="upload-page-header">
                    ברוך הבא לדף ההעלאות! 
                </h1>

                <form className="upload-form-media" onSubmit={handleSubmit}>

                        {/* <div className="upload-form-content">
        
                             <input
                             type="text"
                             name="title"
                             placeholder="כתוב כותרת בקצרה"
                             {
                                 ...register("title",
                                 {
                                     required:true
                                })
                             }
                             
                             />
                             <textarea
                             type="text"
                             name="description"
                             placeholder="כתוב תיאור, באריכות!"
                             style={{"resize":"none", "col":"5","row":"5"}}
                             {
                                 ...register("description",
                                 {
                                     required:true
                                })
                             }
                             
                             />

                        </div> */}

                    <input 
                        type="file"
                        name="picture1"
                        
                        {
                            ...register("picture1",
                            {
                                required: false
                            })
                        }
                        onChange={handleFile}

                        />

                    <input 
                        type="file"
                        name="picture2"
                        
                        {
                            ...register("picture2",
                            {
                                required: false
                            })
                        }
                        onChange={handleFile}

                        />

                    <input 
                        type="file"
                        name="picture3"
                        
                        {
                            ...register("picture3",
                            {
                                required: false
                            })
                        }
                        onChange={handleFile}

                        />
                    <input 
                        type="file"
                        name="picture4"
                        
                        {
                            ...register("picture4",
                            {
                                required: false
                                
                            })
                        }
                        onChange={handleFile}
                        />

                    <input 
                        type="file"
                        name="picture5"
                        
                        {
                            ...register("picture5",
                            {
                                required: false
                            })
                        }
                        onChange={handleFile}
                        />


                    <input type="file" style={{color: "red"}} name="video" onChange={handleFile} />

                    <input type="submit" value={"SEND"} onClick={onSubmit}/>

                </form>

             </section>

        )
}

export default Upload