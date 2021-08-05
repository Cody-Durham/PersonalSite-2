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
        
        // setProjects(data.feed.entry.map((item, index) => {
        //     return {
        //         // title: item.title.$t,
        //         // live: item.gsx$liveurl.$t,
        //         // git: item.gsx$giturl.$t, 
        //         // image: item.gsx$image.$t,
        //         // // description: item.gsx$description.$t
        //         // test: item.gsx$testcolumn.$t
        //     }
        //  }))
        setProjects(data.feed.entry) 



        console.log('project data', data);
        // // console.log('project data', data.feed.entry[0].title); //=> GoFish// working correctly    
        // console.log('project dataaaaaaaaa', data.feed.entry); //=> GoFish// working correctly    
    }
    
    const finalProjectsRender = projects.map((item, index) => {
        return (
            <>
            <div className='project-card-wrapper'>
                <div className='project-card-container'>
                    <div className='project-card-icon'>
                        <img src={item.gsx$image2.$t} /> 
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
            </>
        )
    })

    const loaded = () => {
        return (
            
                <>
                    {/* <div className='project-card-icon'>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628029356/Portfolio%20Website%202/GoFish_Card-17_rldjwp.png' /> 
                    </div> */}

                    <div className='project-card-title'>
                        {finalProjectsRender}
                        {/* {projects.map((item, index) => 
                            <div key={index}>
                                <h1>{item.title}</h1>
                                <h3>{item.test}</h3>
                            </div>)} */}
                    </div>                
                </>
            
        )
    }
    const loading = () => {
        return <h1>Loading this page..!</h1>
    }
    return projects ? loaded() : loading()
   
    
}


// console.log(url);
export default ProjectCards