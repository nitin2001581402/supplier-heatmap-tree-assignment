import Papa from "papaparse";

export default function FileUpload({ onLoad }) {
  const handleFile = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (res) => onLoad(res.data),
    });
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}
