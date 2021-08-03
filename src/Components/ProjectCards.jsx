import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss'


const url = 'https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json'
const ProjectCards = () => {

    // const [projects, setProjects] = useState(null)

    // useEffect( () => {getData()}, [])
    // const getData = async () => {
    //     const response = await fetch(url)
    //     // console.log('got the data!', url)
    //     const data = await response.json()
    //     // setIsLoaded(data)
    //      setProjects(data.feed.entry.map((item, index) => {
    //         return {
    //             title: item.title.$t
    //         }
    //     }))
    //     console.log('project data', data);
    // }

       return (
        //    <h3>testing</h3>
        <div className='project-card-container'>
            <div className='project-card'>
                <div className='project-card-icon'>
                    <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628029356/Portfolio%20Website%202/GoFish_Card-17_rldjwp.png' /> 
                </div>

                <div className='project-card-title'>
                    <h3>Go Fish</h3>
                </div>
                <div className='project-card-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio maiores, aut accusantium eum earum architecto modi placeat nisi quaerat tenetur. Fuga quis est voluptate incidunt ab nemo, laboriosam dolore?</p>
                </div>
                
                <div className='project-card-button-container'>
                    <div className='project-card-buttons'>
                        <button>Live</button>
                        <button>Git</button>
                    </div>
                </div>


            </div>
         </div>
    )
    
    
}
{/* {projects.map((item, index) => (<h1>{item.title}</h1>))} */}

export default ProjectCards