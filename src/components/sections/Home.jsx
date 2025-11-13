import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";


export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const skills = ["Next.js",".NET", "Tailwind CSS", "QA", "Playwrite", "Typescript"];

  // Cursor & scroll tracking
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3D Card Motion
  const cardX = useMotionValue(0.5);
  const cardY = useMotionValue(0.5);
  const rotateX = useTransform(cardY, [0, 1], [15, -15]);
  const rotateY = useTransform(cardX, [0, 1], [-15, 15]);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    cardX.set((e.clientX - card.left) / card.width);
    cardY.set((e.clientY - card.top) / card.height);
  };
  const handleCardMouseLeave = () => {
    cardX.set(0.5);
    cardY.set(0.5);
  };

  // Letter-drop animation variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 }
    }
  };

  const letter = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500, damping: 20 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-48 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-950">

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-blue-400/50 bg-blue-400/20 backdrop-blur-md shadow-lg"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "spring", stiffness: 1500, damping: 35 }}
      />

      {/* Floating Orbs */}
      <motion.div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-[100px] top-10 left-10" animate={{ y: scrollY * 0.1 }} />
      <motion.div className="absolute w-96 h-96 rounded-full bg-cyan-400/20 blur-[120px] bottom-10 right-20" animate={{ y: scrollY * -0.08 }} />

      {/* LEFT SIDE TEXT */}
      <motion.div className="md:w-1/2 text-center md:text-left z-10">
        {/* Name with letter-drop animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {"Mahin Zaman".split("").map((char, i) => (
            <motion.span key={i} variants={letter} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl lg:text-xl mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full-Stack Developer & QA Engineer
        </motion.h2>

        <motion.p
          className="text-white/80 text-lg md:text-lg lg:text-lg mb-6 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I build modern, scalable, and responsive web applications blending design and performance seamlessly.
        </motion.p>

        {/* Skill Badges */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm cursor-pointer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#3b82f6/50",
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.4 }
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition"
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-xl font-medium backdrop-blur-md hover:scale-105 hover:bg-blue-500/10 transition"
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE 3D PROFILE CARD */}
      <motion.div className="md:w-1/2 mt-20 lg:mt-0 flex justify-center md:justify-end mb-10 md:mb-0">
        <motion.div
          className="relative w-72 md:w-96 rounded-3xl shadow-xl cursor-pointer"
          style={{ rotateX, rotateY, perspective: 1000 }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/Me.png"
            alt="Mahin Zaman"
            className="w-full rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/10"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Glow behind card */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-[120px] rounded-full top-10 right-10"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};


