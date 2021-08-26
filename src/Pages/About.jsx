import React from 'react'
import '../Styles/About.scss'
import '../Components/UnderConstruction'
import UnderConstruction from '../Components/UnderConstruction'
import { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';


const About = () => {
    const [animations, setAnimations] = useState([])

    useEffect(() => {
        
    },[])


    return (<>
        <div>
          {/* <h1>About me</h1> */}
      </div>
        <div className='about-main-section'>
            <div className='section1'>
                <Fade left>
                <div className='left'>
                    <div>
                        {/* <h1>About</h1> */}
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629801794/Portfolio%20Website%202/Page%20Headers/About_Header-43_tjvany.png'></img>
                    </div>
                    <div>
                        <p>Im a creative software engineer located in Devner Colordo</p>
                    </div>
                    <article>
                    I'm an Industrial Designer turned Developer that's able to utilize my creativity to take simple ideas and turn them into modern designs. Leveraging a background in consumer-facing product design my goals are to create beautiful products to help enrich people's interactions between passions and functional designs.
                    </article>
                </div>
                </Fade>
                <Fade right>
                <div className='right'>
                    <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629800721/Portfolio%20Website%202/AboutMeSketch-02-01_yk6ltw.png'></img>
                </div>
                </Fade>
            </div>
                <Fade bottom>
                    <div className='middle'>
                        <div id='left-line'></div>
                        <p>Other Random Things About Me</p>
                        <div id='right-line'></div>
                    </div>
                </Fade>                    
                <Fade bottom>
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
                                    <p>I havent taseted sweet caffeine for 5 yrs</p>
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
                </Fade>
           {/* <UnderConstruction />  */}
           <Fade left>
                <div className='section3'>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803830/Portfolio%20Website%202/Pics%20Of%20Me/CCC4_lldcmf.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803889/Portfolio%20Website%202/Pics%20Of%20Me/IMG_2017_p3znas.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803905/Portfolio%20Website%202/Pics%20Of%20Me/IMG_3437_sdywuv.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803853/Portfolio%20Website%202/Pics%20Of%20Me/IMG_0658_jw5mvl.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803838/Portfolio%20Website%202/Pics%20Of%20Me/FullSizeRender_p0tbxa.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803813/Portfolio%20Website%202/Pics%20Of%20Me/10412020_870123923068197_6808264103215154568_n_nc0pcx.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629803868/Portfolio%20Website%202/Pics%20Of%20Me/IMG_0876_r1jubz.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629804278/Portfolio%20Website%202/Pics%20Of%20Me/IMG_4246_oewq0d.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629804420/Portfolio%20Website%202/Pics%20Of%20Me/20180806_121321_d22icj.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629804301/Portfolio%20Website%202/Pics%20Of%20Me/IMG_3893_lau803.jpg'></img>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629804334/Portfolio%20Website%202/Pics%20Of%20Me/IMG_2335_qyxbg1.jpg'></img>
                    </div>
            </Fade>
        </div>
        
        </>
        
    )
}

export default About