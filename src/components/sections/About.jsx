import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "Frontend: Next.js, React, Tailwind CSS, Responsive Design",
    "Backend: .NET, C#, RESTful APIs",
    "Database: SQL Server",
    "Testing & QA: Playwright, Manual Testing, QA Analytics, Bug Tracking (Jira)",
    "Tools: Git, VS Code, Postman, Chrome DevTools, Claude AI",
  ];

  const typeofwebsite = [
    "Web Development",
    "E-commerce Website",
    "Fashion Website",
    "Portfolio Website",
    "Blog Website",
    "website mockup",
    "UI/UX Design",
    "Landing Page"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m a passionate and results-driven Full Stack Developer (Next.js & .NET) with hands-on experience in QA testing(Typescript, Playwrite) and automation. I bridge the gap between development and quality—ensuring that every product delivers an excellent user experience and performs flawlessly.<br/></p>
{/* <br/>
              Core Skills:<br/>
              • Frontend: Next.js, React, JavaScript (ES6+), HTML5, CSS3, Responsive Web Design<br/>
              • Backend: Node.js, Express.js<br/>
              • UI/UX: Figma, Component-Based Design, Mobile-First Interfaces<br/>
              • Database: MongoDB (Mongoose), REST API integration<br/>
              • Tools: Git, VS Code, Postman, Chrome DevTools<br/>
<br/>
              Domain Expertise:<br/>
              • E-Commerce platforms with shopping carts, product filtering, secure checkout<br/>
              • Blogs with SEO optimization and dynamic content management<br/>
              • Fashion websites with elegant branding and mobile responsiveness<br/>
              • Personal portfolios to showcase creative work with polished design<br/>
              
              </p> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> SKILLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                      >


                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Services I Offer: </h3>
                  <div className="flex flex-wrap gap-2">
                    {typeofwebsite.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Computer Science (BCompSc), </strong> - Bangladesh University
                  passing year 2027.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software QA Engineer | Helix (Present){" "}
                  </h4>
                  <p>
I test and optimize complex web applications using TypeScript, Playwright, and SQL Server. I perform manual testing, create and manage bug reports in Jira, and work closely with developers to identify and resolve issues. I validate UI, workflows, and integrations across modules.
                  </p>
                  <br />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Developer | Kitchen Craft Solution
                    {" "}
                  </h4>
                  <p>
                    Designed and developed modern, responsive web applications using React.js, Tailwind Css and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );

};






