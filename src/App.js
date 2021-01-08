/**@jsxImportSource @emotion/react*/

import Table from "./components/Table";

import { css } from "@emotion/react";
import { useState } from "react";

const fields = ["Name", "Job"];

const tableWrapperCss = css`
  padding: 50px;
  border: 2px solid #32324a;
  border-radius: 20px;
  margin: 10px;
  max-width: 600px;
  text-align: center;
  margin: auto;
  background: #1a1a2b;
`;

const titleCss = css`
  text-align: left;
  margin-bottom: 5px;
  font-weight: 600;
`;

const dividerCss = css`
  border-color: #7c7ea5;
`;

function App() {
  const [people, setPeople] = useState([]);

  function handleAdd(fieldContents) {
    let person = {};
    for (let key in fieldContents) {
      person[key.toLowerCase()] = fieldContents[key];
    }
    setPeople([...people, person]);
  }

  function handleDelete(index) {
    setPeople((p) => p.filter((_, i) => i !== index));
  }

  return (
    <div css={tableWrapperCss}>
      <h1 css={titleCss}>Work Contacts</h1>
      <hr css={dividerCss} />
      <Table
        onAdd={handleAdd}
        onDelete={handleDelete}
        fields={fields}
        contents={people}
      />
    </div>
  );
}

export default App;
