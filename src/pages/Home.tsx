import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { workData, blogData } from '../data/cms';
import './Home.css';

const Skills = React.lazy(() => import('../components/Skills'));
const Lanyard = React.lazy(() => import('../components/Lanyard'));

// Scroll-linked word-by-word reveal component
const ScrollRevealQuote: React.FC<{ text: string }> = React.memo(({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;
      const containerTop = rect.top + window.scrollY;

      // Calculate scroll window
      const start = containerTop - viewportHeight;
      const end = containerTop + elementHeight;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1);

      // Refined reveal window (starts at 30% of section enter, finishes at 65%)
      const startReveal = 0.35;
      const endReveal = 0.65;
      const mappedProgress = Math.min(Math.max((progress - startReveal) / (endReveal - startReveal), 0), 1);

      setScrollProgress(mappedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split(" ");
  return (
    <p className="quote-text" ref={containerRef}>
      {words.map((word, index) => {
        const wordThreshold = index / words.length;
        const wordEnd = (index + 1) / words.length;

        let opacity = 0.15;
        if (scrollProgress > wordThreshold) {
          const wordWeight = (scrollProgress - wordThreshold) / (wordEnd - wordThreshold);
          opacity = 0.15 + Math.min(wordWeight, 1) * 0.85;
        }

        return (
          <span
            key={index}
            style={{
              opacity: opacity,
              transition: 'opacity 0.15s ease',
              display: 'inline-block',
              marginRight: '10px'
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
});

export const Home: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState({ name: '', email: '', project: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.project) {
      setFormStatus('error');
      return;
    }
    setFormStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mlgyknyg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.project,
          subject: 'New Contact Form Submission from Portfolio'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormState({ name: '', email: '', project: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const featuredProjects = workData.slice(0, 4);

  const revealRef = useScrollReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "M Abdullah",
    "url": "https://mabdullah.dev",
    "image": "https://mabdullah.dev/avatar.webp",
    "jobTitle": "Software Engineer",
    "sameAs": [
      "https://github.com/mabdullah-devx",
      "https://linkedin.com/in/mabdullah"
    ]
  };

  return (
    <div className="home-container" ref={revealRef}>
      <SEO 
        title="M Abdullah | Software Engineer & UI/UX Designer" 
        description="Portfolio of M Abdullah, a software engineer focusing on building modern, scalable, and conversion-driven web experiences."
        canonicalUrl="/"
        jsonLd={jsonLd}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom hero-inner">
          {/* Decorative star shapes */}
          <img
            src="https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png"
            className="hero-shape hero-shape-1"
            alt=""
            aria-hidden="true"
          />
          <img
            src="https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png"
            className="hero-shape hero-shape-2"
            alt=""
            aria-hidden="true"
          />

          {/* Title */}
          <h1 className="hero-title hero-entrance-anim">
            <span className="hero-title-line">SOFTWARE</span>
            <span className="hero-title-line">ENGINEER</span>
          </h1>

          {/* Interactive Lanyard */}
          <Suspense fallback={null}>
            <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} frontImage="/avatar.png" backImage="/avatar.png" />
          </Suspense>

          {/* Bottom row */}
          <div className="hero-bottom-row hero-entrance-anim-delay-2">
            <span className="hero-year">&copy;2026</span>
            <span className="hero-tag">/CREATING SINCE 2024</span>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section" id="bio">
        <div className="container-custom bio-grid">
          {/* Left column */}
          <div className="bio-left" data-reveal data-reveal-delay="0">
            <h2 className="bio-greeting">Hey!</h2>
            <p className="bio-tagline">
              I'm M Abdullah, a builder based in Pakistan, focus on building modern web applications.
            </p>
          </div>

          {/* Center – spacer for the floating avatar */}
          <div className="bio-center-spacer"></div>

          {/* Right column */}
          <div className="bio-right" data-reveal data-reveal-delay="150">
            <p className="bio-paragraph">
              I'm a software engineer and Framer creator with a strong focus on building modern, scalable, and conversion-driven web experiences.
            </p>
            <p className="bio-paragraph">
              Over the years, I've created and shipped multiple SaaS products and tools used by global customers, helping them launch faster.
            </p>
            <div className="bio-buttons" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '12px' }}>
              <a
                href="https://framer.link/nnhGcWR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-started"
                style={{ marginTop: 0 }}
              >
                Get Started
                <span className="btn-arrow" aria-hidden="true">&#8599;</span>
              </a>
              <a
                href="/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="btn-get-started"
                style={{ marginTop: 0 }}
              >
                Download Resume
                <span className="btn-arrow" aria-hidden="true">&#8595;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container-custom">
          <ScrollRevealQuote text="From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design." />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container-custom">
          <h2 className="services-main-title" data-reveal>Services</h2>
          <div className="services-list">
            <div className="service-row" data-reveal data-reveal-delay="100">
              <h3 className="service-title">Website Migration</h3>
              <div className="service-categories">
                <span>Web Migration</span>
                <span className="bullet">&bull;</span>
                <span>Optimization</span>
                <span className="bullet">&bull;</span>
                <span>Framer Rebuild</span>
              </div>
            </div>
            <div className="service-row" data-reveal data-reveal-delay="200">
              <h3 className="service-title">UI/UX</h3>
              <div className="service-categories">
                <span>Startup</span>
                <span className="bullet">&bull;</span>
                <span>Agency</span>
                <span className="bullet">&bull;</span>
                <span>SaaS</span>
              </div>
            </div>
            <div className="service-row" data-reveal data-reveal-delay="300">
              <h3 className="service-title">Frontend Development</h3>
              <div className="service-categories">
                <span>UI Dev</span>
                <span className="bullet">&bull;</span>
                <span>Responsive Layouts</span>
                <span className="bullet">&bull;</span>
                <span>Web Performance</span>
              </div>
            </div>
            <div className="service-row" data-reveal data-reveal-delay="400">
              <h3 className="service-title">Product Consulting</h3>
              <div className="service-categories">
                <span>Product Direction</span>
                <span className="bullet">&bull;</span>
                <span>Web Strategy</span>
                <span className="bullet">&bull;</span>
                <span>Technical Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="work">
        <div className="container-custom">
          <div className="section-header-row" data-reveal>
            <h2 className="section-label">Featured Projects</h2>
            <Link to="/work" className="btn-secondary">View All Work</Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, idx) => (
              <div className="project-card-wrapper" key={project.id} data-reveal="scale" data-reveal-delay={String(idx * 150)}>
                <Link to={`/work/${project.slug}`} className="project-card-link">
                  <div className="project-card-image-wrap">
                    <img
                      src={project.project_image_1}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-card-info">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.short_description_project_card}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Tools Section */}
      <Suspense fallback={<div style={{ minHeight: '400px' }}>Loading...</div>}>
        <Skills />
      </Suspense>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container-custom">
          <h2 className="section-label" data-reveal>Testimonials</h2>
          <div className="testimonials-grid">
            {[
              {
                name: "Yakoub Kashmiri",
                role: "Marketing Director",
                quote: "Templyo completely changed how I approach building sites in Framer. The templates are not just beautiful, they’re actually structured in a way that makes scaling so much easier."
              },
              {
                name: "Daniel K.",
                role: "Indie Maker",
                quote: "I’ve tried dozens of Framer templates, but Templyo stands out. Everything feels intentional, from the layout to the smallest interactions."
              },
              {
                name: "Mark M.",
                role: "Startup Founder",
                quote: "Templyo saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom."
              },
              {
                name: "Omar H.",
                role: "Frontend Developer",
                quote: "The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish."
              }
            ].map((t, idx) => (
              <div className="testimonial-card" key={idx} data-reveal data-reveal-delay={String(idx * 120)}>
                <p className="testimonial-quote">“{t.quote}”</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thoughts / Blog Teaser Section */}
      <section className="blog-teaser-section">
        <div className="container-custom">
          <h2 className="section-label" data-reveal>Thoughts</h2>

          <div className="blog-teaser-grid">
            {/* Card 1 */}
            {blogData[0] && (
              <Link
                to={`/blog/${blogData[0].slug}`}
                className="blog-photo-card"
                data-reveal="scale"
                style={{
                  backgroundImage: blogData[0].image
                    ? `url(${blogData[0].image})`
                    : 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80)'
                }}
              >
                <div className="blog-photo-card-overlay" />
                <div className="blog-photo-card-body">
                  <span className="blog-photo-card-date">May 5, 2025</span>
                  <h3 className="blog-photo-card-title">{blogData[0].title}</h3>
                  <p className="blog-photo-card-desc">{blogData[0].short_summary_article_card}</p>
                </div>
              </Link>
            )}

            {/* Card 2 */}
            {blogData[1] && (
              <Link
                to={`/blog/${blogData[1].slug}`}
                className="blog-photo-card"
                data-reveal="scale"
                data-reveal-delay="100"
                style={{
                  backgroundImage: blogData[1].image
                    ? `url(${blogData[1].image})`
                    : 'url(https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80)'
                }}
              >
                <div className="blog-photo-card-overlay" />
                <div className="blog-photo-card-body">
                  <span className="blog-photo-card-date">Jun 16, 2025</span>
                  <h3 className="blog-photo-card-title">{blogData[1].title}</h3>
                  <p className="blog-photo-card-desc">{blogData[1].short_summary_article_card}</p>
                </div>
              </Link>
            )}

            {/* CTA Card */}
            <div className="blog-cta-card" data-reveal data-reveal-delay="200">
              <p className="blog-cta-text">
                Explore more writing on design, development, and building products.
              </p>
              <Link to="/blog" className="blog-cta-link">
                <span>View All Articles</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container-custom contact-grid">
          <div className="contact-info" data-reveal="slide-left">
            <h2 className="contact-title">Let’s talk.</h2>
            <p className="contact-desc">
              Have a project or need help? Fill out the form, and we'll get back to you soon.
            </p>

            <div className="contact-socials">
              {/* X / Twitter */}
              <a href="https://x.com/mabdullah_devx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/imabdullah.ch/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/muhammad-abdullah-5818a9291/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/mabdullah-devx" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap" data-reveal="slide-right" data-reveal-delay="200">
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="project">Your Project</label>
                <textarea
                  id="project"
                  value={formState.project}
                  onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-form ${formStatus}`}
                disabled={formStatus === 'loading'}
                aria-live="polite"
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'loading' && 'Sending...'}
                {formStatus === 'success' && 'Success!'}
                {formStatus === 'error' && 'Error. Fill all fields.'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
