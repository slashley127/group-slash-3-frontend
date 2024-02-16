import React from 'react'
import './Home.css'
// import  Image from './../assets/img3.jpg'


const Home = () => {
 
  
  return (
    <section id='home' className='home'>
      <div className="overlay"></div>
      {/* <Image src="C:\Group-3\Front-end\src\assets\img3.jpg" alt="Description of the image" /> */}

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
        <span  className="smallText ">
          Welcome to our trip planner
        </span>
        <h3 className="text-center bg-primary text-white my-1 py-3 rounded-lg shadow-lg">
  Search for Your Perfect Holiday
</h3>

        </div>
        <div  className="card-center bg-secondary text-whaite my-0 py-0 ">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
            <input type="date" />
           
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="city">Max price:</label>
            <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

        </div>
      
      </div>
    </section>
  )
}

export default Home