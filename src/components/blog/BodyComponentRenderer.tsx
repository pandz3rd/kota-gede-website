// import React from 'react';
import { BodyComponent } from '../../types';
import ImageCarousel from './ImageCarousel';


interface BodyComponentRendererProps {
  component: BodyComponent;
}

function getEmbedUrl(url: string): string {
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1];
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return url;
}

const BodyComponentRenderer = ({ component }: BodyComponentRendererProps) => {
  switch (component.type) {
    case 'bodyTitle':
      return (
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 mt-8">
          {component.value}
        </h2>
      );

    case 'subtitle':
      return (
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-700 mb-4 mt-6">
          {component.value}
        </h3>
      );

    case 'bodyText':
      return (
        <p className="text-slate-600 leading-relaxed text-lg mb-6">
          {component.value}
        </p>
      );

    case 'singleImage':
      return (
        <div className="my-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={component.value}
              alt="Article image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      );

    case 'multipleImage': {
      const imageUrls = component.value.split(',').map(url => url.trim());
      return <ImageCarousel imageUrls={imageUrls} />;
    }

    case "video":
      const videoUrl = component.value;
      const isDirectVideo = videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm") || videoUrl.endsWith(".ogg");

      return (
        <div className="my-4">
          {isDirectVideo ? (
            <video
              src={videoUrl}
              controls
              className="w-full max-h-[500px] rounded-lg shadow-md"
            />
          ) : (
            <div
              className="relative overflow-hidden rounded-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={getEmbedUrl(videoUrl)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          )}
        </div>
      );


    default:
      return null;
  }
};

export default BodyComponentRenderer;