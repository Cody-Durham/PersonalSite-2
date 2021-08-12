import React from 'react'
import '../Styles/Articles.scss'

const Articles = () => {
    console.log('test');
    return (
        <div className='article-main-section'>
           
            <div className='article-card'>
                <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628716133/Portfolio%20Website%202/Screen_Shot_2021-08-11_at_3.08.35_PM_p4s9b5.png' alt='painted brick wall'></img>
                <a href='https://medium.com/@codydd/your-portfolio-isnt-as-good-as-you-think-880a0dc7ad6b' target='blank'>Your Portfolio Isnt as good as you think</a>
            </div>    
            <div className='article-card'>
                <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628716133/Portfolio%20Website%202/Screen_Shot_2021-08-11_at_3.08.35_PM_p4s9b5.png' alt='painted brick wall'></img>
                <a href='https://medium.com/@codydd/your-portfolio-isnt-as-good-as-you-think-880a0dc7ad6b' target='blank'>Your Portfolio Isnt as good as you think</a>
            </div>    
        
        </div>
    )
}

export default Articles