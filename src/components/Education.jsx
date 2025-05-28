import React from 'react';
import Header from './Header';

function Education() {
  const milestones = [
    { year: '2020', title: '10th', school: "R.S. Central School", icon: '📘' },
    { year: '2022', title: '12th', school: 'S.D.S. Inter College', icon: '📗' },
    { year: '2022 - 2025', title: 'B.A.', school: 'Patliputra University', icon: '🎓' },
  ];

  return (
    <div
      id="profile"
      style={{
        backgroundImage: "url('/education.avif')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "722px",
      }}
    >
      <div id="education" className="relative overflow-hidden min-h-screen">
        <div className="min-h-screen">
          <Header />
          <h1 className="text-center text-5xl font-bold text-blue-900 mb-12 my-8">Education</h1>

          <div className="education_details relative border-l-8 border-blue-700 pl-10 max-w-3xl mx-auto space-y-10">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="relative transform transition duration-300 hover:scale-110"
              >
                <div className="absolute -left-7 top-1 bg-white text-3xl rounded-full border-2 border-blue-700 p-1">
                  {m.icon}
                </div>
                <div className="bg-white shadow-xl rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-blue-800">
                    {m.title} <span className="text-sm text-gray-500">({m.year})</span>
                  </h2>
                  <p className="text-gray-700">{m.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
