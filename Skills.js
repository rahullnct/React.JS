import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { gsap } from "gsap/gsap-core";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../CSS Folder/Skills.css';
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function Skills() 
{
   const sectionref=useRef(null);
   const skillRefs=useRef([]);
   skillRefs.current=[];

    const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(skillRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
   
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

 return(
    <section className="skills_wrapper" id="skills" ref={sectionref}>
        <div className="skills_main">
    <h1 className="skill_heading">Skills</h1>
      <div className="skills_containers">
           <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>HTML</span>
               <div className="icon"><FaHtml5/></div>
            </div>
            <span className="percentage">90%</span>
            <div className="someline">
                 <div className="line_container">
               <div className="line" style={{ width: '90%' }}></div>
            </div>
            </div>
           
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>CSS</span>
               <div className="icon"><FaCss3Alt/></div>
            </div>
            <span className="percentage">85%</span>
            <div className="someline">
                 <div className="line_container">
               <div className="line" style={{ width: '85%' }}></div>
            </div>
            </div>
           
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>Javascript</span>
               <div className="icon"><IoLogoJavascript/></div>
            </div>
            <span className="percentage">70%</span>
            <div className="someline">
            <div className="line_container">
              <div className="line" style={{ width: '70%' }}></div>
            </div>
            </div>
            
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>React JS</span>
                <div className="icon"><FaReact/></div>
            </div>
            <span className="percentage">70%</span>
            <div className="someline">
              <div className="line_container">
               <div className="line" style={{ width: '70%' }}></div>
            </div>   
            </div>
           
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>Node JS</span>
               <div className="icon"><FaNodeJs/></div>
            </div>
            <span className="percentage">60%</span>
            <div className="someline">
                 <div className="line_container">
               <div className="line" style={{ width: '60%' }}></div>
                </div> 
            </div>
          
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>Express JS</span>
                <div className="icon"><SiExpress/></div>
            </div>
            <span className="percentage">60%</span>
            <div className="someline">
                <div className="line_container">
                 <div className="line" style={{ width: '60%' }}></div>
                </div>
            </div>
            </div>
        
         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>MongoDB</span>
                <div className="icon"><SiMongodb/></div>
            </div>
            <span className="percentage">65%</span>
            <div className="someline">
                <div className="line_container">
               <div className="line" style={{ width: '65%' }}></div>
            </div>
            </div>
            
        </div>

         <div className="skill_container" ref={addToRefs}>
            <div className="all_skill">
               <span>Postman</span>
               <div className="icon"><SiPostman/></div>
            </div>
            <span className="percentage">70%</span>
            <div className="someline">
                <div className="line_container">
               <div className="line" style={{ width: '70%' }}></div>
            </div> 
            </div>
           
        </div>
        
        </div>
        </div>
        </section>
 )    
};
export default Skills;