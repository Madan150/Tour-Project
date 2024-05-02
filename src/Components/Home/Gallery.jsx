import React from 'react'
import '../../Assets/CSS/Home.css'
import GalleryImg1 from '../../Assets/Images/gallery-01.jpg'
import GalleryImg2 from '../../Assets/Images/gallery-02.jpg'
import GalleryImg3 from '../../Assets/Images/gallery-03.jpg'
import GalleryImg4 from '../../Assets/Images/gallery-04.jpg'
import GalleryImg5 from '../../Assets/Images/gallery-05.jpg'
import GalleryImg6 from '../../Assets/Images/gallery-06.jpg'
import GalleryImg7 from '../../Assets/Images/gallery-07.jpg'
import GalleryImg8 from '../../Assets/Images/gallery-08.jpg'




const Gallery = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <p><span className='cont rounded-pill p-1'>Gallery</span></p>
                    <h4>Visit our customers tour gallery</h4>
                </div>
                <div className="gallery">
                    <div className="gallery_img">
                        <img src={GalleryImg1} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg2} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg3} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg4} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg5} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg6} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg7} alt="" />
                    </div>
                    <div className="gallery_img">
                        <img src={GalleryImg8} alt="" />
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Gallery
