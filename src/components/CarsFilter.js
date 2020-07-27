import React from 'react'
import {useContext} from 'react'
import {CarContext} from '../Context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function CarsFilter({cars}) {

    const context = useContext(CarContext)
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minHorsepower, maxHorsepower, sport
    } = context;

    let types = getUnique(cars, 'type');

    types = ['all', ...types];

    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(cars, 'capacity');
    people = people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search cars" />
            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type"> car type </label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity"> Seats </label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price"> Car Price ${price} </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="horsepower"> Car horsepower </label>
                    <div className="horsepower-inputs">
                        <input type="number" name="minHorsepower" id="horsepower" value={minHorsepower} onChange={handleChange} className="horsepower-input" />
                        <input type="number" name="maxHorsepower" id="horsepower" value={maxHorsepower} onChange={handleChange} className="horsepower-input" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="sport" id="sport" checked={sport} onChange={handleChange}/>
                        <label htmlFor="sport">Sport Mode</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
