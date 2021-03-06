import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result/Result.js";

function App() {
  const [value, setValue] = useState("# markdown preview");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={value}
          onChange={handleChange}
        ></textarea>
        <Result>{value}</Result>
      </section>
    </main>
  );
}

export default App;
