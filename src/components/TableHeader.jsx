/**@jsxImportSource @emotion/react*/
import { css } from "@emotion/react";

const headerCss = css`
  padding: 10px;
  border-bottom: 2px solid #7c7ea5;
`;
const rowCSS = css``;
const colCss = css`
  margin: 0 10px;
  text-align: left;
`;

const titleCase = (str) => str[0].toUpperCase() + str.slice(1);

export default function TableHeader({ fields }) {
  return (
    <thead css={headerCss}>
      <tr css={rowCSS}>
        {fields.map((title) => (
          <th key={title} css={colCss}>
            {titleCase(title)}
          </th>
        ))}

        <th css={colCss}>Options</th>
      </tr>
    </thead>
  );
}
