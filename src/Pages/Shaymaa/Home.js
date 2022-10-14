import React from 'react'
import './Test.css';
import Footer from '../../Footer/Footer'
import { GiCompass } from 'react-icons/gi';
import {GiDiamondHard } from 'react-icons/gi';
import {MdOutlineHistoryEdu} from 'react-icons/md';
const Home = () => {
  return (
   <>

   <div className='custom-container'>  
   <div className='info'><h3 >Custom Furniture<br/>
   Built Only For You</h3></div>  
   <div id="parg" ><p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis 
   <br/>consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p> </div>   
 </div>
 
 <div className="centered">
 
 <section className="cards">
      
     <article className="card">
     <div className='img'><span className="comp"><GiCompass/></span></div>
     <h4>Mission</h4>
     <p>Lorem ipsum, dolor sit amet consectetur 
     adipisicing elit. Voluptates, ea. Perferendis
      corrupti reiciendis nesciunt rerum velit
       autem unde numquam nisi</p>
     </article>

<article className="card">
<div className='img'><span><GiDiamondHard/></span></div>
<h4>Vision</h4>
<p>Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Voluptates, ea. Perferendis
 corrupti reiciendis nesciunt rerum velit
  autem unde numquam nisi</p>
 </article>

<article className="card">
<div className='img'><span><MdOutlineHistoryEdu/></span></div>
<h4>History</h4>
<p>Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Voluptates, ea. Perferendis
 corrupti reiciendis nesciunt rerum velit
  autem unde numquam nisi</p>
 </article>



</section>
</div>


<div className='newsletter' id = "box3">
<div className='finalText'>
<h3>Join our newsletter and get 20% off</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde <br/>
quaerat ratione soluta veniam provident adipisci cumque eveniet <br/>tempore?</p>
</div>
<div className='finalText'>
<form>
<input type='email' autoFocus placeholder='Enter Email' />
<button className='btn'>Subscribe</button>
</form>
</div>

</div>
<Footer/>

   </>
  
  )
}

export default Home;
