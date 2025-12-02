export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl: string; // Direct link to mp4/webm
  ctaLink: string;
  awards?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}