import React from 'react'
import AboutMe from '../AboutMe'
import Footer from '../Footer'
import Form from '../Form'
import MasonryGrid from '../MasonryGrid'
import Motto from '../Motto'
import ParallaxSection from '../ParallaxSection'
import Showcase from '../Showcase'

const Home = () => {
    return (
        <div>
            <Showcase />
            <Motto />
            <MasonryGrid />
            <AboutMe />
            <ParallaxSection />
            <Form />
            <Footer />
        </div>
    )
}

export default Home
