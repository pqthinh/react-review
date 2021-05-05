import React from "react";

const About = () => (
  <>
    <main>
      <article>
        <header>About</header>
        <h2>Auth: <code>Pham Quang Thinh</code></h2>

        <div className="content">
          This is web demo using nextjs + react
        </div>
      </article>

      <br/>
      <button onClick={()=> {window.location.pathname = "/" }}>Tro ve Home</button>
    </main>
    <style jsx>{`
      main {
        margin: auto;
        padding: auto;
        max-width: 1200px;
        text-align: center;
      }
      .content {
        color: violet;
      }

      button {
        border: none;
        background: violet;
        color: #fff;
        padding: 10px 20px;
        min-width: 200px;
        curso: pointer;
      }
    `}</style>
  </>
);

export default About;
