import Button from './Button';
import image from '../assets/services.png'
import { motion } from 'framer-motion';
import { fadeIn } from "./variants";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoAngular, BiLogoSass, BiLogoTailwindCss } from "react-icons/bi";

function Skills() {
  return (
    <section className='Container_skills-section' id='3'>
            <motion.h2 
             variants={fadeIn('up', 0.3)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='Container_skills-section_title'>
                My skills
            </motion.h2>
            <motion.h3 
             variants={fadeIn('up', 0.4)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='Container_skills-section_subtitle'>
                Here are the technologies that I use the most as a Front-end developer
            </motion.h3>
            <motion.div
             variants={fadeIn('up', 0.5)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
            >
                <Button text={"Contact me"} url='#5' behavior='_self'/>
            </motion.div>
            <motion.div
             variants={fadeIn('up', 0.6)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
            >
             <img src={image} className='Container_skills-section_img' alt="" />
            </motion.div>
        <motion.div className='Container_skills-section_skills-container'
         variants={fadeIn('up', 0.7)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once: false, amount: 0.7}}
        >
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>HTML</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoHtml5 /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>CSS</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoCss3 /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>JavaScript</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoJavascript /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>TypeScript</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoTypescript /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>React</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoReact /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>Angular</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoAngular /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>SASS</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoSass /> </i>
            </div>
            <div className='Container_skills-section_skills-container_item'>
                <h4 className='Container_skills-section_skills-container_item_title'>TailWind</h4>
                <i className='Container_skills-section_skills-container_item_logo'> <BiLogoTailwindCss /> </i>
            </div>
        </motion.div>
    </section>
  )
}

export default Skills