import React, { useState } from 'react';
import Button from './Button';
import checkmark from '../assets/check.png'
import { motion } from 'framer-motion';
import { fadeIn } from "./variants";

function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(validateEmail(newEmail));
  };

  const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === ''
    };

    setFieldErrors(errors);

    if (Object.values(errors).every(error => !error) && validEmail) {
      setSubmitted(true);
    }
  };
  return (
    <section className='Container_Contact-section' id='5'>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='Container_Contact-section_text'
      >
        <div className='Container_Contact-section_text_container'>
          <h3 className='Container_Contact-section_text_title'>Get in touch</h3>
          <h2 className='Container_Contact-section_text_subtitle'>Let's work together!</h2>
        </div>
      </motion.div>
      {submitted ? (
        <div className='success-message'>
          <img src={checkmark} alt="" />
          sent successfully
        </div>
      ) : (
        <motion.form
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='Container_Contact-section_form'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className='Container_Contact-section_form_input'
            placeholder='Your Name'
            value={name}
            onChange={handleNameChange}
          />
          {fieldErrors.name && <p className='error'>This field can't be blank.</p>}
          <input
            type="email"
            className={`Container_Contact-section_form_input ${validEmail ? '' : 'invalid'}`}
            placeholder='Your Email'
            value={email}
            onChange={handleEmailChange}
          />
          {fieldErrors.email && <p className='error'>This field can't be blank.</p>}
          {!validEmail && !fieldErrors.email && <p className='error'>Please enter a valid email.</p>}
          <input
            type="text"
            className='Container_Contact-section_form_input Container_Contact-section_form_input_message'
            placeholder='Your message'
            value={message}
            onChange={handleMsgChange}
          />
          {fieldErrors.message && <p className='error'>This field can't be blank.</p>}
          <Button text={'Send message'} url='#5' behavior='_self'/>
        </motion.form>
      )}
    </section>
  )
}

export default Contact;
