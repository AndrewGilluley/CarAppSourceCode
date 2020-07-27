import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedCars from '../components/FeaturedCars'

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxorious cars" subtitle="deluxe cars for rental starting at $299">
                <Link to='/cars' className="btn-primary">
                    Our Cars
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedCars />
        </>
    )
}
