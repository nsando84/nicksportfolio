import React from 'react'
import Button from 'react-bootstrap/Button'

const Home = () => {
    return (
        <div className="text-light home-div w-100">
            <span className="title-span"><strong>Welcome!</strong></span>
            <p className="paragraph-span">I am a full stack developer from Northern California. 
            If you are an employer looking to hire, you can contact me here.</p>
            <Button className="home-button shadow-none border-0"><span>I am looking to hire</span><span className="ml-5"><strong>&#10095;</strong></span></Button>
        </div>
    )
}

export default Home

