import React, { useState } from "react";
import marked from "marked";
import DOMpurify from "dompurify";
import ShowHtml from "../ShowHtml";
import styles from "./Result.module.css";

const Result = (props) => {
  const input = props.children;
  const html = DOMpurify.sanitize(marked(input));
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <div>
        <button onClick={handleVisibility}>
          {!visibility ? "</>" : "text"}
        </button>
        {!visibility ? (
          <article
            className={styles.result}
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></article>
        ) : null}

        {visibility ? <ShowHtml input={html} /> : null}
      </div>
    </>
  );
};

export default Result;
