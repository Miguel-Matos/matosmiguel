/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_VERCEL_SERVICE_ID as string, import.meta.env.VITE_VERCEL_TEMPLATE_ID as string, form.current, import.meta.env.VITE_VERCEL_KEY as string)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div className=' z-20'>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="contact" className="flex flex-col items-center px-5 py-16 lg:px-16 mx-auto xl:flex-row xl:gap-16 2xl:gap-14 2xl:mt-20 text-zinc-300">
          <div>
            <h3 className="text-4xl font-bold text-center lg:text-left mb-10">Contact Me</h3>
            <p className="text-center lg:text-left mb-5 text-lg">If you would like to reach out to me for a chat, please free to give me a call, or send me a message and I will make sure to get back to you.</p>
            <div className="flex flex-col gap-5 font-bold my-5 items-center lg:items-start">
              <a href="tel:1234567890"><FontAwesomeIcon icon={faPhone} /> (352)-818-2577</a>
              <a href="mailto: miguel@matosmiguel.com"><FontAwesomeIcon icon={faEnvelope} /> Miguel@matosmiguel.com</a>
              <p><FontAwesomeIcon icon={faLocationDot} /> Orlando, Florida</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
            <label className="text-center lg:text-left font-bold py-5 text-lg" htmlFor="user_name">Full Name<span className='text-red-500'>*</span></label>
            <input className="border text-black bg-slate-100 p-5" type="text" id="user_name" name='user_name' placeholder="John Smith" required />

            <label className="text-center lg:text-left font-bold py-5 text-lg"  htmlFor="user_email">Email<span className='text-red-500'>*</span></label>
            <input className="border text-black bg-slate-100 p-5" type="email" id="user_email" name='user_email' placeholder="John@gmail.com" required />

            <label className="text-center lg:text-left font-bold py-5 text-lg" htmlFor="message">Message<span className='text-red-500'>*</span></label>
            <textarea className="border text-black bg-slate-100 p-5" id="message" name='message' placeholder="Description" />

            <button value='Send' className="bg-cyan-500 p-5 text-white font-bold text-lg mt-10 shadow-md hover:shadow-2xl active:bg-cyan-600 rounded-md"><FontAwesomeIcon icon={faEnvelopeOpenText} /> Send Message</button>
          </form>      
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
    
  );
}