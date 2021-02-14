import React from "react";
import marked from "marked";
import DOMpurify from "dompurify";
import styles from "./Result.module.css";

const Result = (props) => {
  const input = props.children;

  return (
    <>
      <article
        className={styles.result}
        dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(marked(input)) }}
      ></article>
    </>
  );
};
export default Result;
