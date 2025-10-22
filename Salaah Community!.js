import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const highlights = [
    { title: "1-on-1 Mentorship", desc: "Providing personalized career and project guidance from experienced seniors and alumni." },
    { title: "Career Readiness", desc: "Preparing members for real-world opportunities through workshops and internships." },
    { title: "Skill Development", desc: "Hands-on training sessions and hackathons to sharpen technical and soft skills." },
  ];

  const team = [
    { name: "Kunal Tyagi", img: "https://i.ibb.co/3YFFnSvt/Kunal-Tyagi.jpg", quote: 'Idea behind the Salaah community of mentorship is to form a strong network between seniors and juniors to provide the correct career path under the well-settled alumni.', designation: "Co-Founder, @Salaah" },
    { name: "Shruti Singh", img: "https://i.ibb.co/Sw4DzQM7/Shruti-singh.jpg", quote: 'Salaah is a platform where students can follow their career path by getting a proper guidance and support from the alumni of the college.', designation: "Co-Founder, @Salaah" },
    { name: "Sakshi Verma", img: "https://i.ibb.co/x8HgyWHs/Sakshi-verma.jpg", quote: 'Conducting various podcasts, events to encourage students explore new field and choose their career wisely is main goal of Salaah.', designation: "Co-Founder, @Salaah" },
    { name: "Rohit Singhwal", img: "https://i.ibb.co/8VNTTKR/rohit-Singhwakl.jpg", quote: 'This platform was first build to enhance the quality of students in the college, although now it has become a sensation by helping more than 10K students.', designation: "Co-Founder, @Salaah" },
    { name: "Utkarsh Singh", img: "https://i.ibb.co/0V64mt9r/utkarsh-singh.jpg", quote: 'Salaah is the very innovative and almost first ever platform which is helping students of college. We teach students how to pursue their career.', designation: "Co-Founder, @Salaah" },
    { name: "Varun Rana", img: "https://i.ibb.co/rRb2xJBz/Varun-Rana.jpg", quote: 'We form a community under the association of recent pass out senior who is part of big MNCs and senior who is being passionate to achieve their goals in life.', designation: "Co-Founder, @Salaah" },
  ];

  const [index, setIndex] = useState(0);
  const length = Math.ceil(team.length / 2);

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % length), 4000);
    return () => clearInterval(id);
  }, [length]);

  const visible = team.slice(index * 2, index * 2 + 2);

  const cardVariants = {
    enter: { opacity: 0, scale: 0.95, y: 20 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center" id="home">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Design the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Future</span></h1>
          <p className="mt-4 text-gray-600 text-lg">Connecting students with alumni to receive career guidance and build meaningful projects together.</p>
        </div>
        <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
          <img src="https://i.ibb.co/ns7r7fS6/Predict-the-future.jpg" alt="Peter Drucker Quote" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* COMMUNITY */}
      <section id="community" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">The community<br/>that aims big.</h2>
            <img src="https://i.ibb.co/Fb3t70pr/team-photo-Community.jpg" alt="Community Team" className="rounded-3xl shadow-md w-full object-cover" />
          </div>
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900">We Aim.</h3>
              <p>We connect present students with alumni to get guidance about the career they want to pursue.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900">We Grow.</h3>
              <p>We empower students with training, workshops, and mentoring to ensure they succeed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900">We Win.</h3>
              <p>We believe in improving every day so that success becomes assured through effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet The Team</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden justify-center">
            <AnimatePresence initial={false} mode="wait">
              {visible.map((member) => (
                <motion.div key={member.name} variants={cardVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="w-full md:w-1/2 bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-lg italic text-gray-700 leading-relaxed">{member.quote}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <img src={member.img} alt={member.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 shadow-sm" />
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.designation}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {[0, 1, 2].map((i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-blue-200'}`} aria-label={`Go to ${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What We Offer</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gradient-to-r from-blue-50 to-pink-50 py-12">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or want to collaborate? We’d love to hear from you.</p>
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:salaah@abes.ac.in?subject=Contact`}} className="mt-6 grid md:grid-cols-3 gap-4">
            <input name="name" type="text" placeholder="Your Name" className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400" />
            <input name="email" type="email" placeholder="Your Email" className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="bg-blue-600 text-white rounded-md px-6 py-3 font-medium hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Gallery() {
  const galleryImages = [
    "https://i.ibb.co/0RGn0CDQ/front1.jpg",
    "https://i.ibb.co/vvqcZLf5/front-2.jpg",
    "https://i.ibb.co/sdQT66Mm/front-3.jpg",
    "https://i.ibb.co/Y7P1CM2C/front-4.jpg",
    "https://i.ibb.co/8LyTqm6d/event1.jpg",
    "https://i.ibb.co/99CYdpVz/event2.jpg",
    "https://i.ibb.co/TDgJ2Gkv/event3.jpg",
    "https://i.ibb.co/ZRdtzYDs/event4.jpg",
    "https://i.ibb.co/93fHyjyK/event5.jpg",
    "https://i.ibb.co/C3NVnbH5/event6.jpg",
    "https://i.ibb.co/zVqMrb5g/event7.jpg",
    "https://i.ibb.co/HLSLSBZb/event10.jpg",
    "https://i.ibb.co/tPxnq6CD/event12.jpg",
    "https://i.ibb.co/wFQgXGwz/event11.jpg",
  ];

  return (
    <div className="bg-white text-gray-900 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Events at Salaah</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="rounded-md overflow-hidden bg-gray-100">
              <img src={src} alt={`gallery-${i}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const logoImg = "https://i.ibb.co/7NGnWKqm/Gemini-Generated-Image-vnwi85vnwi85vnwi.png";

  return (
    <Router>
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <Link to="/">
          <img src={logoImg} alt="Salaah logo" className="h-14 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-700 transition">Home</Link>
          <Link to="/gallery" className="hover:text-gray-700 transition">Gallery</Link>
          <a href="#career" className="hover:text-gray-700 transition">Career Tracks</a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>

      <footer className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Salaah — The Mentor Community.</p>
          <div className="flex gap-4 mt-3 md:mt-0 items-center">
            <button title="Instagram — opens in new tab" onClick={() => window.open('https://www.instagram.com/salaah_abesec/','_blank')} aria-label="Instagram" className="footer-icon"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className="h-6 w-6" /></button>
            <button title="LinkedIn — opens in new tab" onClick={() => window.open('https://www.linkedin.com/company/salaah-the-mentor-community/','_blank')} aria-label="LinkedIn" className="footer-icon"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png" alt="LinkedIn" className="h-6 w-6" /></button>
            <button title="Email: salaah@abes.ac.in" onClick={() => window.open('mailto:salaah@abes.ac.in','_blank')} aria-label="Email" className="footer-icon"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="h-6 w-6" /></button>
            <button title="YouTube — opens in new tab" onClick={() => window.open('https://www.youtube.com/@salaah2021','_blank')} aria-label="YouTube" className="footer-icon"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-6 w-6" /></button>
          </div>
        </div>
        <style>{` .footer-icon img{filter:grayscale(100%) opacity(.6);transition:filter .18s,opacity .18s} .footer-icon:hover img{filter:none;opacity:1} `}</style>
      </footer>
    </Router>
  );
}
