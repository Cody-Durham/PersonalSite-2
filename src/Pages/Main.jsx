import React from 'react'
import About from './About'
import Header from '../Components/Header'
import '../Styles/Main.scss'



const Main = () => {
    return (
        <div className='main-content'>
            <div id='main-image'>
                {/* <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627942094/Portfolio%20Website%202/hannah-wei-aso6SYJZGps-unsplash_sn0lpw.jpg' /> */}
                
                <div id='icons'>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674460/Portfolio%20Website%202/React_Icon-08_ihg8yn.png'/>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674455/Portfolio%20Website%202/Next_Icon-09_lxg2oc.png'/>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674443/Portfolio%20Website%202/Html_Icon-10_vsvllm.png'/>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674436/Portfolio%20Website%202/CSS_Icon-11_we8gb0.png'/>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674464/Portfolio%20Website%202/Sass_Icon-12_uemkt3.png'/>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674432/Portfolio%20Website%202/AWS_Icon-14_s0xn9o.png'/>
                    </div>
                </div>

            </div>
            <div id='main-branding-statement'>
                <p>I'm an Industrial Designer turned Developer that's able to utilize my creativity to take simple ideas and turn them into modern designs.  With a fortitude and passion for being a creator, I set high standards for all projects I take on. Leveraging a background in consumer-facing product design in multiple fields, you can count on me to bring reflection, personal growth, dependability and consistency to our work. Never compromising on quality or reliability, I'm able to achieve results while scoping deliverables, collaborating, and managing multiple projects</p>
            </div>

            <div id='main-my-work'>
                <h3>MY WORK</h3>
            </div>

            <div className='sticky-footer'>
            {/* <h1>This is the main page</h1> */}
            </div>
        </div>
    )
}

export default Main