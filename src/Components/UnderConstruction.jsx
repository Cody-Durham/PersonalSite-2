import React from 'react'
import '../Styles/UnderConstruction.scss'

const constructionImages = [
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382363/Portfolio%20Website%202/mulyadi-wQRCaurCX3k-unsplash_xqstmr.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382366/Portfolio%20Website%202/daniel-cheung-cPF2nlWcMY4-unsplash_vifwlv.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382367/Portfolio%20Website%202/jelleke-vanooteghem-6NUlOHM40w8-unsplash_lqrdqi.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382367/Portfolio%20Website%202/daniel-cheung-nXKNn2L4fDw-unsplash_rajgle.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382370/Portfolio%20Website%202/jackson-simmer-ZxRHtPacwUY-unsplash_fussp4.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382371/Portfolio%20Website%202/ivan-diaz-dTVYuKG4n-8-unsplash_mbpcr1.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382372/Portfolio%20Website%202/will-porada-DH5183gvKUg-unsplash_juhoap.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628382376/Portfolio%20Website%202/philip-veater-Y58Sww9SR1c-unsplash_pwkcgh.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394196/Portfolio%20Website%202/hello-i-m-nik-qaKG2zozPYE-unsplash_lxyqeu.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394196/Portfolio%20Website%202/hello-i-m-nik-qaKG2zozPYE-unsplash_lxyqeu.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394250/Portfolio%20Website%202/daniel-cheung-ZqqlOZyGG7g-unsplash_qmhekb.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394277/Portfolio%20Website%202/hello-i-m-nik-F3E5Bkq0JUY-unsplash_ima5gg.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394298/Portfolio%20Website%202/hello-i-m-nik-OOJAUol19oo-unsplash_xdasws.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394325/Portfolio%20Website%202/alan-hardman-Y-hl3rx5fr8-unsplash_evpzso.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394358/Portfolio%20Website%202/zakaria-ahada-0xOCVe7nUU0-unsplash_oxkmue.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628394384/Portfolio%20Website%202/daniel-cheung-p-HOSqp1Ms4-unsplash_s2onze.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395152/Portfolio%20Website%202/alan-hardman-2epxSXR-e68-unsplash_v6fjax.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395178/Portfolio%20Website%202/marton-szalai-Kzh_MJof2-c-unsplash_wwyoot.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395208/Portfolio%20Website%202/daniel-cheung-mvo-xJE1oFg-unsplash_jrnwgv.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395228/Portfolio%20Website%202/hello-i-m-nik-fDaUCTp28dA-unsplash_xyyu13.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395272/Portfolio%20Website%202/phil-hearing-PhnJhjH9Y9s-unsplash_vemkhm.jpg', 
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395298/Portfolio%20Website%202/hello-i-m-nik-2bVe_GVW7rw-unsplash_d361cy.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395331/Portfolio%20Website%202/daniel-cheung--oM_twQDw2Y-unsplash_smdlch.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395361/Portfolio%20Website%202/daniel-cheung-zky0BmMT5m8-unsplash_pryzps.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395399/Portfolio%20Website%202/daniel-cheung-B7N0IjiIJYo-unsplash_ywrvqq.jpg',
    'https://res.cloudinary.com/dhad6e9gj/image/upload/v1628395430/Portfolio%20Website%202/hello-i-m-nik-l4ADb9OVqTY-unsplash_vtycoq.jpg',
]



const UnderConstruction = () => {
    // console.log('construction images ->', constructionImages);  


let randomImages = () => {
    let randImage = constructionImages[Math.floor(Math.random() * constructionImages.length)]
    console.log(randImage)
    return randImage
}

    return (
        <div className='construction-container'>
            <div className='construction-text'>
                <h1>Sorry Eh!</h1>
                <h2>Still workin on this page.. but itll be up soon!</h2>
            </div>

            <div id='construction-image'>
                <img src={randomImages(constructionImages)}></img>
            </div>

        </div>
    )
}

export default UnderConstruction; 