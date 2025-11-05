export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SectionData {
  title: string;
  content: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}

export interface BodyComponent {
  id: number;
  type: 'bodyText' | 'singleImage' | 'multipleImage' | 'video' | 'bodyTitle' | 'subtitle';
  value: string;
}

export interface Article {
  id?: string;
  title: string;
  slug: string;
  imageContainer: string;
  publishedDate: string;
  isPublished: boolean;
  bodyComponents: BodyComponent[];
  relatedStories: string[];
  createdAt: string;
  updatedAt: string;
  status: 'Draft' | 'Published';
  excerpt?: string;
}

export interface Story {
  id?: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  status: 'Draft' | 'Published';
  isPublished: boolean;
}