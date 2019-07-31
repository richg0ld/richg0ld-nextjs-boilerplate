import React from 'react';
import Link from 'next/link';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Index = () => {
    return (
        <div>
            <h2>Index Page</h2>
            <ul>
                {getPosts().map(post => (
                    <li key={post.id}>
                        <Link href="/p/[id]" as={`/p/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            { /*language=SCSS*/ }
            <style jsx>{`
            h1,
            a {
              font-family: 'Arial';
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
          `}</style>
        </div>
    )
};

export default Index
