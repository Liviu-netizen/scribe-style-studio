
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

interface ProjectCardProps {
  type: string;
  year: string;
  title: string;
  description: string;
  linkText: string;
  thumbnailUrl?: string;
  fullImageUrl?: string;
}

const ProjectCard = ({
  type,
  year,
  title,
  description,
  linkText,
  thumbnailUrl,
  fullImageUrl
}: ProjectCardProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <AspectRatio ratio={16 / 9}>
        {thumbnailUrl ? (
          <img 
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-400 flex items-center justify-center text-white text-opacity-30 text-xl">
            Project Image
          </div>
        )}
      </AspectRatio>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium py-1 px-2 rounded-full bg-navy-50 text-navy-700">{type}</span>
          <span className="text-navy-500 text-sm">{year}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-navy-600 mb-4">{description}</p>
        {fullImageUrl ? (
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
                {linkText} <ExternalLink className="ml-1 h-4 w-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 overflow-hidden bg-transparent border-0">
              <DialogTitle className="sr-only">{title}</DialogTitle>
              <img 
                src={fullImageUrl}
                alt={title}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </DialogContent>
          </Dialog>
        ) : (
          <a href="#" className="text-navy-700 font-medium flex items-center hover:text-navy-500 transition">
            {linkText} <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

