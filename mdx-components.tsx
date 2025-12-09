import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        : '';
      return (
        <h1 id={id} className="text-4xl font-bold text-text-primary mb-6 mt-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        : '';
      return (
        <h2 id={id} className="text-2xl font-semibold text-text-primary mb-4 mt-8 pb-2 border-b border-border-color">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        : '';
      return (
        <h3 id={id} className="text-xl font-semibold text-text-primary mb-3 mt-6">
          {children}
        </h3>
      );
    },
    p: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-text-secondary">{children}</em>,
    code: ({ children, className }) => {
      // Inline code
      if (!className) {
        return (
          <code className="text-syntax-keyword bg-bg-secondary px-1.5 py-0.5 rounded text-md">
            {children}
          </code>
        );
      }
      
      // Code block - classes from language
      return (
        <code className={className}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-code-bg! border border-border-color rounded-lg p-4 overflow-x-auto mb-6 mt-4">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 list-none pl-0">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-6 list-decimal pl-6 text-text-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="relative pl-6 text-text-secondary before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary my-6">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-border-color my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-border-color">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border-color bg-bg-secondary px-4 py-2 text-left font-semibold text-text-primary">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border-color px-4 py-2 text-text-secondary">
        {children}
      </td>
    ),
    ...components,
  };
}
