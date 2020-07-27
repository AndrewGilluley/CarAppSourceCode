import React, { Component } from 'react'
import { CarContent, CarProvider, CarContext } from '../Context'
import Title from './Title'
import Loading from './Loading'
import Car from '../components/Car'

export default class FeaturedCars extends Component {
    static contextType = CarContext
    render() {

        let {loading, featuredCars : cars } = this.context

        cars = cars.map(car => {
            return <Car key={car.id} car={car} />
        })
        
        return (
            <section className="featured-cars">
                <Title title="featured cars" />
                    <div className="featured-cars-center">
                        {loading ? <Loading /> : cars }
                    </div>
            </section>
        )
    }
}
