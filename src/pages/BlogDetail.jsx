import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blog } from '../data/blogs';

const dayContexts = {
  python: require.context('../../public/readmes/blog/python', false, /\.md$/),
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blogPost = blog.find((b) => b.slug === slug);
  const [mainContent, setMainContent] = useState('');
  const [dayContents, setDayContents] = useState([]);

  useEffect(() => {
    if (!blogPost) return;

    // Load main README
    fetch(blogPost.readme)
      .then((res) => res.text())
      .then(setMainContent);

    // Load day markdown files if folder is defined
    if (blogPost.folder && dayContexts[blogPost.folder]) {
      const context = dayContexts[blogPost.folder];
      const loadDays = async () => {
        const days = await Promise.all(
          context.keys().map(async (key) => {
            const fileUrl = context(key);
            const res = await fetch(fileUrl);
            const text = await res.text();

            const filename = key.replace('./', '').replace('.md', '');
            return {
              title: filename.replace(/([a-z])([A-Z])/g, '$1 $2'),
              content: text,
            };
          })
        );
        days.sort((a, b) => a.title.localeCompare(b.title));
        setDayContents(days);
      };
      loadDays();
    }
  }, [blogPost]);

  if (!blogPost) return <div className="text-center py-20 text-gray-500">Blog not found</div>;

  return (
    <div className="min-h-screen pt-20 flex flex-col lg:flex-row bg-gray-50">
      {/* Sidebar */}
      {dayContents.length > 0 && (
        <aside className="hidden lg:block w-72 border-r border-gray-200 bg-white p-6 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Days</h2>
          <ul className="space-y-3">
            {dayContents.map((day, i) => (
              <li key={i}>
                <a
                  href={`#day-${i + 1}`}
                  className="block text-gray-600 hover:text-google-blue transition"
                >
                  {day.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 px-6 sm:px-10 lg:px-16 py-12 max-w-4xl mx-auto bg-white shadow-md rounded-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-google-blue hover:underline mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span className="font-medium">Back to All Posts</span>
        </Link>

        {/* Markdown Renderer */}
        <article className="prose prose-lg prose-slate max-w-none mb-16 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg overflow-hidden"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-100 text-sm px-1 py-0.5 rounded" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {mainContent}
          </ReactMarkdown>
        </article>

        {dayContents.map((day, i) => (
          <section key={i} id={`day-${i + 1}`} className="mb-20">
            <article className="prose prose-lg prose-slate max-w-none leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg overflow-hidden"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-100 text-sm px-1 py-0.5 rounded" {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {day.content}
              </ReactMarkdown>
            </article>
          </section>
        ))}
      </main>
    </div>
  );
};

export default BlogDetail;
