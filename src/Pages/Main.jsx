import ProjectCards from '../Components/ProjectCards';
import '../Styles/Main.scss';
import '../Components/ProjectCards';
import Fade from 'react-reveal/Fade';



// old path = https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json


// correct path = 'https://sheets.googleapis.com/v4/spreadsheets/worksheet_id/values/tab_name?alt=json&key=key-value'
// here is the url for the JSON data 'https://sheets.googleapis.com/v4/spreadsheets/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/values/sheet1?alt=json&key=AIzaSyAH8jZ9VxAfW8dsgMnuNOheT8g4KSvm7hI'
var url = 'https://sheets.googleapis.com/v4/spreadsheets/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/values/sheet1?alt=json&key=AIzaSyAH8jZ9VxAfW8dsgMnuNOheT8g4KSvm7hI'


// 


// console.log('URL', url);
// console.log('URL', url);



const Main = () => {
    return (
            <div className='main-content'>
                <div id='main-image'>  
                <Fade left>
                    <div id='icons'>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674460/Portfolio%20Website%202/React_Icon-08_ihg8yn.png' alt='react.js icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674455/Portfolio%20Website%202/Next_Icon-09_lxg2oc.png' alt='next.js icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674443/Portfolio%20Website%202/Html_Icon-10_vsvllm.png' alt='html icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674436/Portfolio%20Website%202/CSS_Icon-11_we8gb0.png' alt='css icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674464/Portfolio%20Website%202/Sass_Icon-12_uemkt3.png' alt='scss icon'/>
                        </div>
                        {/* <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674432/Portfolio%20Website%202/AWS_Icon-14_s0xn9o.png'/>
                        </div> */}
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628200490/Portfolio%20Website%202/Illustrator_Icon-23_lh5gej.png' alt='illustrator icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628200562/Portfolio%20Website%202/Photoshop_Icon-24_xvpq3a.png' alt='photoshop icon'/>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628200567/Portfolio%20Website%202/Indesign_Icon-25_uwdiv5.png' alt='indesign icon'/>
                        </div>
                    </div>
                </Fade>                       
                </div>
                {/* <div id='main-branding-statement'>
                    <p>I'm an <span>Industrial Designer</span> turned <span>Developer</span> that's able to utilize my creativity to take simple ideas and turn them into modern designs.  With a fortitude and passion for being a creator, I set high standards for all projects I take on. Leveraging a background in consumer-facing product design in multiple fields, you can count on me to bring reflection, personal growth, dependability and consistency to our work. Never compromising on quality or reliability, I'm able to achieve results while scoping deliverables, collaborating, and managing multiple projects</p>
                </div> */}
                <div id='main-branding-statement'>
                    {/* <h3>Welcome to my site!</h3> */}
                    {/* <br></br> */}
                    <p>Im an Industrial Designer turned <span>Software Developer</span> and like to make cool 'things' no matter if its written in code, modeled in 3D software, or physically created.  Theres something about being creative and making designs from nothing thats super inspiring. </p>
                </div>
    
                <div id='main-my-work'>
                    {/* <hr></hr> */}
                    <h3>FEATURED PROJECTS</h3>
                </div>
                <div>
                    {<ProjectCards />}
                    {/* Keeping this line of code for future reference. Mentor said this is pretty common to map in JSX */}
                    {/* {projects.map((item, index) => (<h1>{item.title}</h1>))} */} 
                </div>
            </div>
        )   
}

export default Main