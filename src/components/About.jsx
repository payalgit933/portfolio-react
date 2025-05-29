import { Typewriter } from 'react-simple-typewriter';
import Header from './Header';


function About() {
  return (
    <div id="about" className="bg-sky-300 min-h-screen relative overflow-hidden">


      <div className="relative my-2 ">
        <Header />


        <div className="text-center my-8">
          <h1 className="text-blue-900 font-bold text-5xl mb-6">About Me</h1>


          <div className="mb-8 transform transition duration-200 hover:scale-150">
            <img
              src="/about-pic1.png"
              alt="Payal"
              className="w-52 h-52 rounded-full object-cover mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-800 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </div>


          <h2 className="text-4xl text-pink-700 font-semibold mb-4">
            <Typewriter
              words={['I am Payal', 'A Developer 💻', 'A Learner 📚', 'Creative Thinker 💡']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>


          <p className="about_intro text-lg max-w-3xl mx-auto text-blue-1000 leading-relaxed ">
            Hello! I'm Payal, a passionate and dedicated developer currently pursuing my final year of B.A. I love exploring the world of programming and have knowledge of Python, React, Django, HTML, CSS and Tailwind. I'm always curious to learn and improve, and I enjoy building creative and useful projects that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}


export default About;
