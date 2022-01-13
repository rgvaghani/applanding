import React from 'react'

const About = (props) => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Excepturi tempora nesciunt id. Possimus qui nostrum delectus quam 
                    tempora harum veritatis voluptatem, in voluptatum hic, 
                    quo aspernatur sed quasi autem, fugit obcaecati numquam! Doloribus, eum eaque.</p>
                    <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About
