// import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Saya Janji Nur Subekti, fresh graduate Informatika dari Universitas Amikom Yogyakarta dengan minat besar dalam pengembangan software, machine learning, dan manajemen produk IT. Berpengalaman dalam membangun model machine learning, serta memiliki pemahaman tentang pengembangan web, apps, IOT, Server, Mikrotik, Design, Sosial Media, & Admin
      </p>
      <button className="border border-yellow rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-yellow transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Project</button>
    </div>
  );
};

export default AboutMeText;
