import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogData } from '../data/cms';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Blog.css';

export const Blog: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="blog-page-container" ref={revealRef}>
      <SEO 
        title="Blog | M Abdullah" 
        description="Thoughts, ideas, and insights on software engineering, UI/UX design, and product development."
        canonicalUrl="/blog"
      />
      <header className="blog-header" id="hero-section">
        <div className="container-custom">
          <h1 className="blog-title hero-entrance-anim">Thoughts</h1>
          <p className="blog-description hero-entrance-anim-delay-1">
            Articles, guides, and ideas on web design, Framer development, and digital product strategy.
          </p>
        </div>
      </header>

      <section className="blog-grid-section">
        <div className="container-custom">
          <div className="blog-grid">
            {blogData.map((post, idx) => (
              <article className="blog-post-card" key={post.id} data-reveal="scale" data-reveal-delay={String(idx * 120)}>
                <Link to={`/blog/${post.slug}`} className="blog-post-link">
                  <div className="blog-post-image-wrap">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-meta">
                      <span className="blog-post-readtime">{post.read_time}</span>
                    </div>
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-summary">{post.short_summary_article_card}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
