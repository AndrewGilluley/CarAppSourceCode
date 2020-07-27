import React from 'react'
import CarsFilter from './CarsFilter'
import CarsList from './CarsList'
import { withCarConsumer } from '../Context'
import Loading from './Loading'

function CarsContainer({context}) {
    const {loading, sortedCars, cars} = context;

        if(loading) {
            return <Loading />
        }

        return (        
            <>
                <CarsFilter cars={cars}/>
                <CarsList cars={sortedCars}/>
            </>
        );

}

export default withCarConsumer(CarsContainer)

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {

//                     const {loading, sortedRooms, rooms} = value


//                     );
//                 }
//             }
//         </RoomConsumer>
        

//     )
// }
