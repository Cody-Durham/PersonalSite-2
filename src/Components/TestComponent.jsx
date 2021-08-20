import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/ProjectCards.scss';
import Tabletop from 'tabletop'
import axios from 'axios'



const TestComponent = ( {url} ) => {
    console.log(url);
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
            }
        })
        console.log('this is the projects',projects);


        const finalProjectsRender = projects.map((item) => {
            
        })        
    })




   
    return(
        <>
        {/* {finalProjectsRender} */}
        {/* <h1>{projects}</h1> */}
        <h2>teste</h2>
        </>
    )

    // const finalProjectsRender = projects



    // const loaded = () => {
    //     return (
    //         <div className='project-card-main-collection'>
    //             {/* {projects} */}
    //             <h1>alsdkjfasdfl;ka</h1>
    //         </div>
    //     )
    // }

    // const loading = () => {
    //     return (
    //         <h2>Loading this page..!</h2>
    //     )
    // }

    // return projects ? loaded() : loading()







    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // const [projects, setProjects] = useState([])
    // useEffect( () => {getData()})
    // console.log(projects);


    // const getData = async () => {
    //     const response = await fetch(url)
    //     // console.log('got the url', url);

    //     const data = await response.json()
    //     console.log(data);   
    //     console.log(data.values);   
    //     console.log(data.values[0][1]);   
    //     console.log(data.values[0][2]);   
    //     console.log(data.values[0][3]);   
    //     // setProjects(data.values)
    // }
    
    // const finalProjectsRender = projects.map((item, index) => {
    //     return (
    //         <div className='project-card-wrapper' key={index}>

    //             <div className='project-card-container'>
    //                 <div className='project-card-icon'>
    //                     <a href={item[0]} target='blank'><img src={item[0]} alt='project icons'/></a>
    //                 </div>                
    //             </div>
    //         </div>
    //     )
    // })

    // const loaded = () => {
    //     return (
    //         <div className="project-card-main-collection">
    //             {finalProjectsRender}
    //             <h2>testing</h2>
    //         </div>                
    //     )
    // }
    // const loading = () => {
    //     return <h1>Loading this page..!</h1>
    // }
    // return projects ? loaded() : loading()

}

export default TestComponent


//////////////////////////////////////////////////////////////////////////////////////////////////
// sample code below 
//////////////////////////////////////////////////////////////////////////////////////////////////

/*
$.ajax('https://sheets.googleapis.com/v4/spreadsheets/1oVPq9iIy7lclUAgZLIBaJSXGHU4IIpGdERTxXm4l7vk/values/Sheet1?alt=json&key=AIzaSyAleyzwtA_THyMjT5aallc0Mw4UzpDtJ0A')
.then((data) => {
    // map over the data, generate a simpler data set
    const projects = data.values.map((item) => {
        return {
            project: item[0],
            description: item[4],
            image: item[3],
            liveurl: item[1],
            giturl: item[2],
            category: item[5],
            details: item[6]
        }
    }) 
*/

 // const [data, setData] = useState([])
    // useEffect( () => {
    //     Tabletop.init ({
    //         key: 'AIzaSyAH8jZ9VxAfW8dsgMnuNOheT8g4KSvm7hI', 
    //         simpleSheet: true
    //     })
    //     .then( (data) => setData(data))
    //     .catch((error) => console.log(error))
    // }, [])

    // const [projects, setProjects] = useState([])
    // useEffect( () => {getData()})