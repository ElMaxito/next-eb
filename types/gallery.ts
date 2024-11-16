// types/gallery.ts

export interface GalleryImage {
    id: number;
    title: string;
    caption?: string;
    image_url: string;
    width: number;
    height: number;
    display_order: number;
  }