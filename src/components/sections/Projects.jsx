import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            My Projects     
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">E-commerce Website | Quickcart</h3>
              <p className="text-gray-400 mb-4">
              Made an professional e-commerce website and it turned out a great website which I can made for your business as well.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
               <a
  href="https://quickcart-tau-weld.vercel.app/" // <-- replace this with your actual deployed link
  target="_blank" // opens in a new tab
  rel="noopener noreferrer" // security best practice
  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
>
  View Project →
</a>
              </div>
            </div>
           
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">BengUSA Website - Premium Web Design Agency</h3>
              <p className="text-gray-400 mb-4">
             I independently designed a high-performing and visually appealing website "bengusa.pro" that helped the client establish a strong digital presence and better communicate their consultancy services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[ "JavaScript" ,"Next.js", "Node.js", "Tailwind CSS", ].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://bengusa.vercel.app/" // <-- replace this with your actual deployed link
  target="_blank" // opens in a new tab
  rel="noopener noreferrer" // security best practice
  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> 
           
           
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Professional Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
             Full-stack developer (MERN) with hands-on experience in Website Development, modern, responsive, and high-performance websites and applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Node.js", "Website Mockups"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://my-project-virid-iota.vercel.app/" // <-- replace this with your actual deployed link
  target="_blank" // opens in a new tab
  rel="noopener noreferrer" // security best practice
  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

           

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Shaif’s Cuisine – Restaurant Web Application</h3>
              <p className="text-gray-400 mb-4">
             A modern, responsive restaurant website showcasing menu items, special dishes, top offers, and event bookings. Built with a focus on user-friendly design and seamless navigation, it highlights customer reviews, newsletter subscriptions, and contact options, providing a complete online dining experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma", "Ui/Ux","Next.js", "Tailwind CSS", ].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                 <a
                  href="https://mahins-cuision.vercel.app/" // <-- replace this with your actual deployed link
  target="_blank" // opens in a new tab
  rel="noopener noreferrer" // security best practice
  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>




          </div>
        </div>
      </RevealOnScroll>
    </section>
  );

};


