import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Reservation.css';

export const Reservation = (props) => {


    const {name, price, bed, amenities} = props.location.state.obj;
    const handleButton = () => {
        axios.post('/api/reservation', {price: price, name: name, bed: bed })
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})
    }

    return (
        <div>
            <Link to='/'><span className="main-header">Home</span></Link>
            <div className="reservation-box">
                <span>{name}</span> <br />
                <span>{price}</span> <br />
                <span>{bed}</span> <br />
                <span>{amenities}</span>
            </div>
            <Link to='/checkout'><button onClick={handleButton}>Checkout</button></Link>
        </div>
    )
}


export default Reservation;
