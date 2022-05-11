import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useLocalStorage from '../../../../../../hooks/useLocalStorage';
import { editCardOfUser } from '../../../../../../store/features/uploads';
import EditImages from './EditImages'

function EditCard({card}) {

    const dispatch = useDispatch()

    const { saveUserInLS } = useLocalStorage();

   // newImages = []
    const [ newImages, setNewImages ] = useState([])

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
        window.confirm('delete?') &&
        setNewImages(p => p.filter(img => img.url !== url))
    }

    const handleImages = (e) => {
      
        const files = e.target.files;
        
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          const file = files[i];
          console.log(file instanceof File)
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

/**
 * S1 - card.images = no change - [ ...images ]
 * S2 - card.images = all changed - [ ...newImages ]
 * S2 - card.images = part changed - [ ...images ] [ ...newImages ]
 * S2 - card.images = all deleted? - [  ]
 */

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newImages) // if there is no new media upload, images will be url
        dispatch(editCardOfUser({  ...newCard, id: card._id, images: newImages }))
        dispatch(saveUserInLS());
        
    }
    // useEffect(()=>console.log(typeof(card.images[0]) === 'File'), [])

    return (
    
    <section>
        {console.log(card)}
        <form action="#" onSubmit={handleSubmit}>

        <input type="text" name="description" value={newCard.description} onChange={handleChange} />
        <input type="text" name="title" value={newCard.title} onChange={handleChange} />
        <input type="text" name="tags" value={newCard.tags} onChange={handleChange} />
        <input type="file" name="images" multiple onChange={handleImages}/>
        <EditImages images={card.images} newImages={newImages} setNewImages={setNewImages} />
        {/* <div className='editImagesContainer'>
        {
          newImages.length>0?
            newImages.map(image =>
                <>
                    <span onClick={() => handleImageDeleteClick(image.url)}>X</span>
                    <img src={image.url} style={{"width": "80px", "height": "80px"}} />
                </>
            )
          :
          card.images.map(url =>
            <>
            
                <span onClick={() => handleImageDeleteClick(url)}>X</span>
                <img src={url} style={{"width": "80px", "height": "80px"}} />
            </>
        )
        }
        </div> */}

            <button type='submit' className="btn">עדכן כרטיס</button>
        </form>
    </section>
  )
}

export default EditCard