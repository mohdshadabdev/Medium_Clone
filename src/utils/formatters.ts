/**
 * Format a date in a readable format
 */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Format a short date (Month Day)
 */
export const formatShortDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Format reading time
 */
export const formatReadingTime = (minutes: number): string => {
  return `${minutes} min read`;
};

/**
 * Format large numbers (like followers)
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Limit string length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Convert HTML string to plain text
 */
export const htmlToPlainText = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

/**
 * Calculate estimated reading time
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const plainText = htmlToPlainText(content);
  const words = plainText.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};