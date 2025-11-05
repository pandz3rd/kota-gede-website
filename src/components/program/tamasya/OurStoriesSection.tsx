import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import type { Story } from '../../../types/index';

const OurStoriesSection: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const storiesRef = collection(db, 'stories');
        const q = query(storiesRef, where('isPublished', '==', true), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedStories: Story[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Story),
        }));

        setStories(fetchedStories);
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const openModal = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <section id="stories" className="py-20 px-6 bg-gradient-to-b from-white to-bg ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Stories
            </h2>
            <p className="text-xl text-secondary font-medium">
              Cerita yg sudah kita lalui
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-600">Loading stories...</p>
          ) : stories.length === 0 ? (
            <p className="text-center text-gray-600">Belum ada cerita tersedia.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(story.image)}
                >
                  <div className="relative aspect-square rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-semibold text-sm">{story.title}</h4>
                      <p className="text-xs text-white/80 mt-1">{story.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Story Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OurStoriesSection;
