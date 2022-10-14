import React from 'react'
import img from '../../../assest/img.jpeg'
import './About.css'
import Footer from '../../Footer/Footer';
import Nav from '../../Nav/Nav';
const About = () => {
  return (
    <>
   <Nav name ="About"/>
   
   <div  className='about-container'>
<div className='colui'>
<img src={img} alt ="img " />
</div>
<div className='colui'>
<h2>Our Story</h2>
<div className='underLine'></div>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium
   sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error
    accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam 
    esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est 
    exercitationem molestiae delectus saepe odio eligendi modi porro eaque in 
    libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, 
    eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex,
     voluptate accusamus nesciunt totam vitae esse iste.</p> 
</div>
   </div>

    <Footer/>
    </>
  )
}

export default About;
// FaCompass
// FaSafari
