import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import first_image from '../Image_Section/cr7_first.jpg';
import second_image from '../Image_Section/Cr7_second.jpeg';
import third_image from '../Image_Section/Cr7_third.jpeg';
import forth_image from '../Image_Section/Cr7_forth.webp';
import fifth_image from '../Image_Section/Cr7_fifth.webp';
import '../CSS Folder/ImageSlider.css';
import { useEffect, useRef } from "react";

function ImageSlider()
{
    const slider= useRef(null);
    useEffect(()=>{
      const interval=setInterval(()=>{
        if(slider.current)
        {
            slider.current.scrollLeft +=slider.current.clientWidth;
            if(slider.current.scrollLeft + slider.current.clientWidth>=slider.current.scrollWidth)
            {
                slider.current.scrollLeft=0;
            }
        }
      },3000);
    return ()=> clearInterval(interval);
    },[])
   
    return(
        <div className="imageSlider_wrapper">
            <div className="imageslider_container" ref={slider}>
             <GrFormPrevious/>
             <img src={first_image} alt="first image"/>  
             <img src={second_image} alt="second image"/> 
             <img src={third_image} alt="third image"/> 
             <img src={forth_image} alt="forth image"/> 
             <img src={fifth_image} alt="fifth image"/>            
            <MdOutlineNavigateNext/>
            </div>
         </div>
    )
};
export default ImageSlider;