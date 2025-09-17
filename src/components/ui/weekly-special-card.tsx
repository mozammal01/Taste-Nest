import Image from "next/image";
import { cn } from "@/lib/utils";

interface WeeklySpecialCardProps {
  price: string;
  title: string;
  rating: number;
  imageUrl: string;
  className?: string;
}

export default function WeeklySpecialCard({ price, title, rating, imageUrl, className }: WeeklySpecialCardProps) {
  return (
    <div className={cn("relative bg-black border-4 border-secondary rounded-4xl p-4 sm:p-6 max-w-md mx-auto", className)}>
      {/* Weekly Special Badge */}
      <div className="absolute -top-3 sm:-top-4 left-2/3 transform -translate-x-1/2 z-10">
        <div className="bg-primary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
          Weekly Special
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 sm:mt-4">
        {/* Left side - Text content */}
        <div className="flex flex-col space-y-2 sm:space-y-3 flex-1">
          {/* Price */}
          <div className="text-primary text-2xl sm:text-3xl font-bold">${price}</div>

          {/* Title */}
          <h3 className="text-white text-lg sm:text-2xl font-bold leading-tight pr-2">{title}</h3>

          {/* Star Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={cn("w-4 h-4 sm:w-6 sm:h-6", i < rating ? "text-secondary fill-current" : "text-gray-400")}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Right side - Pizza Image */}
        <div className="ml-3 sm:ml-6 flex-shrink-0">
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
            <Image src={imageUrl} alt={title} fill className="object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
