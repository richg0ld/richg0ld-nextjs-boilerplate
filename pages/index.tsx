import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch, useStore } from "react-redux";
import { getSample, GET_SAMPLE } from "../modules/sample";
import _ from "lodash";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const Index = () => {
  const sample = useSelector(state => state.sample, []);
  const loading = useSelector(state => state.loading, []);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSample());
  // }, []);

  return (
    <div>
      <h2>Index Page</h2>
      <div>.env : {process.env.API_URL}</div>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Sample Api</h2>
      <div>
        <strong>Status code</strong> : {sample.status}
      </div>
      <div>
        <strong>Loading</strong> : {JSON.stringify(loading[GET_SAMPLE])}
      </div>
      <div>
        <strong>Data</strong> : {JSON.stringify(sample.data)}
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
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
  );
};

Index.getInitialProps = async ({ store }) => {
  console.log("%%%", store.getState().sample.data);
  if (_.isEmpty(store.getState().sample.data)) {
    await store.dispatch(getSample());
  }
};

export default Index;
