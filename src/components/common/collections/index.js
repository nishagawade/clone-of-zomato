import React from 'react';
import "./collection.css"
import Slider from 'react-slick';
import nextArrow from '../carousel/nextArrow';
import prevArrow from '../carousel/prevArrow';

const settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <nextArrow/>,
    prevArrow: <prevArrow/>
  };

const Collection = ({list}) => {
  return (
    <div className="collection-wrapper"> 
        <div className="max-width collection">
           <div className="collection-title">Collections</div>  
           <div className="collection-subtitle-row">
            <div className="collection-subtitle-text">
              Explore curated lists of top restaurants , cafes, pubs, and bars in Lucknow, based on trends
            </div>
            <div className="collection-location">
               <div>All collection in lucknow</div>
               <i class="fa-solid fa-caret-down absolute-center"></i>
            </div>
            </div> 
            <Slider {...settings}>
               {list.map((item)=>(
                <div>
                    <div className="collection-cover">
                         <img src={item.cover} className="collection-image"  alt=""/>
                         <div className="gradient-bg"></div>
                         <div className="collection-card-title">{item.title}</div>
                         <div className="collection-card-subtitle">
                            <div>{item.places}</div>
                            <i class="fa-solid fa-caret-right"></i>
                         </div>
                    </div>
                </div>
               ))}
            </Slider>
        </div> 
    </div>
  )
}

export default Collection