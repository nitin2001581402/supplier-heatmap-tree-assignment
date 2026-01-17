import { useMemo, useState } from "react";
import HeatmapCell from "../common/HeatmapCell";
import TableToolbar from "./TableToolbar";

export default function SupplierTable({ data, onReset }) {
  const columns = Object.keys(data[0]);
  const supplierCols = columns.filter((c) => c.includes("Supplier"));

  const [hidden, setHidden] = useState([]);
  const [freezeUntil, setFreezeUntil] = useState("");
  const [sortCol, setSortCol] = useState("");
  const [sortDir, setSortDir] = useState("asc");

  const toggleHide = (c) =>
    setHidden((h) => (h.includes(c) ? h.filter((x) => x !== c) : [...h, c]));

  const normalizedData = useMemo(() => {
    return data.map((row) => {
      const r = { ...row };
      Object.keys(r).forEach((k) => {
        if (!isNaN(r[k])) r[k] = Number(r[k]);
      });
      return r;
    });
  }, [data]);

  const sortedData = useMemo(() => {
    if (!sortCol) return normalizedData;

    return [...normalizedData].sort((a, b) => {
      const v1 = a[sortCol];
      const v2 = b[sortCol];

      if (typeof v1 === "number" && typeof v2 === "number") {
        return sortDir === "asc" ? v1 - v2 : v2 - v1;
      }

      return sortDir === "asc"
        ? String(v1).localeCompare(String(v2))
        : String(v2).localeCompare(String(v1));
    });
  }, [normalizedData, sortCol, sortDir]);

  const freezeIndex = freezeUntil ? columns.indexOf(freezeUntil) : -1;

  return (
    <>
      <button onClick={onReset} style={{ marginBottom: "10px" }}>
        Upload New CSV
      </button>

      <TableToolbar
        columns={columns}
        hidden={hidden}
        toggleHide={toggleHide}
        freezeUntil={freezeUntil}
        setFreezeUntil={setFreezeUntil}
        sortCol={sortCol}
        setSortCol={setSortCol}
        sortDir={sortDir}
        setSortDir={setSortDir}
      />

      <div className="table-wrap problem1">
        <table>
          <thead>
            <tr>
              {columns.map(
                (c, i) =>
                  !hidden.includes(c) && (
                    <th
                      key={c}
                      className={i <= freezeIndex ? "sticky" : ""}
                      style={{ left: i * 160 }}
                    >
                      {c}
                    </th>
                  )
              )}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((row, i) => {
              const values = supplierCols.map((c) => row[c]);
              const min = Math.min(...values);
              const max = Math.max(...values);

              return (
                <tr key={i}>
                  {columns.map(
                    (c, j) =>
                      !hidden.includes(c) && (
                        <td
                          key={c}
                          className={j <= freezeIndex ? "sticky" : ""}
                          style={{ left: j * 160 }}
                        >
                          {supplierCols.includes(c) ? (
                            <HeatmapCell
                              value={row[c]}
                              min={min}
                              max={max}
                              estimated={row["Estimated Rate"]}
                            />
                          ) : c === "Estimated Rate" ? (
                          `$${row[c].toFixed(2)}`
                         ) : (
                          row[c]
                         )
                         }
                        </td>
                      )
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
