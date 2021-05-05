import React from "react";
import Link from "next/link";
import styles from "../styles/globals";
import common from '../styles/common'

const Home = () => {
  const [state, setState] = React.useState(0);
  return (
    <>
      <main>
        <h1>Hello from Preact</h1>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>Increment</button>
        <br/>
        <Link href="/about">
          <a>About</a>
        </Link>
      </main>
      {/* <style jsx>{styles}</style> */}
      <style jsx>{`
        main {
          background: ${common.colors.background};
          color: ${common.colors.text};
          font-family: ${common.fontFamily.sansSerif};
        }
        button {
          background: ${common.button.background};
          border: ${common.button.border}
          color: ${common.button.green}
        }
      `}</style>
    </>
  );
};

export default Home;
