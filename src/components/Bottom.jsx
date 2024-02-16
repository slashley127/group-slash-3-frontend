import React from 'react';
import img5 from "../assets/img(5).jpg";
import './Bottom.css';
import { Card } from 'react-bootstrap/esm';

const Data = [
  {
    id: 1,
    imgSrc: img5,
    name: 'St Louis Zoo',
    location: 'St Louis',
    description: 'Amazing, large zoo with tons of animals far and wide',
    cost: 20,
    rating: 5,
    isIndoor: false
  }
];

function Bottom() {
  return (
    <section>
      <Card>
        <Card.Body className="text-center bg-secondary text-white my-2 py-2">
          Most visited destinations
        </Card.Body>
      </Card>

      <div className="card-group">
        {Data.map(({ id, imgSrc, name, location, cost, description }) => (
          <React.Fragment key={id}>
            {/* First card */}
            <div className="card">
              <img className="card-img-top" src={imgSrc} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{location}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

            {/* Second card */}
            <div className="card">
              <img className="card-img-top" src={imgSrc} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{location}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

            {/* Third card */}
            <div className="card">
              <img className="card-img-top" src={imgSrc} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{location}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Bottom;
