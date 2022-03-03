import { useForm } from "react-hook-form"
import { useState } from "react";
// upload is accessable only to registered users


const Upload = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'onTouched' });

    
    const onSubmit = data => {
        console.log("[onSubmit]",data);

    }
    const onChange = e => {
        console.log("[onChange]",e.target.files[0]);
    }
    
    const handleUpload = e => {
        
    }
    
    const [files, setFiles] = useState({
        content: {
            title: '',
            description: '',
        },
        images: [],
        video: ''
    })


        return(

             <section className="upload-page" onSubmit={handleSubmit(onSubmit)}>

                <h1 className="upload-page-header">
                    ברוך הבא לדף ההעלאות! 
                </h1>

                 <form className="upload-form" >

                        <div className="upload-form-content">
        
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



                        </div>

                        <div className="upload-form-media">
                    <input 
                        type="file"
                        name="picture1"
                        {
                            ...register("picture1",
                            {
                                required: true
                            })
                        }
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        />

                    </div>

                    <input type="file" name="video" onChange={onChange} />

                        <input type="submit" onClick={handleUpload}/>

                 </form>

             </section>

        )
}

export default Upload