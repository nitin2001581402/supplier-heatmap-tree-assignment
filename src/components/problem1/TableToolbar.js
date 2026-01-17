export default function TableToolbar({
  columns,
  hidden,
  toggleHide,
  freezeUntil,
  setFreezeUntil,
  sortCol,
  setSortCol,
  sortDir,
  setSortDir,
}) {
  return (
    <div
      className="toolbar"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 20,
        alignItems: "center",
        background: "#fff",
        padding: 12,
        borderRadius: 6,
        border: "1px solid #ddd",
        justifyContent: "space-between",
      }}
    >
      <label>
        Freeze until:
        <select onChange={(e) => setFreezeUntil(e.target.value)} defaultValue="">
          <option value="">None</option>
          {columns.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", flexGrow: 1 }}>
        {columns.map((c) => (
          <label key={c} style={{ userSelect: "none" }}>
            <input
              type="checkbox"
              checked={!hidden.includes(c)}
              onChange={() => toggleHide(c)}
            />
            {c}
          </label>
        ))}
      </div>

      <label>
        Sort column:
        <select onChange={(e) => setSortCol(e.target.value)} defaultValue="">
          <option value="">None</option>
          {columns.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label>
        Direction:
        <select onChange={(e) => setSortDir(e.target.value)} defaultValue="asc">
          <option value="asc">Ascending ↑</option>
          <option value="desc">Descending ↓</option>
        </select>
      </label>
    </div>
  );
}
