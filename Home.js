import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../Image/Profile_image.jpeg';
import { gsap } from 'gsap';
import '../CSS Folder/Home.css';

function Home() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, { opacity: 0, y: -50, duration: 1 });
    gsap.from(subheadingRef.current, { opacity: 0, x: -50, duration: 1, delay: 0.3 });
    gsap.from(paragraphRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    gsap.from(buttonsRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 0.9 });
    gsap.from(imageRef.current, { opacity: 0, x: 100, duration: 1, delay: 1.2 });
  }, []);

  return (
    <div className="home_wrapper" id='home'>
      <div className="home_container">
        <nav>
          <ul>
            <li><Link to='home'>Home</Link></li>
            <li><Link to="about">About Me</Link></li>
            <li><Link to="skills">Skills</Link></li>
            <li><Link to="projects">Projects</Link></li>
            <li><Link to="contact">Contact Me</Link></li>
          </ul>
        </nav>
      </div>

      <div className="hero_wrapper">
        <div className="hero_container">
          <div className="first_container">
            <h1 ref={headingRef}>Hi, I'm <span>Rahul Kumar</span></h1>
            <h2 ref={subheadingRef}>A Full Stack Developer & Sports Enthusiast</h2>
            <p ref={paragraphRef}>
              Passionate about crafting digital experience using React, JavaScript and love for Sports!
            </p>
            <div className="CTA_buttons" ref={buttonsRef}>
              <button>View Projects</button>
              <button>Contact Me</button>
            </div>
          </div>
          <div className="profile_image" ref={imageRef}>
            <img src={image2} alt="profile_image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
