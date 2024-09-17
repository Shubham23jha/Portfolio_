import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();
  const [submit, setSubmitStatus] = useState('Submit');

  const sendEmail = (e) => {
    setSubmitStatus('Submitted');
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      className="min-h-screen p-10 w-1/3 m-auto p-auto lg:w-full lg:block lg:p-10 items-center justify-center lg:m-2.5"
    >
      <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6"> {/* Added padding here */}
        {/* <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2> */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            {submit}
          </button>
        </form>
        </div>
        
    </div>
  );
}

export default Contact;