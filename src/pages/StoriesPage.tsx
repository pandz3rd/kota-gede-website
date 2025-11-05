// import React from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/blog/ArticleCard';
import { useArticles } from '../hooks/useArticles';

const StoriesPage = () => {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <Layout>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16">
                Story & Journal
              </h1>
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600"></div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16">
                Story & Journal
              </h1>
              <p className="text-slate-600">Error loading articles: {error}</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16">
              Story & Journal
            </h1>
          </div>

          {/* Blog Grid */}
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Belum ada artikel yang dipublikasikan.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;