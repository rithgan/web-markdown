import React from "react";
import marked from "marked";
import DOMpurify from "dompurify";

const Result = (props) => {
  const input = props.children;

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(marked(input)) }}
      ></div>
    </>
  );
};
export default Result;
