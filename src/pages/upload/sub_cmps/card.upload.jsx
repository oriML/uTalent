import { useState } from 'react'
import { useDispatch } from "react-redux";

import { useForm } from 'react-hook-form'

import { uploadCardOfUser } from '../../../store/features/uploads';
import { useEffect } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';

import { FormContainer, UploadPage  } from './style';

import { input, Button } from '@mui/material'

const CardsUpload = () => {

  const dispatch = useDispatch();

  const { saveUserInLS } = useLocalStorage();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [newCard, setNewCard] = useState(
    {
      title: {},
      description: {},
      tags: {},
      images: [],

      });

  const [images, setImages] = useState([]);
  

  const onSubmit = async e => {
      // e.preventDefault()
      dispatch(uploadCardOfUser({...newCard, images}))
      // middleware to upload and re-save user after serverupdate
            dispatch(saveUserInLS());
      
  }

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    if(name !== 'tags')
    setNewCard( p => {
      return {
        ...p,
        [name]: value
      }
    })
    else
    setNewCard(p => {
      return {
        ...p,
        [name]: value.replaceAll(',',' ').split(' ').filter( c => c!== '')
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
    <UploadPage>

      <h1>הוסף כרטיס</h1>

    <FormContainer onSubmit={handleSubmit(onSubmit)}>

        {/* <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          onChange={handleInput}
          
          /> */}
          <input
          type="text"
          placeholder="כותרת"
          {...register("title", { required: true })}
          onChange={handleInput}
          
          />

        {errors.title && <span className="error-span">נא להוסיף כותרת</span>}

        <input
          type="textarea"
          placeholder="תיאור"
          {...register("description", { required: true })}
          onChange={handleInput}
          
          />

        {errors.description && <span className="error-span">נא להוסיף תיאור</span>}

        <input
          type="text"
          placeholder="תגיות"
          {...register("tags", { required: true })}
          onChange={handleInput}
          
          />

        {errors.tags && <span className="error-span">הוסף לפחות תגית אחת</span>}

        <label className='upload-file-btn'>
          העלה קבצים
        <input
          type="file"
          multiple
          placeholder="images"
          {...register("images", { required: true })}
          onChange={handleImages}
          // onClick={()=> setImages([])}
          
          />

        </label>
        {errors.images && <span className="error-span">הוסף לפחות תמונה אחת</span>}

        {/* <input type="" placeholder="video" {...register("example")} /> */}
    
    
      <Button type="submit"> 
        שמור כרטיס
       </Button>

  </FormContainer>
          </UploadPage>

  )

}

export default CardsUpload