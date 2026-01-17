import { useState } from "react";

const data = [
  {
    name: "Aerospace Parts",
    children: [
      {
        name: "Structural Support",
        children: [
          { code: "ITEM-1234", quantity: 20, rate: 40 },
          { code: "ITEM-1235", quantity: 10, rate: 20 },
        ],
      },
      {
        name: "Brackets",
        children: [
          { code: "ITEM-1236", quantity: 30, rate: 10 },
          { code: "ITEM-1237", quantity: 40, rate: 70 },
        ],
      },
    ],
  },
  {
    name: "Precision Components",
    children: [
      {
        name: "Fasteners",
        children: [
          { code: "ITEM-2122", quantity: 30, rate: 50 },
          { code: "ITEM-2123", quantity: 40, rate: 21 },
        ],
      },
    ],
  },
];

export default function TreeTable() {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const renderRows = (nodes, level = 0, parentKey = "") =>
    nodes.map((node, index) => {
      const key = `${parentKey}-${index}`;
      const isParent = !!node.children;

      return (
        <>
          <tr key={key}>
            <td style={{ paddingLeft: `${level * 24}px` }}>
              {isParent && (
                <button onClick={() => toggle(key)}>
                  {expanded[key] ? "−" : "+"}
                </button>
              )}
              {node.name || node.code}
            </td>

            <td>{node.quantity ?? ""}</td>
            <td>{node.rate ? `$${node.rate.toFixed(2)}` : ""}</td>
          </tr>

          {isParent &&
            expanded[key] &&
            renderRows(node.children, level + 1, key)}
        </>
      );
    });

  return (
    <div className="table-wrap problem2">
      <table>
        <thead>
          <tr>
            <th>Category / Sub Category / Item Code</th>
            <th>Quantity</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
}
