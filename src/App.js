import React from 'react'
import './App.css';
import img1 from './nature.jpg';
export const App = () => {
  return (
    <div>
     
      
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="Title">Amani lahouel</h1>
          <br />
          <img src={img1} alt="" />
          <br />
          <img src="/nature2.jpg"  alt=""/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      
    
    </div>
  )
}
export default App