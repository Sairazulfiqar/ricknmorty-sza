import React from 'react';
import '../styles/Characters.css';

const Characters = ({ characters = [] }) => {
    
    return (
        <div className='container-fluid mt-2 px-0'>
            <div className='container'>
                <div className="row">
                    {characters.map((item, index) => (
                        <div key={index} className="col md-4 mb-4 d-flex justify-content-center">
                            <div className="card" style={{ minWidth: "200px" }}>
                                <img src={item.image} alt='' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p> {item.species}</p>
                                    <div className='status-info'>
                                        <div className='status' style={{
                                            backgroundColor: item.status ===
                                                "Alive" ? "chartreuse"
                                                : item.status === "unknown" ?
                                                    "gray" : "red"
                                        }}></div>
                                        <div className='status-p'><p> {item.status}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Characters;
