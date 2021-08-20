import React from 'react'
import '../Styles/Resume.scss'

const Resume = () => {
    return (<>
        <div className='resume-main-section'>
        <div id='ga-logo'>
            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628735671/Portfolio%20Website%202/GA_Icons-26_osuqyk.png' alt='ga icon'></img>
        </div>
        <div className='resume-header'>
            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628734100/Resume%20/asdfasdfasdfasdfasdfasdf-01-01_rr4ljw.png' alt='name and contact'></img>
        </div>


        <article id='brand-statment'>
            As a developer with a fortitude and passion for being a creator, I set high standards for any project I take on. Never compromising on quality or reliability, I'm able to achieve results while scoping deliverables, collaborating, and managing multiple projects. 
        </article>

        <h2>Technical Skills</h2>
        <p className='resume-copy'>Javascript | HTML | CSS | React.js | jQuery | Terminal | Git | GitHub | Node.js | Express | Bootstrap | Next.js</p>
        <h2>Education / Experience</h2>
        {/* <h3>General Assembly Immersive <span>3/21-6/21</span></h3> */}
        <a href='https://generalassemb.ly/education/software-engineering-immersive/denver' target='blank'><h3>General Assembly Immersive <span>3/21-6/21</span></h3></a>
        <h4 id='overall'>Overall:</h4>
        <p className='resume-copy'>Worked through the 12 week Full Immersive Bootcamp completing various projects and building applications using multiple languages and frameworks keeping a focus on writing clean, understandable, functioning code.</p>
        <p className='resume-copy'>Approximately <span>750</span> hours of coding experience</p>
        

        <div className='project-container'>
        <a href='https://codydurham.dev/' target='blank'><h4 className='project-headings'>Portfolio Website Redesign</h4></a>
            <ul>
                <li>
                    <p className='project-copy'>After completion of General Assembly bootcamp Ive decided to redo my portfolio using React.js in for the frontend development and Google sheets headless CMS as the backend API.</p>
                </li>
                <li>
                    <p className='project-copy'>Using React Router, Link, Axios and SASS I was able to create a multi-page site showing various skills such as design, aesthetic layout, graphic design and technical companticy.</p>
                </li>
                <li>
                    <p className='project-copy'>All icons and graphics were made using Adobe Illustrator, saved to a hosting site, imported into the React project then styled using SASS.</p>
                </li>
                <li>
                    <p className='project-copy'>Using React Router, Link, Axios and SASS I was able to create a multi-page site showing various skills such as design, aesthetic layout, graphic design and technical companticy.</p>
                </li>
            </ul>
        <a href='https://main.d38tit84n7ekiv.amplifyapp.com/' target='blank'><h4 className='project-headings'>Project H&M Clone</h4></a>
            <ul>
                <li>
                    <p className='project-copy'>For a final capstone project I decided to work together with a partner to recreate the H&M e-commece site to gain experiece and an overall idea of the complexity of the site. We decided to take on a larger project because there were two of us.</p>
                </li>
                <li>
                    <p className='project-copy'>My partner and I decided early on during the extensive planning process (2 days) that we would cover more ground if we split the workload. He was primarily responsible for the backend routes using AWS and I was largley responsible for the frontend working with React. I ws responsible for generating and planning out assets, colors, icons and overall layout / creation of the functional site.</p>
                </li>
            </ul>
        
        <a href='https://flamboyant-archimedes-058278.netlify.app/' target='blank'><h4 className='project-headings'>Project GoFish</h4></a>
            <ul>
                <li>
                    <p className='project-copy'>As an avid outdoor enthusist and angler I wanted to create an application Id be passionate about and be able to use on a regular basis. Being my first project using React, GoFish is an app that pulls data from an API and displays it to show real-time weather conditions coupled with static images of the river at the specific location of the API data. Note: currently only available in movile view as the app is intended for ‘on the go’ users.</p>
                </li>
                <li>
                    <p className='project-copy'>Created detailed UX wireframes during planning stages for final app styling and React architecture using Adobe Illustrator.</p>
                </li>
                <li>
                    <p className='project-copy'>All streams routes, weather info, and city name are dependent on zip code information pulled from the API.</p>
                </li>
            </ul>
        <a href='https://brave-wozniak-8c8eab.netlify.app/' target='blank'><h4 className='project-headings'>Project Frozzy</h4></a>
            <ul>
                <li>
                    <p className='project-copy'>Worked within a small team to match a provided UI/UX comp to create the working version of the application using full CRUD functionality.</p>
                </li>
                <li>
                    <p className='project-copy'>My primary role in the team was to lead / create our react architecture, create initial wireframes for proof of concept and prototyping as well as providing most of the CSS styling.</p>
                </li>
                </ul>

            <div>
                <a href='https://turing.edu/' target='blank'><h3>Turing / Full Immersive<span>10/20-2/21</span></h3></a>
                <h4 id='overall'>Overall:</h4>
                <p className='resume-copy'>Gained a solid base understanding of fundamentals including CSS, Vanilla Javascript, HTML while completing multiple vanila JS based applications and working within a team dynamic using Git/Github to provide project deliverables</p>
                <p className='resume-copy'>Approximately <span>600</span> hours of coding experience</p>
            </div>
            <div>
                <a href='https://www.msudenver.edu/programs/industrial-design-major-bs/' target='blank'><h3>Metropolitan State University of Denver<span>1/07-2/13</span></h3></a>
                <h4 id='overall'>Overall:</h4>
                <p className='resume-copy'>Gained a solid base understanding of fundamentals including CSS, Vanilla Javascript, HTML while completing multiple vanila JS based applications and working within a team dynamic using Git/Github to provide project deliverables</p>
            </div>
        </div>



        <div className='job-container'>
            <a href='https://mountainsmith.com/' target='blank'><h3 className='job'>Mountainsmith<span>3/18-3/20</span></h3></a>
            <h4 className='job-title'>Lead Designer | Product Developer</h4>
            <ul>
                <li>
                    <p className='project-copy'>To act as the primary designer in all new and existing product design while pushing the boundaries of brand identity through thoughtful design using function and company appropriate aesthetics.</p>
                </li>
                <li>
                    <p className='project-copy'>Maintained company directives to provide ‘on target’ designs for on-time delivery to our key retailers and sales force through implementation of self guided product standups, product documentation and maintaining scheduled deliverables.</p>
                </li>
                <li>
                    <p className='project-copy'>Consistently engaged and traveled to overseas factory partners suppliers in Vietnam, China, and Japan to ensure samples and final product delivery.</p>
                </li>
                <li>
                    <p className='project-copy'>Played key role in processing visual graphic designs / workbook layout / lifestyle & product photography / product colorways.</p>
                </li>
            </ul>

            


            <a href='https://mountainsmith.com/' target='blank'><h3 className='job'>Mountainsmith<span>3/16-3/18</span></h3></a>
            <h4 className='job-title'>Product Designer</h4>
            <ul>
                <li>
                    <p className='project-copy'>Managed multiple projects on a day to day basis while consistently generating accurate designs for ‘on brand’ product deliverables</p>
                </li>
                <li>
                    <p className='project-copy'>Assisted and oversaw the development of Mountainsmiths’ SMU program on a design/ development level while providing all necessary documentation and requirements to factories overseas</p>
                </li>
                <li>
                    <p className='project-copy'>Created supporting product documentation including spec packages, hang tag information, various packaging applications, SKU/ UPC management</p>
                </li>
            </ul>
        </div>
    </div>
    <div className='contact-icon-container'>
        <div>
           <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628738490/Resume%20/Resume_Email_horiz-32_t77vjk.png' alt='linkedin icon'></img>
        </div>
    </div>
    
        </>
    )
}

export default Resume 