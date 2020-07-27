import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { CarContext } from '../Context'
import StyledHero from '../components/StyledHero'


export default class SingleCar extends Component {

    constructor(props){
        super(props)
        this.state = {
            page: this.props.match.params.page,
            defaultBcg
        };
    }

    static contextType = CarContext;

    //componentDidMount() {}


    render() {

        const {getCar} = this.context;
        const car = getCar(this.state.page);

        if(!car) {
            return <div className="error">
                <h3>No such car could be found...</h3>
                <Link to='/cars' className="btn-primary">Back to Cars</Link>
            </div>
        }
        
        const {name, description, capacity, horsepower, price, extras, sport, images} = car

        const [mainImg,...defaultImg] = images
        

        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/cars' className='btn-primary'>
                            Back to Cars
                        </Link>
                    </Banner>
                </StyledHero>

                <section className="single-car">
                    <div className="single-car-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>

                    <div className="single-car-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Horsepower: {horsepower}</h6>
                            <h6>
                                Max Capacity : {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person `
                                }
                            </h6>
                            <h6>{sport && "Has Sport Mode"}</h6>
                        </article>
                    </div>
                </section>

                <section className="car-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) => {
                            return <li key={index}>- {item} </li>;
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
