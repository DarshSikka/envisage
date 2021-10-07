import React from 'react'
import "../scss/components/pricing.scss"



const PricingCard = (props) => {
    return (
        <div className="pricingCard">
            <h3>{props.plan}</h3>
            <div className="features">
            {props.features.map(x => <li className="feature">{x}</li>)}
            </div>
        </div>
    )
}

export default PricingCard
