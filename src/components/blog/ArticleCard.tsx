import { Link } from 'react-router-dom';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Get excerpt from article or return empty string
  const getExcerpt = () => {
    return article.excerpt || '';
  };

  return (
    <Link to={`/stories/${article.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-[550px] flex flex-col">
        {/* Image */}
        <div className="aspect-[4/3] bg-slate-200 overflow-hidden flex-shrink-0">
          <img 
            src={article.imageContainer}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Date */}
          <div className="text-sm text-slate-500 mb-3">
            {formatDate(article.publishedDate)}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          {getExcerpt() && (
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
              {getExcerpt()}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;