import { useState } from "react";
import HeatmapCell from "../common/HeatmapCell";

export default function TreeRow({ node, level = 0 }) {
  const [expanded, setExpanded] = useState(false);

  const hasChildren =
    node.subCategories?.length > 0 || node.subCategory2?.length > 0;

  const quantities = [];
  const rates = [];

  const collectStats = (n) => {
    if (n.quantity !== undefined) quantities.push(n.quantity);
    if (n.rate !== undefined) rates.push(n.rate);

    if (n.subCategories)
      n.subCategories.forEach((child) => collectStats(child));
    if (n.subCategory2) n.subCategory2.forEach((child) => collectStats(child));
  };
  collectStats(node);

  const minQ = Math.min(...quantities);
  const maxQ = Math.max(...quantities);
  const minR = Math.min(...rates);
  const maxR = Math.max(...rates);

  return (
    <>
      <tr>
        <td style={{ paddingLeft: `${level * 20}px` }}>
          {hasChildren && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ marginRight: "8px" }}
            >
              {expanded ? "−" : "+"}
            </button>
          )}
          {node.category || node.subCategory1 || node.subCategory2 || node.itemCode}
        </td>
        <td>{node.description || ""}</td>
        <td>
          {node.quantity !== undefined ? (
            <HeatmapCell value={node.quantity} min={minQ} max={maxQ} />
          ) : (
            ""
          )}
        </td>
        <td>
          {node.rate !== undefined ? (
            <HeatmapCell value={node.rate} min={minR} max={maxR} />
          ) : (
            ""
          )}
        </td>
      </tr>
      {expanded &&
        (node.subCategories || node.subCategory2)?.map((child, i) => (
          <TreeRow key={i} node={child} level={level + 1} />
        ))}
    </>
  );
}
