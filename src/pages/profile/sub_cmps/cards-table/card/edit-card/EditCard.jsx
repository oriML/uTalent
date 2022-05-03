import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useLocalStorage from '../../../../../../hooks/useLocalStorage';
import { editCardOfUser } from '../../../../../../store/features/uploads';

function EditCard({card}) {

    const dispatch = useDispatch()

    const { saveUserInLS } = useLocalStorage();


    const [ newImages, setNewImages ] = useState([
        ...card.images
    ])
    const [ newCard, setNewCard ] = useState({
        ...card
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if(name !== 'tags'){

            setNewCard(p => {
                return {
                    ...p,
                    [name]: value
                }
            })
        }else{
            setNewCard(p => {
                return {
                  ...p,
                  [name]: value.replaceAll(',',' ').split(' ').filter( c => c!== '')
                }
              })
        }
    }

    const handleImageDeleteClick = (url) => {
        setNewImages(p => p.filter(img => img.url !== url))
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
            setNewImages(p => [...p, {
              title: newImage.title,
              src: newImage.src
            }])
          }
          reader.readAsDataURL(file);
          setNewImages([])
        }else{
          console.log(`Error with file ${file.name}`);
        }
      }
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(newImages)
        dispatch(editCardOfUser({  ...newCard, id: card._id, images: newImages }))
        dispatch(saveUserInLS());
        
    }
    useEffect(()=>console.log(newImages), [newImages])

    return (
    
    <section>
        {console.log(card)}
        <form action="#" onSubmit={handleSubmit}>

        <input type="text" name="description" value={newCard.description} onChange={handleChange} />
        <input type="text" name="title" value={newCard.title} onChange={handleChange} />
        <input type="text" name="tags" value={newCard.tags} onChange={handleChange} />
        <input type="file" name="images" multiple onChange={handleImages}/>
        <div className='editImagesContainer'>
        {
            newImages.map(image =>
                <>
                    <span onClick={() => handleImageDeleteClick(image.url)}>X</span>
                    <img src={image.url} style={{"width": "80px", "height": "80px"}} />
                </>
            )
        }
        </div>

            <button type='submit' className="btn">עדכן כרטיס</button>
        </form>
    </section>
  )
}

export default EditCard