export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  following: number;
  followers: number;
  isVerified: boolean;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedDate: Date;
  readingTime: number;
  category: string;
  likes: number;
  comments: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}