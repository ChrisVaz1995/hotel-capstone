import React from 'react'
import {Link} from 'react-router-dom';
import data from '../information/info';

export const Hotel = () => {
    return (
        <div className="row">

                {
                    data.map((obj) => (
                        <div className="card-container">
                    <Link to={{
                                        pathname: "/reservation",
                                        state: { obj: obj }
                                    }}
                                    >
                                       
                                <h2 className='card' style={{backgroundImage:`url(${obj.img})`}} onMouseOver={() => {
                                    return (
                                        <div>
                                        <p>{obj.price}</p>
                                        <p>{obj.bed}</p>
                                        <p>{obj.amenities}</p>
                                    </div>
                                    )
                                    
                                }}>{obj.name}</h2>        
                            </Link>
                        </div>
                    ))
                }
        </div>
    )
}

export default Hotel;
