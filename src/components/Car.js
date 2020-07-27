import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default function Car({car}) {

    const {name, page, images, price} = car;  

    return (
        <article className="car">
            <div className="img-container">
                <img src={images[0] || defaultImg} 
                alt="single car" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/cars/${page}`} className="btn-primary car-link">Features</Link>
            </div>
            <p className="car-info">{name}</p>
        </article>
    )
}

Car.propType = {
    car:PropTypes.shape({
        name:PropTypes.string.isRequired,
        page:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}
