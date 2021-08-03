import React, { useEffect, useState } from 'react'
import ProjectCards from '../Components/ProjectCards'
import '../Styles/Main.scss'
import Axios from 'axios'
import axios from 'axios'

// this is the default URL template
// sheet Id: 1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo
// Sheet number: 1
//https://spreadsheets.google.com/feeds/list/SHEET_ID/SHEET_NUMBER/public/full?alt=json
// correct path = https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json

const url = 'https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json'
// console.log('this is a test', url.feed.gsx$project.$t);


const Main = () => {
    const [projects, setProjects] = useState(null)

    useEffect( () => {getData()}, [])
    const getData = async () => {
        const response = await fetch(url)
        // console.log('got the data!', url)
        const data = await response.json()
        // setIsLoaded(data)
         setProjects(data.feed.entry.map((item, index) => {
            return {
                title: item.title.$t
            }
         }))
        console.log('project data', data);
    }

    const loaded = () => {

       return (
        <div className='main-content'>
            <div id='main-image'>                         
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
                <hr></hr>
                <h3>MY WORK</h3>
            </div>
            <div>
                {/* <h1>THIS IS WHERE THE CARDS WILL GO</h1> */}
                {/* {projects.map((item, index) => (<h1>{item.title}</h1>))} */}
                <ProjectCards /> 
            </div>
        
            <div className='sticky-footer'>
            {/* <h1>This is the main page</h1> */}
            </div>
        </div>
    )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return projects ? loaded() : loading()
   
}

export default Main