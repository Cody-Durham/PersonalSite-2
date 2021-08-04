import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss';


const ProjectCards = ( {url} ) => {
    // console.log(url);
    

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
        // console.log('project data', data);
        // console.log(url);
    }


    const loaded = () => {
        return (
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
    const loading = () => {
        return <h1>Loading this page..!</h1>
    }
    return projects ? loaded() : loading()
   
    
}


// console.log(url);
export default ProjectCards