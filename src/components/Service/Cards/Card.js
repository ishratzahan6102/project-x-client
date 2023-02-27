import React from 'react';
import icon from '../../../../src/assets/Vector.png';
import './Card.css'


const Card = ({ service }) => {
    const { id, title, description, img } = service

    return (
      
            <div className="service-card bg-base-100">
                <div className='bg-img'>
                    <img  src={img} alt="image" />
                </div>
                <div id="card-details" > 
                    <div className='card-inner'>
                   <div>
                   <img  src={icon} alt="image" />
                        <h4 className="">{title}</h4>
                        <p>{description}</p>
                        <div className="justify-center">
                            <button className="btn ">View details</button>
                        </div>
                   </div>
                    </div>
                </div>
            </div>

    );
};

export default Card;