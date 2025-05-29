import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-2">
      
      <div className="text-center text-sm text-gray-400 py-3">
        &copy; {new Date().getFullYear()} Payal. All rights reserved.
      </div>

    </footer>
  );
}
export default Footer;
