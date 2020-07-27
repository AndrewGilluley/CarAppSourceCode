import React, { Component } from 'react'
import { FaCar, FaMoneyCheckAlt, FaShuttleVan, FaAddressCard } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {

    state = {
        services:[
            {
                icon: <FaCar />,
                title: "Sports Cars",
                info: 'This website has some of the highest quality cars available for rental within minutes!'
            },
            {
                icon: <FaMoneyCheckAlt />,
                title: "Easy payment",
                info: 'Our transaction process takes seconds to get you riding around faster!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Family Cars",
                info: 'We also have bigger sized cars for family road trips for a good weekend!'
            },
            {
                icon: <FaAddressCard />,
                title: "User Profile",
                info: 'Set up an account with us for exclusive bonuses and recieve special offers before anyone else!'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
