import React from 'react'
import AboutCard from '../components/AboutCard'
import Navbar from '../components/Navbar'
import  "../scss/components/aboutcard.scss"
import aaahanaImg from "../assets/about/aaahana.png"

const About = () => {
    return (
        <>
        <Navbar />
        <div className="aboutus">
            <AboutCard 
            image={""}
            name={"Darsh Sikka"}
            intro={"Hi! I am Darsh Sikka from New Delhi. I am a passionate mathematician. I am a web develpor at exun clan. I like coding in MERN stack, it is a stress buster for me and I want to utilize it for the good of others. I am also the founder of Rev Mate your mate for revision in exams"}
            />
            <AboutCard 
            image={aaahanaImg}
            name={"Aaahana Mehrotra"}
            intro={"Hi, I am Aaahana Mehrotra, a student of class 9 at DPS RK Puram with interests in computer science, physics and mathematics. I am a web development enthusiast. I am a keen learner and observer and hope to use my skills in order to improve the society"}
            />
        </div>
        </>
    )
}

export default About
