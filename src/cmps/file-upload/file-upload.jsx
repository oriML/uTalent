import { useState } from "react";
import { InputFilesButton } from "./style"


export const FileUpload = (src) => {

    const [fileToUpload, setFileToUpload] = useState("");

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
        <InputFilesButton>
            <label htmlFor="fileUpload">
                <input multiple type="file" name="fileUpload" id="fileUpload" onChange={handleFile}/>
                Select Files
            </label>
            <button onSubmit={() => console.log(src)}>Upload Files</button>
        </InputFilesButton>
    )

}