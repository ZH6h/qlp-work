import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={imageUrl}
            alt={title || 'Project image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
           <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
             查看项目
             <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="group">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out border border-slate-200/50 hover:border-blue-200">
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              {cardContent}
            </Link>
          ) : (
            <div className="flex flex-col h-full">{cardContent}</div>
          )}
        </div>
    </div>
  );
} 