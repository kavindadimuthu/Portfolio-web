import React from 'react';

export const metadata = {
  title: 'Blog - Kavinda Dewmith',
  description: 'Technical articles and insights from Kavinda Dewmith on web development, programming, and software design',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}