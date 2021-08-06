import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss';


const ProjectCards = ( {url} ) => {
    // console.log(url);
    
    const [projects, setProjects] = useState([])
    useEffect( () => {getData()}, [])

    const getData = async () => {
        const response = await fetch(url)
        // console.log('got the url!', url)
       
        const data = await response.json()
        setProjects(data.feed.entry) 
        console.log('project data', data);
        // console.log('project data', data.feed.entry[0].title); //=> GoFish// working correctly    
        // console.log('project dataaaaaaaaa', data.feed.entry); //=> GoFish// working correctly    
    }
    
    const finalProjectsRender = projects.map((item, index) => {
        return (
            <div className='project-card-wrapper'>

                <div className='project-card-container'>
                    <div className='project-card-icon'>
                        <a href={item.gsx$liveurl.$t} target='blank'><img src={item.gsx$image2.$t} /></a>
                    </div>
                    <div className='project-card'>
                        <h3>{item.title.$t}</h3>
                        <p>{item.gsx$description.$t}</p>

                        <div className='project-card-button-container'>
                            <div className='project-card-buttons'>
                                <a href={item.gsx$liveurl.$t} target='blank'>LIVE </a>
                            </div>                    
                            <div className='project-card-buttons'>
                                <a href={item.gsx$giturl.$t} target='blank'>GIT </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const loaded = () => {
        return (
            <div className="project-card-main-collection">
                {finalProjectsRender}
            </div>                
        )
    }
    const loading = () => {
        return <h1>Loading this page..!</h1>
    }
    return projects ? loaded() : loading()
   
    
}

export default ProjectCards