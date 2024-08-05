import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

export const ContainerScrollAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        containerRef.current.style.transform = `translateY(${scrollTop * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("scroll-animation-container", className)}>
      {children}
    </div>
  );
};
