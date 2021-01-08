import TableForm from "./TableForm";
import TableRow from "./TableRow";
import { TableContext } from "./Table";
import { useContext } from "react";

export default function TableBody({ contents }) {
  const { onDelete } = useContext(TableContext);

  return (
    <tbody>
      {contents.map((row, i) => (
        <TableRow entry={row} key={i} onDelete={() => onDelete(i)} />
      ))}
      <TableForm />
    </tbody>
  );
}
