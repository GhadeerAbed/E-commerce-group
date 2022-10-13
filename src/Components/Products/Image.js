import React from 'react'
import '../../Pages/Products.css'
const Image = () => {
  return (
    <div className='image'>
        <img src='https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg' alt='name'></img>
        <div className='image-disc'>
        <span>Modern Poster</span>
        <p>$30.99</p>
        </div>
    </div>
  )
}

export default Image