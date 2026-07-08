import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/cms';
import SEO from '../components/SEO';
import './BlogDetail.css';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogData.find((b) => b.slug === slug);

  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="container-custom detail-notfound">
        <h2>Article Not Found</h2>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  // Get other blog posts (max 2) for "More Articles" section
  const morePosts = blogData
    .filter((b) => b.id !== post.id)
    .slice(0, 2);

  return (
    <div className="blog-detail-page">
      <SEO 
        title={`${post.title} | M Abdullah`} 
        description={post.summary || "Read my latest thoughts and insights."}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
      />
      <article className="blog-article">
        {/* Header */}
        <header className="article-header">
          <div className="container-custom rtf-content-wrap">
            <span className="article-read-time">{post.read_time}</span>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-lead">{post.short_summary_article_card || post.summary}</p>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <section className="article-hero-image-sec">
            <div className="container-custom rtf-content-wrap">
              <div className="article-hero-image-wrap">
                <img src={post.image} alt={post.title} />
              </div>
            </div>
          </section>
        )}

        {/* Article Body Content */}
        {post.content && (
          <section className="article-body-sec">
            <div className="container-custom rtf-content-wrap">
              <div 
                className="rtf-content" 
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>
          </section>
        )}
      </article>

      {/* More Articles Section */}
      {morePosts.length > 0 && (
        <section className="more-articles-section">
          <div className="container-custom">
            <h2 className="more-articles-title">Read Next</h2>
            <div className="more-articles-grid">
              {morePosts.map((p) => (
                <article className="more-article-card" key={p.id}>
                  <Link to={`/blog/${p.slug}`} className="more-article-link">
                    <div className="more-article-img-wrap">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div className="more-article-info">
                      <span className="more-article-readtime">{p.read_time}</span>
                      <h3 className="more-article-card-title">{p.title}</h3>
                      <p className="more-article-card-desc">{p.short_summary_article_card}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
