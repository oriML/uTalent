import { useState } from 'react'
import { useDispatch } from "react-redux";

import { useForm } from 'react-hook-form'

import { uploadCardOfUser } from '../../../../../../store/features/uploads';
import { useEffect } from 'react';

const CardsUpload = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [newCard, setNewCard] = useState(
    {
      title: {},
      description: {},
      tags: {},
      images: [],

      });

  const [images, setImages] = useState([]);
  

  const onSubmit = e => {
      // e.preventDefault()
      dispatch(uploadCardOfUser({...newCard, images}))
      
  }

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    setNewCard( p => {
      return {
        ...p,
        [name]: value
      }
    })
  }

  const handleImages = (e) => {
      
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        reader.onloadend = () => {
          const newImage = new Image();
          newImage.height = 350;
          newImage.width = 350;
          newImage.title = file.name;
          newImage.src = reader.result;
          setImages(p => [...p, {
            title: newImage.title,
            src: newImage.src
          }])
        }
        reader.readAsDataURL(file);
      }else{
        console.log(`Error with file ${file.name}`);
      }
    }
      
  }

useEffect(()=> console.log(images), [images])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          onChange={handleInput}
          
          />

        {errors.title && <span>נא להוסיף כותרת</span>}

        <input
          type="text"
          placeholder="description"
          {...register("description", { required: true })}
          onChange={handleInput}
          
          />

        {errors.description && <span>נא להוסיף תיאור</span>}

        <input
          type="text"
          placeholder="tags"
          {...register("tags", { required: true })}
          onChange={handleInput}
          
          />

        {errors.tags && <span>הוסף לפחות תגית אחת</span>}

        <input
          type="file"
          multiple
          placeholder="images"
          {...register("images", { required: true })}
          onChange={handleImages}
          // onClick={()=> setImages([])}
          
          />

        {errors.images && <span>הוסף לפחות תמונה אחת</span>}

        {/* <input type="" placeholder="video" {...register("example")} /> */}
    
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="העלה כרטיס" />
  </form>
  )

}

export default CardsUpload