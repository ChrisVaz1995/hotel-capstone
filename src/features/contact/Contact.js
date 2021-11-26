import React from 'react'
import {Link} from 'react-router-dom';
import './Contact.css';
// import axios from 'axios';


const Contact = () => {
    return (
        <div>
        <Link to='/'><span>Home</span></Link>
        <h1>Contact Form</h1>
            <form>
                <label>
                    First Name:
                    <input required type="text" placeholder="John"></input>
                </label> <br />

                <label>
                    Last Name:
                    <input required type="text" placeholder="Doe"></input>
                </label> <br />

                <label>
                    Email:
                    <input required type="email"></input>
                </label><br />

                <label>
                    Message:
                    <textarea></textarea>
                </label> <br />
                <button>Submit</button>
            </form>
    
        </div>
    )
}

export default Contact
