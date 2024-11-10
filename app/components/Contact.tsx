
import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaSquareBehance } from 'react-icons/fa6';



const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left Section - Contact Info */}
        <div className="space-y-4">
          <h2 className="text-5xl" data-aos="zoom-in-up">Let’s Connect</h2>
          <p className="text-stone-400 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <MdMail size={20} />
            <span>laibaashfaqahmed232@gmail.com</span>
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <FaSquareBehance size={20} />
            <span>laibaashfaq22</span>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="space-y-8">
          
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="h-[40px] bg-transparent border border-accent px-2" data-aos="zoom-in-up"
              required
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="h-[40px] bg-transparent border border-accent px-2" data-aos="zoom-in-up" 
              required
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              name="message"
              rows={8}
              className="bg-transparent border border-accent px-2" data-aos="zoom-in-up"
              required
            />
          </div>

          {/* Styled Send Button */}
          <div className="flex">
            <button 
              type="submit" 
              className="h-[40px] w-full bg-white text-green-950 border border-accent px-2" data-aos="zoom-in-up"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;