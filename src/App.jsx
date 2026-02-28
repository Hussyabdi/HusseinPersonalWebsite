import { useState } from "react";
import './index.css'

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #f9f7f4;
    --fg: #1a1a18;
    --accent: #c9621e;
    --muted: #888880;
    --border: #e2dfd9;
    --card: #ffffff;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--sans);
    font-weight: 300;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  .container { max-width: 900px; margin: 0 auto; padding: 0 2rem; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 1.25rem 0;
    background: rgba(249, 247, 244, 0.88);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner {
    max-width: 900px; margin: 0 auto; padding: 0 2rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .nav-logo {
    font-family: var(--serif);
    font-size: 1.15rem;
    color: var(--fg);
    text-decoration: none;
    letter-spacing: 0.01em;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    text-decoration: none;
    color: var(--muted);
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.03em;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--fg); }

  /* HERO */
  .hero {
    padding: 9rem 0 5rem;
    min-height: 80vh;
    display: flex; align-items: center;
    border-bottom: 1px solid var(--border);
  }
  .hero-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-family: var(--serif);
    font-size: clamp(2.8rem, 7vw, 5rem);
    line-height: 1.1;
    font-weight: 400;
    margin-bottom: 1.5rem;
    max-width: 700px;
  }
  .hero h1 em { font-style: italic; color: var(--accent); }
  .hero-desc {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 480px;
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }
  .hero-cta {
    display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;
  }
  .btn {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.75rem 1.6rem;
    border-radius: 3px;
    font-family: var(--sans);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    border: none;
  }
  .btn-primary {
    background: var(--fg);
    color: var(--bg);
  }
  .btn-primary:hover { background: var(--accent); }
  .btn-outline {
    background: transparent;
    color: var(--fg);
    border: 1px solid var(--border);
  }
  .btn-outline:hover { border-color: var(--fg); }

  /* SECTIONS */
  section { padding: 5rem 0; border-bottom: 1px solid var(--border); }
  .section-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }
  .section-title {
    font-family: var(--serif);
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 400;
    margin-bottom: 3rem;
    line-height: 1.2;
  }

  /* ABOUT */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  .about-text p { color: var(--muted); margin-bottom: 1rem; line-height: 1.9; }
  .about-text p strong { color: var(--fg); font-weight: 500; }
  .about-stats { display: flex; flex-direction: column; gap: 1.5rem; }
  .stat-item { border-top: 1px solid var(--border); padding-top: 1.25rem; }
  .stat-num {
    font-family: var(--serif);
    font-size: 2.2rem;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  .stat-label { font-size: 0.8rem; color: var(--muted); letter-spacing: 0.05em; }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    gap: 1.5rem;
  }
  .project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: start;
    transition: border-color 0.2s, box-shadow 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  .project-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .project-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.6rem;
  }
  .project-title {
    font-family: var(--serif);
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .project-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.7; }
  .project-arrow {
    font-size: 1.2rem;
    color: var(--border);
    transition: color 0.2s, transform 0.2s;
    margin-top: 0.2rem;
  }
  .project-card:hover .project-arrow { color: var(--accent); transform: translate(3px,-3px); }
  .project-tags-list {
    display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;
  }
  .tech-pill {
    padding: 0.2rem 0.6rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.03em;
  }

  /* CONTACT */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  .contact-info p { color: var(--muted); margin-bottom: 1.5rem; line-height: 1.9; }
  .contact-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .contact-link {
    display: flex; align-items: center; gap: 0.75rem;
    color: var(--fg);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
  }
  .contact-link:hover { color: var(--accent); }
  .contact-link-icon { font-size: 0.9rem; color: var(--muted); width: 1rem; }

  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
  label { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.05em; color: var(--muted); text-transform: uppercase; }
  input, textarea {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 0.75rem 1rem;
    font-family: var(--sans);
    font-size: 0.9rem;
    color: var(--fg);
    outline: none;
    transition: border-color 0.2s;
    resize: vertical;
  }
  input:focus, textarea:focus { border-color: var(--fg); }
  input::placeholder, textarea::placeholder { color: var(--border); }

  /* FOOTER */
  footer {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer p { font-size: 0.8rem; color: var(--muted); }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.35s; }

  @media (max-width: 640px) {
    .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .form-row { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.5rem; }
  }
`;

const projects = [
  {
    tag: "Data & Analytics",
    title: "Healthcare Claims Dashboard",
    desc: "Built interactive analytics dashboard during internship at Premera Blue Cross to visualize claims processing trends and identify inefficiencies across departments.",
    tech: ["Python", "SQL", "Tableau", "Excel"],
    href: "#",
  },
  {
    tag: "Web Application",
    title: "Campus Resource Finder",
    desc: "Full-stack web app for UW students to discover and filter campus resources, office hours, and events in real time. Reduced search time significantly.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    href: "#",
  },
  {
    tag: "Machine Learning",
    title: "Predictive Model — Patient Outcomes",
    desc: "Academic project applying supervised learning to predict patient readmission likelihood using anonymized clinical data. Achieved 84% accuracy.",
    tech: ["Python", "scikit-learn", "pandas", "Jupyter"],
    href: "#",
  },
];

export default function App() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-logo">Hussein Abdi</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="hero-tag fade-up">Available for opportunities</span>
          <h1 className="fade-up delay-1">
            Building things that<br /><em>actually matter.</em>
          </h1>
          <p className="hero-desc fade-up delay-2">
            Computer science student at the University of Washington. I enjoy solving real problems with clean code, data, and thoughtful design.
          </p>
          <div className="hero-cta fade-up delay-3">
            <a href="#projects" className="btn btn-primary">View my work →</a>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <p className="section-label">About</p>
          <h2 className="section-title">A little about me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm <strong>Hussein Abdi</strong>, a student at the <strong>University of Washington</strong> studying Computer Science. I care about using technology to solve meaningful problems — from healthcare systems to everyday tools that make people's lives easier.
              </p>
              <p>
                I've had the opportunity to intern at <strong>Premera Blue Cross</strong>, where I worked on data analytics and operational tooling. That experience deepened my appreciation for thoughtful, user-centered engineering.
              </p>
              <p>
                Outside of work and classes, I enjoy reading, building side projects, and exploring the intersection of technology and social impact.
              </p>
              <a href="#contact" className="btn btn-outline" style={{marginTop: "1.5rem", display: "inline-flex"}}>
                Get in touch
              </a>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-num">UW</div>
                <div className="stat-label">University of Washington — CS</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">2+</div>
                <div className="stat-label">Years of professional & project experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">∞</div>
                <div className="stat-label">Curiosity & drive to keep learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <p className="section-label">Work</p>
          <h2 className="section-title">Selected projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <a key={i} href={p.href} className="project-card">
                <div>
                  <span className="project-tag">{p.tag}</span>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags-list">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's connect</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>
                Whether you have a project idea, a job opportunity, or just want to say hello — my inbox is open. I'll get back to you as soon as I can.
              </p>
              <div className="contact-links">
                <a href="mailto:hussein@example.com" className="contact-link">
                  <span className="contact-link-icon">✉</span>
                  hussein@example.com
                </a>
                <a href="https://linkedin.com/in/husseinabdi1" target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-icon">in</span>
                  linkedin.com/in/husseinabdi1
                </a>
                <a href="https://github.com/husseinabdi" target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-icon">⌥</span>
                  github.com/husseinabdi
                </a>
              </div>
            </div>

            {sent ? (
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column",gap:"0.75rem",color:"var(--muted)",textAlign:"center"}}>
                <span style={{fontSize:"2rem"}}>✓</span>
                <p>Thanks! I'll be in touch soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{alignSelf:"flex-start"}}>
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="container">
        <footer>
          <p>© 2026 Hussein Abdi</p>
          <p>Built with React · Seattle, WA</p>
        </footer>
      </div>
    </>
  );
}
