import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

export function BlogPost({ postId, onBack }: BlogPostProps) {
  const { language } = useLanguage();
  const currentPosts = blogPosts[language] || blogPosts.en;
  const post = currentPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl mb-4">Post not found</h2>
        <Button onClick={onBack}>
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <article className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Button>

        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-xl mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-wrap gap-2 pt-6 border-t">
          <span className="text-gray-600">Tags:</span>
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
