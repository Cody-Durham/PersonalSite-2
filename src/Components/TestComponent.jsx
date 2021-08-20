import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss';
import Tabletop from 'tabletop'
import axios from 'axios'


const TestComponent = ( {url} ) => {
    console.log(url);
    const [projects, setProjects] = useState([])

    useEffect( () => {
        axios
        .get('https://sheets.googleapis.com/v4/spreadsheets/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/values/sheet1?alt=json&key=AIzaSyAH8jZ9VxAfW8dsgMnuNOheT8g4KSvm7hI')
        .then((data) => {
            // console.log(data.data.values[1][0])
            // console.log(response.data.values[1][0])// this is 'goFish'
            // console.log(response.data.values[1][1]) // this is 'live'
            const projects = data.data.values.map((item, index) => {
                return {
                    name: item[0],
                    liveURL: item[1], 
                    gitURL: item[2],
                    image: item[4],
                    description: item[5], 
                    tech: item[7],
                    styling: item[10]
                }
            })
            setProjects(projects)
        })
    }, [])
    
    const finalProjectsRender = projects.map((item, index) => {
        return (
           <div className='project-card-wrapper' key={index}>
                <div className='project-card-container'>
                    <div className='project-card-icon'>
                        <a href={item.liveURL} target='blank'><img src={item.image} alt='project icons'/></a>
                    </div>
                    <div className='project-card'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>

                    <div className='project-card-button-container'>
                        <div className='project-card-buttons'>
                            <a href={item.liveURL} target='blank'>LIVE </a>
                        </div>                     
                         <div className='project-card-buttons'>
                            <a href={item.gitURL} target='blank'>GIT</a>
                        </div>
                    </div>
                    <div className='tech'>
                        <p>{item.tech}</p>
                        <p>{item.styling}</p>
                    </div>
                </div>
            </div>
        
        )
    })

    
    const loaded = () => {
        return (
            <>
             {finalProjectsRender}
            </>
            )
        }
        
        const loading = () => {
            return <h1>Loading...</h1>
        }
    return projects.length > 0 ? loaded() : loading()

}

export default TestComponent
