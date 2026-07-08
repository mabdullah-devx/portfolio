import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { workData } from '../data/cms';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Work.css';

export const Work: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="work-page-container" ref={revealRef}>
      <SEO 
        title="Work | M Abdullah" 
        description="A showcase of my latest software engineering projects, highlighting thoughtful design and impactful results."
        canonicalUrl="/work"
      />
      <header className="work-header" id="hero-section">
        <div className="container-custom">
          <h1 className="work-title hero-entrance-anim">My Brightest Creations</h1>
          <p className="work-description hero-entrance-anim-delay-1">
            A showcase of my latest projects, highlighting thoughtful design, clear strategy, and impactful results.
          </p>
        </div>
      </header>

      <section className="work-grid-section">
        <div className="container-custom">
          <div className="work-grid">
            {workData.map((project, idx) => (
              <div className="work-project-card" key={project.id} data-reveal="scale" data-reveal-delay={String(idx * 100)}>
                <Link to={`/work/${project.slug}`} className="work-project-link">
                  <div className="work-project-image-wrap">
                    <img 
                      src={project.project_image_1} 
                      alt={project.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="work-project-info">
                    <h2 className="work-project-title">{project.title}</h2>
                    <p className="work-project-desc">{project.short_description_project_card}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
