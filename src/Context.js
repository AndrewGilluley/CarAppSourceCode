import React, { Component } from 'react'
import items from './data'

const CarContext = React.createContext();

class CarProvider extends Component {0

    state = {
        cars:[],
        sortedCars:[],
        featuredCars:[],
        loading: true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minHorsepower:0,
        maxHorsepower:0,
        sport:false,
    };

    componentDidMount() {
        let cars = this.formatData(items)
        let featuredCars = cars.filter(car => car.featured === true);

        let maxPrice = Math.max(...cars.map(item => item.price));

        let maxHorsepower = Math.max(...cars.map(item => item.horsepower));

        this.setState({
            cars, 
            featuredCars, 
            sortedCars:cars, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxHorsepower
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {

            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let car = {...item.fields, images, id}

            return car;
        });
        return tempItems;
    }

    getCar = (page) => {
        let tempCars = [...this.state.cars];
        const car = tempCars.find(car => car.page === page)
        return car;
    }

    handleChange = event => {
        const target = event.target

        const value = target.type === 'checkbox' ? target.checked:target.value

        const name = event.target.name

        this.setState({
            [name]:value
        }, this.filterCars)
    };

    filterCars = () => {
        let {
            cars, type, capacity, price, minHorsepower, maxHorsepower, sport
        } = this.state

        let tempCars = [...cars]

        capacity = parseInt(capacity)
        price = parseInt(price)

        if(type !== 'all')
        tempCars = tempCars.filter(car => car.type === type);
    

            if(capacity !== 1){
                tempCars = tempCars.filter(car => car.capacity >= capacity)
            }

            tempCars = tempCars.filter(car => car.price <= price);

            tempCars = tempCars.filter(car => car.horsepower >= minHorsepower && car.horsepower <= maxHorsepower)

            if(sport){
                tempCars = tempCars.filter(car => car.sport === true)
            }

            this.setState({
                sortedCars:tempCars
            })
        
    };

    render() {
        return (
            <CarContext.Provider value={{...this.state, getCar: this.getCar, handleChange:this.handleChange}}>
                {this.props.children}
            </CarContext.Provider>
        );
    }
}

const CarConsumer = CarContext.Consumer;

export function withCarConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <CarConsumer>
            {value => <Component {...props} context={value}/>}
        </CarConsumer>
    }
}

export { CarProvider, CarConsumer, CarContext }