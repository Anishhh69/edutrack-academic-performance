import StatusBadge from "./StatusBadge";
import "./DataTable.css";

function DataTable({ columns, data }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column) => {
                const value = row[column.key];

                if (column.type === "status") {
                  return (
                    <td key={column.key}>
                      <StatusBadge status={value} />
                    </td>
                  );
                }

                if (column.type === "action") {
                  return (
                    <td key={column.key}>
                      <button
                        className="table-action"
                        onClick={() => column.onClick?.(row)}
                      >
                        {column.label}
                      </button>
                    </td>
                  );
                }

                return (
                  <td key={column.key}>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;