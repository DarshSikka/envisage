import React from 'react'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'

const features = ["feature1", "feature2", "feature3", "feature4"]

const Pricing = () => {
    return (<>
        <Navbar />
        <div className="pricing">
            <PricingCard features={features} plan={"No Login"}/>
            <PricingCard features={features} plan={"Signup"}/>
            <PricingCard features={features} plan={"Silver Gardener"}/>
            <PricingCard features={features} plan={"Golden Gardener"}/>
        </div>
        </>
    )
}

export default Pricing
