import React from "react";

export default function Navigation({ selected, setSelected }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={() => setSelected("problem1")}
        disabled={selected === "problem1"}
        style={{ marginRight: 10, padding: "6px 12px" }}
      >
        Supplier Heatmap (Problem 1)
      </button>
      <button
        onClick={() => setSelected("problem2")}
        disabled={selected === "problem2"}
        style={{ padding: "6px 12px" }}
      >
        Hierarchical Tree (Problem 2)
      </button>
    </div>
  );
}
