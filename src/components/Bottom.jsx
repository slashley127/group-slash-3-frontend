import React from 'react'
import img5 from "../assets/img(5).jpg"
import './Bottom.css'




const Data = [
  {id :1,
  imgSrc:img5,
  name: 'St Louis Zoo',
  location: 'St Louis',
  description: 'Amazing, large zoo with tons of aniamls far and wide',
  cost: 20,
  rating: 5,
  isIndoor: false
  }, ]

function Bottom() {


  return (
    <section id='main' className='main section container'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        
      {
          Data.map(({id, imgSrc, name, location,cost,description})=>{
            return (
              
              <div key={id} >
      
                 <div className="imageDiv">
                 <img src={imgSrc} alt="..." class="img-thumbnail"/>
                 
                 </div>
      
                <div className="cardInfo">
                 <h4 className="destTitle">{name}</h4>
                 {/* <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                 </span>
      
                 <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1 </small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                 </div>
      
                 <div className="desc">
                  <p>{description}</p>
                 </div>
      
                 <button className='btn flex'>DETAILS <HiClipboardList className="icon"/> </button>
                */}
                </div>
              </div>
      
            )
          }) 
        }
      </div>
     
    </section>
  )
}

export default Bottom