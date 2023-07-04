import img from '../assets/about.png';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from "./variants";

function About() {
  return (
    <section className='Container_about-section' id='2'>
        <motion.div
          variants={fadeIn('right', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}  
          className="Container_about-section_img">
            <img src={img} className='Container_about-section_img_character' alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}   
          className="Container_about-section_desc-father">
            <div className='Container_about-section_desc-father_son'>
              <h2 className='Container_about-section_desc-father_son_title'>About me</h2>
              <h3 className='Container_about-section_desc-father_son_subtitle'>I'm a Freelance Front-end Developer with over 3 years of experience and now I'm looking for my first full time job opportunity</h3>
              <p className='Container_about-section_desc-father_son_desc'>
                I'm a passionate frontend developer my goal is build attractive and functional interfaces. My skills in React and Angular, enables me to create high-quality web experiences. I'm excited to join an innovative team where I can contribute and learn from other industry professionals.
              </p>
              <Button text={"View my projects"} url='#4' behavior='_self'/>
              <a href="https://github.com/FerZva" 
              target='_blank'
              className='Container_about-section_desc-father_son_github'>My Github</a>
            </div>
        </motion.div>
    </section>
  )
}

export default About