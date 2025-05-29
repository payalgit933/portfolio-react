import Header from './Header';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="bg-sky-300 min-h-screen relative overflow-hidden">
      <Header />

      <div className="text-center mt-10">
        <h1 className="text-blue-900 font-bold text-5xl mb-4">Contact Me</h1>
        <p className="text-lg max-w-2xl mx-auto text-blue-1000 leading-relaxed mb-10">
          I'd love to hear from you! Feel free to reach out for collaboration, questions, or just a friendly hello.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 md:px-20 pb-16">
        {/* ________________contact Info____________________________ */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 w-full md:w-1/2">
          <div className="flex items-center gap-4 text-blue-900">
            <FaEnvelope className="text-2xl text-pink-600" />
            <span className="text-lg">payal.git933@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-blue-900">
            <FaPhone className="text-2xl text-pink-600" />
            <span className="text-lg">+91 9872465610</span>
          </div>
          <div className="flex items-center gap-4 text-blue-900">
            <FaMapMarkerAlt className="text-2xl text-pink-600" />
            <span className="text-lg">New Delhi, 110092, India</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
