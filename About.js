import { useEffect, useRef } from 'react';
import image1 from '../Image/My_Profile_image.jpeg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from 'gsap';
import '../CSS Folder/About.css';

function About() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, duration: 1 });
    gsap.from(imageRef.current, { x: -100, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from(headingRef.current, { y: -30, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from(paragraphRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.9 });
    gsap.from(iconsRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 1.2 });
  }, []);

  return (
    <div id='about' className="about_wrapper" ref={containerRef}>
      <div className="about_container">
        <div className="about_first_container" ref={imageRef}>
          <img src={image1} alt="about_image" />
        </div>
        <div className="about_info">
          <h1 ref={headingRef}>ABOUT ME</h1>
          <p ref={paragraphRef}>
            Hi, I'm Rahul Kumar Yadav — a passionate Web Full Stack Developer with a strong foundation in both frontend and backend technologies. Currently pursuing my B.Tech in Computer Science and Engineering, I specialize in building responsive, scalable, and high-performance web applications using HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB. I love turning complex problems into elegant, user-friendly digital solutions.
            Outside of coding, I'm also a district-level cricket player, which has instilled in me discipline, persistence, and a team-first mindset — all of which I bring to my development process. From debugging backend logic to crafting intuitive user interfaces, I approach every challenge with dedication and a hunger to improve.
            So far, I've built projects like “Sports Valley,” a real-time sports news and stats platform, and contributed as a full stack developer to a “Plant Disease Detection System” during a recent hackathon. I'm always open to learning, collaborating, and taking on opportunities that push me to grow. Let’s connect and build something impactful together!
          </p>
          <div className="icons" ref={iconsRef}>
            <div className="circle">
              <a href='https://github.com/rahullnct' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className="circle">
              <a href='https://www.linkedin.com/in/rahul-kumar-yadav-530976233' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
