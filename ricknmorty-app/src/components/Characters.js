import React from 'react';
import '../styles/Characters.css';

const Characters = ({ characters = [] }) => {
    return (
        <div className="row mt-5 ms-2 me-2">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{minwidth:"200px"}}>
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h5 className='card-title'> {item.name}</h5>
                            <p> {item.species}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Characters;
