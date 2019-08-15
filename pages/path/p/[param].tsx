import React from 'react';
import { useRouter } from 'next/router';
import Base from "../../../components/Base";

const Param = () => {
    const router = useRouter();
    return (
        <Base>
            <h2>Param Page</h2>
            <h3>param : {router.query.param}</h3>
            { /*language=SCSS*/ }
            <style jsx>{`
          `}</style>
        </Base>
    )
};

export default Param
