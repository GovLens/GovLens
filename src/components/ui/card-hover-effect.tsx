"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (title: string) => {
    if (title !== "Optimism") {
      toast.info("Coming Soon!", {
        position: "top-center", // Center the toast notification
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={cn("flex ml-16 mt-8", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-[400px] w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleCardClick(item.title)}
        >
          {/* Apply scaling and shadow effect on hover */}
          <div className={`transition-transform duration-300 ease-in-out ${hoveredIndex === idx ? 'scale-110 ' : 'scale-100'}` }>
            {item.title === "Optimism" ? (
              <Link href={item.link} className="block h-full w-full">
                <Card>
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </Card>
              </Link>
            ) : (
              <Card>
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </Card>
            )}
          </div>
        </div>
      ))}

      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-[230px] h-[200px]  cursor-pointer  p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
