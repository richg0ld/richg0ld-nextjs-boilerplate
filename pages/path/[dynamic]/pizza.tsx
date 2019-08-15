import React from 'react';
import { useRouter } from 'next/router';
import Base from "../../../components/Base";

const Pizza = () => {
    const router = useRouter();
    return (
        <Base>
            <h2>Pizza Page</h2>
            <h3>dynamic : {router.query.dynamic}</h3>
            { /*language=SCSS*/ }
            <style jsx>{`
          `}</style>
        </Base>
    )
};

export default Pizza
