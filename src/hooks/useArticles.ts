import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, doc, getDoc, documentId } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Article } from '../types';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        
        // First, get all published articles
        const q = query(
          collection(db, 'articles'),
          where('isPublished', '==', true)
        );
        
        const querySnapshot = await getDocs(q);
        const articlesData: Article[] = [];
        
        querySnapshot.forEach((doc) => {
          articlesData.push({
            id: doc.id,
            ...doc.data()
          } as Article);
        });
        
        // Sort by publishedDate on the client side
        const sortedArticles = articlesData.sort((a, b) => {
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        });
        
        setArticles(sortedArticles);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        
        const q = query(
          collection(db, 'articles'),
          where('slug', '==', slug)
        );
        
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const articleData = {
            id: doc.id,
            ...doc.data()
          } as Article;
          
          // Check if article is published
          if (articleData.isPublished) {
            setArticle(articleData);
          } else {
            setArticle(null);
          }
        } else {
          setArticle(null);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return { article, loading, error };
};

export const useRelatedArticles = (relatedStoryIds: string[]) => {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        setLoading(true);
        
        // If no related story IDs, return empty array
        if (!relatedStoryIds || relatedStoryIds.length === 0) {
          setRelatedArticles([]);
          setLoading(false);
          return;
        }
        
        // Query articles where document ID is in the relatedStoryIds array
        const q = query(
          collection(db, 'articles'),
          where(documentId(), 'in', relatedStoryIds),
          where('isPublished', '==', true)
        );
        
        const querySnapshot = await getDocs(q);
        const articlesData: Article[] = [];
        
        querySnapshot.forEach((doc) => {
          articlesData.push({
            id: doc.id,
            ...doc.data()
          } as Article);
        });
        
        // Sort by publishedDate
        const sortedArticles = articlesData.sort((a, b) => {
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        });
        
        setRelatedArticles(sortedArticles);
      } catch (err) {
        console.error('Error fetching related articles:', err);
        setError('Failed to fetch related articles');
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [relatedStoryIds]);

  return { relatedArticles, loading, error };
};