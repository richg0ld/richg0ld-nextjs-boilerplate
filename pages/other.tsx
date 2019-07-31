import React from 'react';
import Link from 'next/link';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Other = () => {
    return (
        <div>
            <h2>Other Page</h2>
            <div className="trans-content">
                {"sample.boilerplate"}
            </div>
            <div className="theme-color-comp">
                1234567890
            </div>
            { /*language=SCSS*/ }
            <style jsx>{`
.trans-content {
  color: yellow;
}
          `}</style>
        </div>
    )
};

export default Other
