import React from 'react';
import { useRouter } from 'next/router';

const Pizza = () => {
    const router = useRouter();
    return (
        <div>
            <h2>Pizza Page</h2>
            <h3>dynamic : {router.query.dynamic}</h3>
            { /*language=SCSS*/ }
            <style jsx>{`
          `}</style>
        </div>
    )
};

export default Pizza
