import { heatColor } from "../../utils/heatmap";
import { percentDiff } from "../../utils/math";

export default function HeatmapCell({ value, min, max, estimated }) {
  const dollarFormatted = `$${value.toFixed(2)}`;
  const percentage = estimated !== undefined ? Number(percentDiff(estimated, value)) : null;

  let arrow = "";
  let color = "#000";

  if (percentage > 0) {
    arrow = "↑";
    color = "red";
  } else if (percentage < 0) {
    arrow = "↓";
    color = "green";
  } else {
    arrow = "";
    color = "black";
  }

  return (
    <div
      className="heat-cell"
      style={{
        background: heatColor(value, min, max),
        padding: "8px 12px",
        borderRadius: "6px",
        fontWeight: "600",
        textAlign: "center",
        color: "#000",
        minWidth: "70px",
      }}
    >
      <div style={{ fontSize: "16px" }}>{dollarFormatted}</div>
      {percentage !== null && (
        <small
          style={{
            fontSize: "14px",
            marginTop: "6px",
            display: "block",
            color,
            fontWeight: "700",
            letterSpacing: "0.02em",
          }}
        >
          {arrow} {Math.abs(percentage).toFixed(1)}%
        </small>
      )}
    </div>
  );
}
