/**@jsxImportSource @emotion/react*/
import { css } from "@emotion/react";

const rowCss = css`
  &:first-child {
    border-top: none;
  }

  &:nth-child(odd) {
    background: #2d2e4a;
  }
  border-top: 1px solid #6f7092;
  padding: 20px;
`;

const colCss = css`
  padding: 10px 10px;
  text-align: left;
`;

const deleteButtonCss = css`
  background: red;
`;

export default function TableRow({ entry, onDelete }) {
  return (
    <tr css={rowCss}>
      {Object.values(entry).map((val, i) => (
        <td key={i} css={colCss}>
          {val}
        </td>
      ))}
      <td>
        <button css={deleteButtonCss} onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
