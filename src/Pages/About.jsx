import React from 'react'
import '../Styles/About.scss'
import '../Components/UnderConstruction'
import UnderConstruction from '../Components/UnderConstruction'

const About = () => {
    return (<>
      <div>
          <h1>About me</h1>
      </div>
        <div className='about-main-section'>
            <div className='section1'>
                <div className='left'>
                    <div>
                        <h1>About</h1>
                    </div>
                    <div>
                        <p>Im a creative software engineer located in Devner Colordo</p>
                    </div>
                    <article>
                    I'm an Industrial Designer turned Developer that's able to utilize my creativity to take simple ideas and turn them into modern designs. Leveraging a background in consumer-facing product design my goals are to create beauiful products to help enrich peoples interactions between passions and functional designs.
                    </article>
                </div>
                <div className='right'>
                    <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629757997/Portfolio%20Website%202/Screen_Shot_2021-08-23_at_4.32.56_PM_sg6y7y.png'></img>
                </div>
            </div>

            <div className='middle'>
                <div id='left-line'></div>
                <p>Other Random Things About Me</p>
                <div id='right-line'></div>
            </div>

            {/* <UnderConstruction />  */}
        </div>
        </>
        
    )
}

export default About