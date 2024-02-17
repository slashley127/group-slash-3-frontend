import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <section id='home' className='home'>
      <div className="overlay"></div>
      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
          <span class="fst-italic">
            Welcome to our trip planner
          </span>
          <h3 className="text-center bg-primary text-white my-1 py-1 rounded-lg shadow-lg  fst-italic">
            Search for Your Perfect Holiday
          </h3>
        </div>
        <div className="card-center bg-secondary text-white my-0 py-2">
          <div className="destinationInput">
            <label htmlFor="city  fst-italic">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
            </div>
            <button type="button" class="btn btn-black-primary" data-mdb-ripple-init>search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
