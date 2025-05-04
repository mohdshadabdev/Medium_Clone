import { Article, Author, Category } from '../types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    bio: 'Bestselling author and tech journalist covering AI, startups, and digital transformation. Former editor at TechCrunch and The Verge.',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: 42,
    followers: 12400,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Alex Chen',
    bio: 'Software engineer turned writer. I write about developer experience, coding best practices, and the human side of technology.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: 112,
    followers: 8750,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Maya Patel',
    bio: 'Design lead and UX researcher. I explore the intersection of human psychology and digital interfaces.',
    avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: 89,
    followers: 5230,
    isVerified: false,
  },
  {
    id: '4',
    name: 'James Wilson',
    bio: 'Venture capitalist and former founder. I write about startup funding, growth strategies, and market opportunities.',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: 76,
    followers: 15800,
    isVerified: true,
  },
  {
    id: '5',
    name: 'Sarah Johnson',
    bio: 'Climate scientist and environmental advocate. My writing focuses on sustainability, clean tech, and our collective future.',
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: 203,
    followers: 9120,
    isVerified: true,
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Startups', slug: 'startups' },
  { id: '3', name: 'Design', slug: 'design' },
  { id: '4', name: 'Programming', slug: 'programming' },
  { id: '5', name: 'AI & Machine Learning', slug: 'ai-ml' },
  { id: '6', name: 'Health', slug: 'health' },
  { id: '7', name: 'Science', slug: 'science' },
  { id: '8', name: 'Productivity', slug: 'productivity' },
];

const loremIpsum = `
<p>What constitutes success varies among different cultures and contexts. In some societies, it's measured by financial wealth, while in others it might be about happiness, impact, or fulfillment. There's no universal definition—success is deeply personal.</p>

<h2>The Nature of Achievement</h2>

<p>Any meaningful accomplishment requires consistent effort over time. The overnight success story is largely a myth that disregards the years of preparation leading to a breakthrough moment. Behind every remarkable achievement lies countless hours of practice, failure, and persistence.</p>

<p>Studies suggest that mastery in any field typically requires around 10,000 hours of dedicated practice. While this number isn't exact, it highlights that excellence develops gradually through deliberate effort rather than sudden inspiration.</p>

<blockquote>
  <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
</blockquote>

<p>When we examine the trajectories of renowned figures across different domains—whether artists, scientists, entrepreneurs, or athletes—we find common patterns of resilience. They faced rejection and setbacks yet continued refining their approach.</p>

<h2>Redefining Our Metrics</h2>

<p>Traditional metrics of success often prioritize external validation: wealth, status, recognition. But these measures frequently fail to capture what truly matters for long-term fulfillment.</p>

<p>Research in positive psychology suggests that the most satisfied individuals focus on intrinsic motivations—personal growth, meaningful relationships, and contributing to something larger than themselves. These aspects correlate more strongly with life satisfaction than external achievements alone.</p>

<h3>The Role of Failure</h3>

<p>Failure, despite its negative connotations, serves as an essential teacher. Each setback provides information about what doesn't work, narrowing the path toward what might succeed. The ability to extract lessons from failure and adjust accordingly distinguishes those who eventually thrive from those who remain stagnant.</p>

<p>Innovation inherently involves risk and uncertainty. The most groundbreaking advancements often emerge from numerous failed attempts. The Wright brothers crashed repeatedly before achieving flight. Thomas Edison famously remarked that he hadn't failed in his attempts to invent the light bulb but had discovered thousands of ways that wouldn't work.</p>

<blockquote>
  <p>I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
</blockquote>

<h2>Balancing Ambition with Contentment</h2>

<p>The pursuit of improvement, while valuable, becomes problematic when it prevents appreciation of current circumstances. The constant striving for more—more achievement, more possessions, more status—can create a perpetual state of dissatisfaction regardless of actual accomplishments.</p>

<p>Finding balance between ambition and contentment represents a sophisticated form of wisdom. It allows for meaningful goals while maintaining present awareness and gratitude. This equilibrium doesn't reject achievement but places it within a broader context of a well-lived life.</p>

<h3>The Collective Dimension</h3>

<p>Individual success exists within wider social contexts. True achievement rarely occurs in isolation but depends on supportive environments, collaborators, mentors, and predecessors who laid foundational work.</p>

<p>Recognizing this interconnectedness counters the self-made individual narrative and encourages both gratitude and contribution. The most profound legacies often involve enabling others' success rather than merely accumulating personal accolades.</p>

<h2>Conclusion</h2>

<p>Perhaps success is best viewed not as a destination but as an ongoing practice of alignment—bringing our daily actions into harmony with our deepest values. By this definition, success becomes available in each moment through how we direct our attention and energy, regardless of external outcomes.</p>

<p>This perspective doesn't diminish the value of achievement but enriches it by connecting outward accomplishment with inward integrity. The truly successful life, then, might be one where the journey itself is as meaningful as any recognition it eventually yields.</p>
`;

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2025',
    subtitle: 'New frameworks, tools, and methodologies that will shape the web',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[0],
    publishedDate: new Date('2023-12-15'),
    readingTime: 8,
    category: 'Technology',
    likes: 328,
    comments: 42,
    slug: 'future-web-development-2025',
  },
  {
    id: '2',
    title: 'Designing for Accessibility: Beyond the Basics',
    subtitle: 'How inclusive design creates better products for everyone',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[2],
    publishedDate: new Date('2023-11-28'),
    readingTime: 6,
    category: 'Design',
    likes: 215,
    comments: 31,
    slug: 'designing-for-accessibility',
  },
  {
    id: '3',
    title: 'The Rise of Decentralized Finance',
    subtitle: 'How DeFi is transforming the financial landscape',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[3],
    publishedDate: new Date('2023-12-02'),
    readingTime: 12,
    category: 'Startups',
    likes: 406,
    comments: 87,
    slug: 'rise-decentralized-finance',
  },
  {
    id: '4',
    title: 'Sustainable Technology: Building for a Better Planet',
    subtitle: 'How tech companies are reducing their environmental impact',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[4],
    publishedDate: new Date('2023-11-20'),
    readingTime: 9,
    category: 'Science',
    likes: 289,
    comments: 45,
    slug: 'sustainable-technology-better-planet',
  },
  {
    id: '5',
    title: 'The Psychology of Productivity: Working Smarter, Not Harder',
    subtitle: 'Science-backed strategies to improve focus and accomplish more',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[1],
    publishedDate: new Date('2023-12-10'),
    readingTime: 7,
    category: 'Productivity',
    likes: 372,
    comments: 58,
    slug: 'psychology-productivity-work-smarter',
  },
  {
    id: '6',
    title: 'Breaking Through Creative Blocks',
    subtitle: 'Techniques from master artists and designers to spark inspiration',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[2],
    publishedDate: new Date('2023-11-15'),
    readingTime: 5,
    category: 'Design',
    likes: 198,
    comments: 27,
    slug: 'breaking-through-creative-blocks',
  },
  {
    id: '7',
    title: 'Machine Learning for Everyone',
    subtitle: 'How AI is becoming accessible to non-technical professionals',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[0],
    publishedDate: new Date('2023-12-05'),
    readingTime: 10,
    category: 'AI & Machine Learning',
    likes: 412,
    comments: 63,
    slug: 'machine-learning-for-everyone',
  },
  {
    id: '8',
    title: 'The Art of Building Remote Teams',
    subtitle: 'Lessons from companies thriving with distributed workforces',
    content: loremIpsum,
    coverImage: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: authors[3],
    publishedDate: new Date('2023-11-25'),
    readingTime: 8,
    category: 'Startups',
    likes: 246,
    comments: 39,
    slug: 'art-building-remote-teams',
  },
];

// Articles by author
export const getArticlesByAuthor = (authorId: string): Article[] => {
  return articles.filter(article => article.author.id === authorId);
};

// Get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// Get author by id
export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};