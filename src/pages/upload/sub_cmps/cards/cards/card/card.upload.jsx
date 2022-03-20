import { useState } from 'react'
import { useDispatch } from "react-redux";

import { useForm } from 'react-hook-form'

import { uploadCardOfUser } from '../../../../../../store/features/uploads';

const CardsUpload = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [filesToUpload, setFilesToUpload] = useState("");

  const onSubmit = e => {
      e.preventDefault()
      // fd.append( 'file', fileToUpload )
      dispatch(uploadCardOfUser(filesToUpload))
      
  }
  const handleFile = e => {
      console.log("[onChange]");

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setFilesToUpload(reader.result)
      }
      
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="title" {...register("title", { required: true })} />

        {errors.title && <span>נא להוסיף כותרת</span>}

        <input type="text" placeholder="description" {...register("description", { required: true })} />

        {errors.description && <span>נא להוסיף תיאור</span>}

        <input type="text" placeholder="tags" {...register("tags", { required: true })} />

        {errors.tags && <span>הוסף לפחות תגית אחת</span>}

        <input type="file" onChange={handleFile} placeholder="images" {...register("images", { required: true })} />

        {errors.images && <span>הוסף לפחות תמונה אחת</span>}

        {/* <input type="" placeholder="video" {...register("example")} /> */}
    
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" />
  </form>
  )
}

export default CardsUpload

/**
 * const cardSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    video: {
        type: String
    },

}, { timestamp
 */