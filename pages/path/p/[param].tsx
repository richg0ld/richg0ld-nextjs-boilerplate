import React from 'react';
import { useRouter } from 'next/router';

const Param = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>Param Page</h2>
            <h3>param : {router.query.param}</h3>
            { /*language=SCSS*/ }
            <style jsx>{`
          `}</style>
        </div>
    )
};

export default Param
