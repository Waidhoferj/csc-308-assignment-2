/**@jsxImportSource @emotion/react*/
import { css } from "@emotion/react";
import { useContext, useState, useRef } from "react";
import { TableContext } from "./Table";

const isEmpty = /^\W*$/;

const inputColCss = css`
  padding: 10px 0;
`;

const submitButtonCss = css`
  background: green;
  font-size: 17px;
`;

export default function TableForm() {
  const { onAdd, fields } = useContext(TableContext);

  const firstFieldRef = useRef(null);

  function createFields() {
    return fields.reduce((fieldsObj, field) => {
      fieldsObj[field] = "";
      return fieldsObj;
    }, {});
  }
  const [fieldContents, setFieldContents] = useState(createFields());
  const [showErrors, setShowErrors] = useState(false);

  function handleSubmit(e) {
    if (Object.values(fieldContents).some((f) => isEmpty.test(f)))
      return setShowErrors(true);
    setFieldContents(createFields());
    onAdd(fieldContents);
    setShowErrors(false);
    firstFieldRef.current?.focus();
  }

  const inputFields = fields.map((field, i) => {
    const onFieldChange = (e) =>
      setFieldContents((contents) => ({
        ...contents,
        [field]: e.target.value,
      }));

    const errorStyles =
      showErrors && isEmpty.test(fieldContents[field])
        ? { borderColor: "red" }
        : {};

    return (
      <td css={inputColCss}>
        <input
          type="text"
          ref={i == 0 ? firstFieldRef : null}
          value={fieldContents[field]}
          key={field}
          onInput={onFieldChange}
          placeholder={`Enter ${field}`}
          style={errorStyles}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        />
      </td>
    );
  });

  return (
    <>
      <tr>{inputFields}</tr>
      <tr>
        <td>
          <button css={submitButtonCss} onClick={handleSubmit} type="submit">
            Create Contact
          </button>
        </td>
      </tr>
    </>
  );
}
