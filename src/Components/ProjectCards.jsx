import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss';



const url = 'https://sheets.googleapis.com/v4/spreadsheets/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/values/sheet1?alt=json&key=AIzaSyAH8jZ9VxAfW8dsgMnuNOheT8g4KSvm7hI'



const ProjectCards = () => {
    // console.log('ProjectCards URL', url.values[0]);
    
    
    const [projects, setProjects] = useState([])
    useEffect( () => {getData()})

    const getData = async () => {
        const response = await fetch(url)
        // console.log('got the url!', url.values)
        // console.log(data.data.values[1][0])
       
        const data = await response.json()
        // setProjects(data.feed.entry) 
        // console.log('test')
        // console.log('project data', data);
        // console.log('project data', data.feed.entry[0].title); //=> GoFish// working correctly    
        // console.log('project dataaaaaaaaa', data.feed.entry); //=> GoFish// working correctly    
    }
    
    const finalProjectsRender = projects.map((item, index) => {
        return (
            <h2>projects</h2>
            // <div className='project-card-wrapper' key={index}>

            //     <div className='project-card-container'>
            //         <div className='project-card-icon'>
            //             <a href={item.gsx$liveurl.$t} target='blank'><img src={item.gsx$image2.$t} alt='project icons'/></a>
            //         </div>
            //         <div className='project-card'>
            //             <h3>{item.title.$t}</h3>
            //             <p>{item.gsx$description.$t}</p>
            //         </div>

            //         <div className='project-card-button-container'>
            //         <div className='project-card-buttons'>
            //             <a href={item.gsx$liveurl.$t} target='blank'>LIVE </a>
            //         </div>                    
            //         <div className='project-card-buttons'>
            //             <a href={item.gsx$giturl.$t} target='blank'>GIT</a>
            //         </div> 
                    
            //         </div>
            //         <div className='tech'>
            //             <p>{item.gsx$tech1.$t}</p>
            //             <p>{item.gsx$styling.$t}</p>
            //         </div>
            //     </div>
            // </div>
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