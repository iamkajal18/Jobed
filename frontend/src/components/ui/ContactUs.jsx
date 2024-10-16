import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    setIsSubmitted(true);
  };

  return (
    <div className="contact-us-container p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-lg">
        We’d love to hear from you! Whether you have a question about our services, need support,
        or just want to get in touch, feel free to reach out.
      </p>

      {isSubmitted ? (
        <div className="success-message bg-green-100 text-green-700 p-4 rounded">
          <h2 className="font-semibold">Thank you for contacting us!</h2>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      )}

<div className="contact-info mt-8">
  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
  <p>If you prefer to reach out directly, here’s how you can contact us:</p>
  <div className="bg-white shadow-md rounded-lg p-6 mt-4">
    <ul className="space-y-4">
      <li className="flex items-center">
        <strong className="w-24">Email:</strong>
        <span className="ml-2">kasaudhankajal51@gmail.com</span>
      </li>
      <li className="flex items-center">
        <strong className="w-24">Alt Email:</strong>
        <span className="ml-2">uaditya219@gmail.com</span>
      </li>
      <li className="flex items-center">
        <strong className="w-24">Phone:</strong>
        <span className="ml-2">8840250583</span>
      </li>
      <li className="flex items-center">
        <strong className="w-24">LinkedIn:</strong>
        <span className="ml-2">
          <a href="https://www.linkedin.com/in/kajal-saudhan-7b7b3b1b2/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            Kajal Kasaudhan
          </a>,&nbsp;
          <a href="https://www.linkedin.com/in/iamadityaupadhyay" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            Aditya Upadhyay
          </a>
        </span>
      </li>
      <li className="flex items-center">
        <strong className="w-24">GitHub:</strong>
        <span className="ml-2">
          <a href="https://github.com/iamkajal18" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            iamkajal18
          </a>,&nbsp;
          <a href="https://github.com/iamadityaupadhyay" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            iamadityaupadhyay
          </a>
        </span>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
}


export default ContactUs;
