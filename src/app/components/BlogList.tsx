import { Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

interface BlogListProps {
  onSelectPost: (postId: string) => void;
}

export function BlogList({ onSelectPost }: BlogListProps) {
  const { t, language } = useLanguage();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentPosts = (blogPosts as any)[language] || blogPosts.en;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('blog.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <h3 className="text-2xl line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Tag size={14} />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  onClick={() => onSelectPost(post.id)}
                  className="w-full"
                >
                  {t('blog.readMore')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
