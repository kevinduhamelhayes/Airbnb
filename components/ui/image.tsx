"use client";

import * as React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps extends NextImageProps {
  className?: string;
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "landscape";
  width?: number;
  height?: number;
  alt: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, aspectRatio, alt, ...props }, ref) => {
    const aspectRatioClass = aspectRatio
      ? {
          auto: "aspect-auto",
          square: "aspect-square",
          video: "aspect-video",
          portrait: "aspect-[3/4]",
          landscape: "aspect-[4/3]",
        }[aspectRatio]
      : "";

    return (
      <div
        className={cn(
          "overflow-hidden",
          aspectRatioClass,
          className
        )}
      >
        <NextImage
          ref={ref as any}
          alt={alt}
          className={cn("h-full w-full object-cover transition-all")}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image }; 