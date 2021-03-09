import React from "react";

import "./Example.css";

const Example = () => {
  return (
    <>
      <header>
        <h1>Example for Max-Min Width</h1>
      </header>
      <main
        style={{
          backgroundColor: "lightskyblue",
          padding: "1rem",
          // maxWidth: "1000px"
        }}
      >
        <p
          style={{
            margin: "1rem auto",
            backgroundColor: "white",
            // maxWidth: "800px"
          }}
        >
          Incididunt do excepteur dolore adipisicing ad nulla minim duis officia
          aliqua nostrud. Deserunt laborum ex nostrud do proident aliqua irure
          occaecat officia. Cillum est nulla consectetur sit aute quis dolore
          aliquip duis aliqua irure. Ea nulla ea nisi commodo Lorem. Id
          incididunt velit adipisicing laboris cupidatat pariatur irure elit.
          Cupidatat qui dolore cupidatat sint voluptate Lorem.
        </p>
        <p
          style={{
            margin: "1rem auto",
            backgroundColor: "white",
            width: "600px"
          }}
        >
          Ad proident nulla esse Lorem magna incididunt excepteur. Laborum quis
          do consequat enim amet esse duis enim dolore sint incididunt ex. Non
          culpa consequat nisi nulla proident sint dolore irure cillum aute.
          Duis ipsum excepteur irure ullamco velit velit enim. Exercitation id
          eu est sit nisi. Commodo ad adipisicing amet magna commodo aliquip.
        </p>
      </main>
    </>
  );
};

export default Example;
