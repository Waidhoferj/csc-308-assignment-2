/**@jsxImportSource @emotion/react*/

import { css } from "@emotion/react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { createContext } from "react";
const noop = () => null;

// This isn't really necessary. I could have passed all of these as props, but I wanted to learn about React Context.
export const TableContext = createContext({
  onAdd: noop,
  onDelete: noop,
  fields: [],
});

const tableCss = css`
  border-spacing: 15px 10px;
  border-collapse: collapse;
  margin: 20px 10px;
`;

export default function Table({ onAdd, onDelete, fields, contents }) {
  return (
    <TableContext.Provider value={{ onAdd, onDelete, fields }}>
      <table css={tableCss}>
        <TableHeader fields={fields} />
        <TableBody contents={contents} />
      </table>
    </TableContext.Provider>
  );
}
