import React, { useState } from 'react'

function EditImages({images, newImages, setNewImages}) {

  // const [ newImages, setNewImages ] = useState([])

/**
 * S1 - card.images = no change - [ ...images ]
 * S2 - card.images = all changed - [ ...newImages ]
 * S2 - card.images = part changed - [ ...images ] [ ...newImages ]
 * S2 - card.images = all deleted? - [  ]
 */

  const handleImageDeleteClick = (url) => {
    window.confirm('delete?') &&
    setNewImages(p => p.filter(img => img.url !== url))
}

  return (
    <div className='images-container'>
      {
      
    newImages.length>0?
            newImages.map(image =>
                <>
                    <span onClick={() => handleImageDeleteClick(image.url)}>X</span>
                    <img src={image.url} style={{"width": "80px", "height": "80px"}} />
                </>
            )
          :
          images.map(url =>
            <>
            
                <span onClick={() => handleImageDeleteClick(url)}>X</span>
                <img src={url} style={{"width": "80px", "height": "80px"}} />
            </>
        )
          }
   </div>     
  )
}

export default EditImages