import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Skills() {
  const skills = [
    { name: 'Python', color: 'bg-yellow-200', emoji: '🐍' },
    { name: 'React', color: 'bg-blue-200', emoji: '⚛️' },
    { name: 'Django', color: 'bg-green-200', emoji: '🌿' },
    { name: 'HTML', color: 'bg-red-200', emoji: '📄' },
    { name: 'CSS', color: 'bg-indigo-200', emoji: '🎨' },
    { name: 'Tailwind', color: 'bg-cyan-200', emoji: '🌬️' },
    { name: 'JavaScript', color: 'bg-yellow-100', emoji: '🧠' },
    { name: 'MySQL', color: 'bg-teal-200', emoji: '🗄️' },
  ];

  return (
    <div id="skills" className="bg-sky-300 min-h-screen relative overflow-hidden">
      <Header />

      <div className="text-center my-10">
        <h1 className="text-blue-900 font-bold text-5xl mb-6">My Skills</h1>
        <p className="text-lg max-w-3xl mx-auto text-blue-1000 leading-relaxed mb-8 my-8">
          Here are some of the tools and technologies I enjoy working with:
        </p>

        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-5xl px-4"
        >           
            {skills.map((skill, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`skill-card rounded-xl p-6 shadow-xl my-8 ${skill.color} text-center transition-transform duration-300`}
                >
                  <div className="text-5xl mb-4">{skill.emoji}</div>
                  <h2 className="text-xl font-bold text-blue-900">{skill.name}</h2>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </div>
  );
}

export default Skills;
