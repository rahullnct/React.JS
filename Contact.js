import { useEffect, useRef, useState } from "react";
import image from '../Image/my_contact_image.jpg';
import '../CSS Folder/Contact.css';
import Swal from "sweetalert2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formtype, setformtype] = useState({
    name: "", email: "", message: ""
  });

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  inputRefs.current = [];

  const addInputRef = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  function changehandler(event) {
    setformtype((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value
    }));
  }

  const submithandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6418420-7786-4623-8876-6e1de6ab8248");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Your message is sent!",
        icon: "success"
      });
    }

    setformtype({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(containerRef.current.querySelector(".contact_heading"), {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out"
    })
      .from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
      }, "-=0.7")
      .from(formRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
      }, "-=1")
      .from(inputRefs.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.5");

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="contact_wrapper" id="contact" ref={containerRef}>
      <div className="contact_container">
        <h2 className="contact_heading">Contact Me</h2>
        <div className="contact_image" ref={imageRef}>
          <img src={image} alt="contact_image" />
        </div>
        <div className="myform" ref={formRef}>
          <form onSubmit={submithandler}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={formtype.name}
              onChange={changehandler}
              ref={addInputRef}
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formtype.email}
              onChange={changehandler}
              ref={addInputRef}
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              value={formtype.message}
              onChange={changehandler}
              maxLength={200}
              ref={addInputRef}
            />
            <button type="submit" ref={addInputRef}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
