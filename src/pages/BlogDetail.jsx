import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Menu, X, Sun, Moon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blog } from '../data/blogs';

const BlogDetail = () => {
  const { slug } = useParams();
  const blogPost = blog.find((b) => b.slug === slug);
  const [content, setContent] = useState('');
  const [toc, setToc] = useState([]);
  const [isReaderMode, setIsReaderMode] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    if (!blogPost) return;

    fetch(blogPost.readme)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);

        // Extract ## and ### headings
        const headings = text
          .split('\n')
          .filter((line) => /^(##|###)\s+/.test(line))
          .map((line) => {
            const level = line.startsWith('###') ? 3 : 2;
            const title = line.replace(/^###*\s+/, '').trim();
            const id = title
              .toLowerCase()
              .replace(/[^\w\s-]/g, '')
              .replace(/\s+/g, '-');
            return { id, title, level };
          });

        setToc(headings);
      });
  }, [blogPost]);

  if (!blogPost)
    return <div className="text-center py-20 text-gray-500">Blog not found</div>;

  return (
    <div
  className={`min-h-screen pt-20 flex flex-col lg:flex-row transition-colors duration-300 w-full overflow-x-hidden ${
    isReaderMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-gray-50 text-gray-800'
  }`}
>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden flex items-center justify-between px-6 py-3 border-b border-gray-200 ">
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          {isTocOpen ? <X size={18} /> : <Menu size={18} />}
          Table of Contents
        </button>

        <button
          onClick={() => setIsReaderMode(!isReaderMode)}
          className="flex items-center gap-2 text-sm"
        >
          {isReaderMode ? <Sun size={18} /> : <Moon size={18} />}
          Reader Mode
        </button>
      </div>

      {/* Sidebar */}
      {(toc.length > 0 && (isTocOpen || window.innerWidth >= 1024)) && (
        <aside
          className={`${
            isReaderMode
              ? 'bg-[#222] border-gray-700 text-gray-300'
              : 'bg-white border-gray-200 text-gray-700'
          } w-full lg:w-72 border-r p-6 lg:sticky top-24 overflow-y-auto shadow-sm rounded-lg h-fit shadow-md`}
        >
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {toc.map((item, i) => (
              <li key={i} className={`${item.level === 3 ? 'ml-4 text-sm' : ''}`}>
                <a
                  href={`#${item.id}`}
                  className="block hover:text-google-blue transition"
                  onClick={() => setIsTocOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Main content */}
      <main
  className={`flex-1 w-full px-4 sm:px-6 lg:px-16 py-10 max-w-full lg:max-w-4xl mx-auto rounded-2xl transition-colors ${
    isReaderMode ? 'bg-[#1e1e1e]' : 'bg-white shadow-md'
  }`}
>

        <div className="flex justify-between items-center mb-8">
          <Link
            to="/blog"
            className={`inline-flex items-center hover:underline ${
              isReaderMode ? 'text-blue-400' : 'text-google-blue'
            }`}
          >
            <ArrowLeft size={18} className="mr-2" />
            <span className="font-medium">Back to All Posts</span>
          </Link>

          {/* Desktop Reader Mode toggle */}
          <button
            onClick={() => setIsReaderMode(!isReaderMode)}
            className="hidden lg:flex items-center gap-2 text-sm font-medium"
          >
            {isReaderMode ? <Sun size={18} /> : <Moon size={18} />}
            {isReaderMode ? 'Light Mode' : 'Reader Mode'}
          </button>
        </div>

        {/* Markdown content */}
        <article
  className={`prose prose-lg max-w-full sm:max-w-none leading-relaxed transition-colors break-words ${
    isReaderMode
      ? 'prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400'
      : 'prose-slate'
  }`}
>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, children, ...props }) => {
                const text = String(children)
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-');
                return (
                  <h2 id={text} className="scroll-mt-24" {...props}>
                    {children}
                  </h2>
                );
              },
              h3: ({ node, children, ...props }) => {
                const text = String(children)
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-');
                return (
                  <h3 id={text} className="scroll-mt-24" {...props}>
                    {children}
                  </h3>
                );
              },
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
  className="rounded-lg overflow-x-auto"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code
  className={`text-sm px-1 py-0.5 rounded overflow-x-auto block ${
    isReaderMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100'
  }`}
  {...props}
>
  {children}
</code>

                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default BlogDetail;
