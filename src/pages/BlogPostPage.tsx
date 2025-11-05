import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Layout from '../components/layout/Layout';
import BodyComponentRenderer from '../components/blog/BodyComponentRenderer';
import { useArticle, useRelatedArticles } from '../hooks/useArticles';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading, error } = useArticle(slug || '');
  
  // Get related articles based on the relatedStories field
  const { relatedArticles, loading: relatedLoading } = useRelatedArticles(
    article?.relatedStories || []
  );

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Error</h1>
            <p className="text-slate-600 mb-8">{error}</p>
            <Link 
              to="/stories"
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Stories
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/stories"
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Stories
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>


      {/* Hero Image */}
      <section className="relative h-96 bg-slate-300 overflow-hidden">
        <img 
          src={article.imageContainer}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/stories"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Stories
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-slate-500 mb-6">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none">
            {article.bodyComponents.map((component) => (
              <BodyComponentRenderer 
                key={component.id} 
                component={component} 
              />
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Published on {formatDate(article.publishedDate)}
              </div>
              
              <Link 
                to="/stories"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Stories
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Posts Section */}
      {/* Related Posts Section - Only show if there are related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Related Stories</h2>
            
            {relatedLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/stories/${relatedArticle.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-[550px] flex flex-col">
                      <div className="aspect-[4/3] bg-slate-200 overflow-hidden flex-shrink-0">
                        <img 
                          src={relatedArticle.imageContainer}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-sm text-slate-500 mb-3">
                          {formatDate(relatedArticle.publishedDate)}
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-300 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
                          {relatedArticle.excerpt || ''}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPostPage;