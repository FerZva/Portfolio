import { motion } from 'framer-motion';
import { fadeIn } from "./variants";
import Button from './Button';

function Heeader() {
  return (
    <header className='Container_header'>
        <motion.h2
          variants={fadeIn('right', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
        >FER ZVA
        </motion.h2>

        <motion.div
          variants={fadeIn('left', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
        >
          <Button text={"Download my CV"} url='https://drive.google.com/file/d/1hIA2oOPsEjFnwyFmroi5Cb37pq68ZbuW/view?usp=sharing' behavior='_blank' />
        </motion.div>
        
    </header>
  )
}

export default Heeader