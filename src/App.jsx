const portfolioData = {
  name: "Divakar Maurya",

  role: "Aspiring Software & AI/ML Developer",

  tagline:
    "Building intelligent, real-world applications using AI, Machine Learning, Computer Vision, and modern web technologies.",

  about: `I am an aspiring Software and AI/ML Developer passionate about building intelligent and real-world applications. I have hands-on experience developing projects involving Retrieval-Augmented Generation (RAG), Large Language Models, Computer Vision, and Machine Learning.

I enjoy building full-stack AI applications using technologies such as Python, FastAPI, Flask, Django, React, FAISS, OpenCV, and SQL databases. My projects include an AI-powered repository assistant, a face recognition attendance system, and a traffic violation detection system.

I am continuously improving my problem-solving and development skills and looking for opportunities to learn, contribute, and build impactful technology.`,

education: [
  {
    degree: "B.Tech in Computer Science Engineering",
    specialization: "AI Specialization",
    university: "Bennett University",
    expectedGraduation: "2028",
    cgpa: "8.52/10",
  },
],

skills: {
    Languages: ["C++", "Python", "SQL", "JavaScript", "TypeScript"],

    "AI / Machine Learning": [
      "Machine Learning",
      "NLP",
      "RAG",
      "Computer Vision",
      "SentenceTransformers",
    ],

    Frameworks: ["React", "FastAPI", "Flask", "Django"],

    "Tools & Databases": [
      "Git",
      "GitHub",
      "FAISS",
      "MySQL",
      "SQLite",
    ],

    "AI / LLM Tools": ["Gemini", "Groq", "Ollama"],
  },

  projects: [
    {
      title: "CodePilot AI",
      image: "/images/codepilot.png",
      description:
        "An AI-powered repository assistant that helps developers understand, search, and interact with unfamiliar GitHub codebases using RAG.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "FAISS",
        "SentenceTransformers",
        "Gemini",
        "Groq",
        "Ollama",
      ],
      github: "https://github.com/div339175/codepilot-ai",
    },

    {
      title: "FaceMate",
      image: "/images/facemate.png",
      description:
        "An AI-powered face recognition attendance system using facial embeddings and cosine similarity for real-time attendance processing.",
      technologies: [
        "Python",
        "DeepFace",
        "ArcFace",
        "OpenCV",
        "MySQL",
        "Django",
      ],
      github: "https://github.com/div339175/FaceMate",
    },

    {
      title: "TrafficEye AI",
      image: "/images/trafficeye.png",
      description:
        "An AI-powered CCTV system for vehicle and traffic violation detection with Automatic Number Plate Recognition (ANPR).",
      technologies: [
        "Python",
        "Flask",
        "YOLOv8",
        "OpenCV",
        "EasyOCR",
        "SQLite",
      ],
      github: "https://github.com/div339175/TrafficEye-AI",
    },
  ],

  social: {
    github: "https://github.com/div339175",
    linkedin:
      "https://www.linkedin.com/in/divakar-maurya-a4a6a2313/",
    leetcode: "https://leetcode.com/u/divakar_maurya/",
    email: "divakarm733@gmail.com",
  },
};

function App() {
  const data = portfolioData;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-lg font-bold tracking-wide text-white"
          >
            {data.name}
          </a>

          <div className="hidden gap-6 text-sm text-slate-400 md:flex">
            <a
              href="#about"
              className="transition hover:text-sky-400"
            >
              About
            </a>
            <a
                href="#education"
                className="transition hover:text-sky-400"
              >
                Education
              </a>

            <a
              href="#skills"
              className="transition hover:text-sky-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-sky-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-sky-400"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>

      <main>

        {/* ================= HERO ================= */}
        <section
          id="home"
          className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
        >

          <div>
            <p className="mb-4 font-semibold tracking-widest text-sky-400">
              HELLO, I'M
            </p>

            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
              {data.name}
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-slate-300 md:text-2xl">
              {data.role}
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-400">
              {data.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                View My Projects
              </a>

              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-sky-400/20 blur-xl" />

              <img
                src="/images/profile.jpeg"
                alt={data.name}
                className="relative h-[380px] w-[300px] rounded-3xl border border-slate-700 object-cover shadow-2xl"
              />
            </div>
          </div>

        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-24"
        >
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-sky-400">
            ABOUT ME
          </p>

          <h2 className="mb-8 text-4xl font-bold text-white">
            Who I Am
          </h2>

          <p className="max-w-4xl whitespace-pre-line text-lg leading-8 text-slate-400">
            {data.about}
          </p>
        </section>

        {/* ================= EDUCATION ================= */}
<section
  id="education"
  className="border-y border-slate-800 bg-slate-900/30 py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    <p className="mb-3 text-sm font-bold tracking-[0.25em] text-sky-400">
      EDUCATION
    </p>

    <h2 className="mb-12 text-4xl font-bold text-white">
      Academic Background
    </h2>

    {data.education.map((education) => (
      <div
        key={education.degree}
        className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
      >
        <h3 className="text-2xl font-bold text-white">
          {education.degree}
        </h3>

        <p className="mt-2 text-lg font-medium text-sky-400">
          {education.specialization}
        </p>

        <p className="mt-4 text-lg text-slate-300">
          {education.university}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-slate-400">
          <span>
            Expected Graduation: {education.expectedGraduation}
          </span>

          <span className="hidden md:inline">|</span>

          <span>
            CGPA: {education.cgpa}
          </span>
        </div>
      </div>
    ))}

  </div>
</section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="border-y border-slate-800 bg-slate-900/30 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">

            <p className="mb-3 text-sm font-bold tracking-[0.25em] text-sky-400">
              SKILLS
            </p>

            <h2 className="mb-12 text-4xl font-bold text-white">
              Technologies I Work With
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              {Object.entries(data.skills).map(
                ([category, skills]) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <h3 className="mb-5 text-xl font-semibold text-white">
                      {category}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-sky-300 transition hover:border-sky-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}

            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-24"
        >

          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-sky-400">
            PROJECTS
          </p>

          <h2 className="mb-12 text-4xl font-bold text-white">
            Things I've Built
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {data.projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-sky-500"
              >

                {/* PROJECT IMAGE */}
                <div className="h-52 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6">

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-800 px-3 py-1.5 text-xs font-medium text-sky-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
                  >
                    GitHub • View Project →
                  </a>

                </div>
              </article>
            ))}

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="border-t border-slate-800 bg-slate-900/30 py-24"
        >

          <div className="mx-auto max-w-3xl px-6 text-center">

            <p className="mb-3 text-sm font-bold tracking-[0.25em] text-sky-400">
              CONTACT
            </p>

            <h2 className="mb-6 text-4xl font-bold text-white">
              Let's Work Together
            </h2>

            <p className="mx-auto max-w-xl leading-7 text-slate-400">
              I'm always open to discussing new opportunities, AI/ML projects, and
              interesting ideas. Feel free to connect with me!
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href={`mailto:${data.social.email}`}
                className="rounded-lg border border-slate-700 px-5 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                ✉ Email
              </a>

              <a
                href={data.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                GitHub
              </a>

              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                LinkedIn
              </a>

              <a
                href={data.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                LeetCode
              </a>

            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </footer>

    </div>
  );
}

export default App;