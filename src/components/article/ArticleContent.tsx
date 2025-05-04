import { useState } from 'react';
import { Article } from '../../types';
import { Sparkles, MessageSquare, Bookmark, Share2 } from 'lucide-react';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const toggleHighlightMode = () => {
    setIsHighlightMode(!isHighlightMode);
  };

  const summarizeArticle = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "system",
            content: "You are a professional article summarizer. Create concise, informative summaries that capture the main points."
          }, {
            role: "user",
            content: `Please summarize this article in 2-3 paragraphs: ${article.content}`
          }],
          temperature: 0.7,
          max_tokens: 250
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }

      const data = await response.json();
      setSummary(data.choices[0].message.content);
    } catch (error) {
      console.error('Error summarizing article:', error);
      setError('Failed to generate summary. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-auto"
          />
        </div>
        
        <div 
          className={`prose prose-lg dark:prose-invert mx-auto ${
            isHighlightMode ? 'cursor-pointer' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h3 className="text-lg font-medium mb-4">Reading Experience</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              className={`btn ${isLoading ? 'btn-disabled' : 'btn-outline'} flex items-center justify-center gap-2`}
              onClick={summarizeArticle}
              disabled={isLoading}
            >
              <Sparkles className="h-4 w-4" />
              <span>{isLoading ? 'Summarizing...' : 'Summarize Article'}</span>
            </button>
            
            <button 
              className={`btn ${isHighlightMode ? 'btn-primary' : 'btn-outline'} flex items-center justify-center gap-2`}
              onClick={toggleHighlightMode}
            >
              <Bookmark className="h-4 w-4" />
              <span>Save Quote Mode</span>
            </button>
          </div>

          {error && (
            <div className="mt-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg p-4">
              {error}
            </div>
          )}
          
          {summary && !error && (
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 animate-fade-in">
              <h4 className="font-medium mb-3">Article Summary</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{summary}</p>
            </div>
          )}
          
          <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-2">Reading Stats</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>Word count: {article.content.split(/\s+/).length} words</p>
              <p>Estimated time: {article.readingTime} minutes</p>
              <p>Your reading pace: {Math.floor(article.content.split(/\s+/).length / article.readingTime)} words per minute</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="btn btn-outline w-full flex items-center justify-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Switch to Thread View</span>
            </button>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Published in <a href="#" className="text-accent-600 hover:underline">{article.category}</a>
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Share">
              <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Save">
              <Bookmark className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;