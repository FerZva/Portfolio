import Button from './Button';
import avatar from '../assets/avatar.png';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from "./variants";

function Introduction() {
  return (
    <section className='Container_introduction-section' id='1'>
        <div className="Container_introduction-section_text-container-father">
            <motion.div
              variants={fadeIn('right', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
               className='Container_introduction-section_text-container-father_son'>
              <h2 className='Container_introduction-section_text-container-father_son_title'>Fernando<br />Zavala</h2>
              <h3 className='Container_introduction-section_text-container-father_son_subtitle'>I'm a Frontend developer</h3>
              <p className='Container_introduction-section_text-container-father_son_desc'>
                I'm a freelance frontend developer seeking my first full-time job opportunity. With skills in HTML, CSS, JavaScript, TypeScript, Angular and React, I offer expertise in creating intuitive and responsive interfaces. I'm looking for a dynamic team where I can learn, grow, and contribute my creativity in web development.
              </p>
              <Button text={"Download my CV"} url='https://drive.google.com/file/d/1hIA2oOPsEjFnwyFmroi5Cb37pq68ZbuW/view?usp=sharing' behavior='_blank' />
              <div 
                className='Container_introduction-section_text-container-father_son_social-media'>
                    <a href="https://github.com/FerZva" 
                    target='_blank'
                    className='Container_introduction-section_text-container-father_son_social-media_link'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/fernando-zavala-lopez/"
                     target='_blank'
                     className='Container_introduction-section_text-container-father_son_social-media_link'> <FaLinkedinIn /> </a>
                    <a href="fernandzva2019@outlook.es" 
                    target='_blank'
                    className='Container_introduction-section_text-container-father_son_social-media_link'> <PiMicrosoftOutlookLogoBold /> </a>
              </div>
            </motion.div>

        </div>
        <motion.div
          variants={fadeIn('left', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}  
          className="Container_introduction-section_description">
          <img src={avatar} className='Container_introduction-section_description_img' alt="" />
        </motion.div>

    </section>
  )
}

export default Introduction