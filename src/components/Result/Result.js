import React from "react";
import marked from "marked";
const Result = (props) => {
  const input = props.children;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: marked(input) }}></div>
    </>
  );
};
export default Result;
