import React from 'react'
import Car from './Car'


export default function CarsList({cars}) {

    if(cars.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately no cars match your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="carslist">
            <div className="carslist-center">
                {
                    cars.map(item => {
                        return <Car key={item.id} car={item} />
                    })
                }
            </div>
        </section>
    );
}
