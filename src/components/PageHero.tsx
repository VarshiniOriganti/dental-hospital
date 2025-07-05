import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
  children
}) => {
  return (
    <section className={cn("relative py-40 -mt-20 pt-20", className)}>
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-violet-800/80 to-violet-600/70" />
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
