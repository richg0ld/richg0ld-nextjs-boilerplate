import React from 'react';
import { useRouter } from 'next/router';
import Base from "../../../components/Base";

const Pizza = props => {
    const router = useRouter();
    return (
        <Base {...props}>
            <h2> I also like {router.query.dynamic}</h2>
        </Base>
    )
};

export default Pizza
