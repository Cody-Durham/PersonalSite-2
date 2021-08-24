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

            <div className='section2'>
                <div className='lower-container'>
                    <ul>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_fishingLogo-35_pgrlpd.png'></img>
                            <p>I like to fly fish</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_bikingLogo-36_invfke.png'></img>
                            <p>Its been a while since I've been mountain biking</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_dogLogo-37_n9pevk.png'></img>
                            <p>My lab pup is everything to me</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_vacuumLogo-38_v6cczd.png'></img>
                            <p>I used to sell vacuums</p>
                        </li>
                    </ul>
                </div>
                <div className='lower-container'>
                    <ul>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_coffeeLogo-39_fgpl6s.png'></img>
                            <p>II havent taseted sweet caffeine for 5 yrs</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_sandalsLogo-40_q7xxr3.png'></img>
                            <p>My sandal to shoe ratio is around 4:1</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_oilLogo-41_ov7n7a.png'></img>
                            <p>I worked on an oil rig, in the winter, at night</p>
                        </li>
                        <li>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629761357/Portfolio%20Website%202/About%20Me%20Logos/About_archeryogo-42_vn9qkh.png'></img>
                            <p>I enjoy archery</p>
                        </li>
                    </ul>
                </div>
            </div>
            





            {/* <UnderConstruction />  */}
        </div>
        </>
        
    )
}

export default About