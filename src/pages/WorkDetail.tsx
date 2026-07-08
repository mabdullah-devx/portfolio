import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { workData } from '../data/cms';
import SEO from '../components/SEO';
import './WorkDetail.css';

export const WorkDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const project = workData.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container-custom detail-notfound">
        <h2>Project Not Found</h2>
        <Link to="/work" className="btn-primary">Back to All Work</Link>
      </div>
    );
  }

  // Get other projects (max 2) for "More Projects" section
  const moreProjects = workData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="work-detail-page">
      <SEO 
        title={`${project.title} | M Abdullah`} 
        description={project.short_description_project_card || project.description || ''}
        canonicalUrl={`/work/${project.slug}`}
        ogImage={project.project_image_1 || ''}
        ogType="article"
      />
      {/* Hero Header */}
      <header className="project-detail-header">
        <div className="container-custom">
          <div className="project-meta-top">
            <span className="project-detail-cat">{project.category}</span>
            <span className="project-detail-year">
              {project.year ? new Date(project.year).getFullYear() : '2025'}
            </span>
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-lead">{project.description}</p>
          
          {project.live_link && (
            <a 
              href={project.live_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-live-link"
            >
              {project.live_link.includes('github.com') ? 'View on GitHub' : 'Visit Live Site'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {project.live_link.includes('github.com') ? (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                ) : (
                  <>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </>
                )}
              </svg>
            </a>
          )}
        </div>
      </header>

      {/* Hero Image */}
      {project.project_image_1 && (
        <section className="project-hero-image-sec">
          <div className="container-custom">
            <div className="project-hero-image-wrap">
              <img src={project.project_image_1} alt={`${project.title} Hero`} />
            </div>
          </div>
        </section>
      )}

      {/* Content Section 1: Intro */}
      {project.intro_content && (
        <section className="project-content-block">
          <div className="container-custom rtf-content-wrap">
            <div 
              className="rtf-content" 
              dangerouslySetInnerHTML={{ __html: project.intro_content }} 
            />
          </div>
        </section>
      )}

      {/* Mid Images Grid (Images 2 & 3 side by side) */}
      {(project.project_image_2 || project.project_image_3) && (
        <section className="project-images-grid-sec">
          <div className="container-custom">
            <div className="project-images-two-col">
              {project.project_image_2 && (
                <div className="project-grid-img-wrap">
                  <img src={project.project_image_2} alt={`${project.title} Detail 2`} />
                </div>
              )}
              {project.project_image_3 && (
                <div className="project-grid-img-wrap">
                  <img src={project.project_image_3} alt={`${project.title} Detail 3`} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content Section 2: Body */}
      {project.body_content && (
        <section className="project-content-block">
          <div className="container-custom rtf-content-wrap">
            <div 
              className="rtf-content" 
              dangerouslySetInnerHTML={{ __html: project.body_content }} 
            />
          </div>
        </section>
      )}

      {/* Detail Image 4 (Large) */}
      {project.project_image_4 && (
        <section className="project-single-image-sec">
          <div className="container-custom">
            <div className="project-single-img-wrap">
              <img src={project.project_image_4} alt={`${project.title} Detail 4`} />
            </div>
          </div>
        </section>
      )}

      {/* Content Section 3: Outro */}
      {project.outro_content && (
        <section className="project-content-block">
          <div className="container-custom rtf-content-wrap">
            <div 
              className="rtf-content" 
              dangerouslySetInnerHTML={{ __html: project.outro_content }} 
            />
          </div>
        </section>
      )}

      {/* Bottom CTA for visiting site */}
      {project.live_link && (
        <section className="project-bottom-cta-sec">
          <div className="container-custom text-center">
            <a 
              href={project.live_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Launch Project Website
            </a>
          </div>
        </section>
      )}

      {/* More Projects Section */}
      {moreProjects.length > 0 && (
        <section className="more-projects-section">
          <div className="container-custom">
            <h2 className="more-projects-title">Other Projects</h2>
            <div className="more-projects-grid">
              {moreProjects.map((p) => (
                <div className="more-project-card" key={p.id}>
                  <Link to={`/work/${p.slug}`} className="more-project-link">
                    <div className="more-project-img-wrap">
                      <img src={p.project_image_1} alt={p.title} />
                    </div>
                    <div className="more-project-info">
                      <h3 className="more-project-card-title">{p.title}</h3>
                      <p className="more-project-card-desc">{p.short_description_project_card}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WorkDetail;
