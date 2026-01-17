import React, { useState } from "react";
import Navigation from "./components/Navigation";

// Problem 1 components
import FileUpload from "./components/problem1/FileUpload";
import SupplierTable from "./components/problem1/SupplierTable";

// Problem 2 components
import TreeTable from "./components/problem2/TreeTable";
import sampleData from "./data/sampleData";

export default function App() {
  const [selectedProblem, setSelectedProblem] = useState("problem1");
  const [supplierData, setSupplierData] = useState(null);

  return (
   <div className="app" style={{ padding: 20 }}>
      <h1>Combined Assignment App</h1>
      <Navigation selected={selectedProblem} setSelected={setSelectedProblem} />

      {selectedProblem === "problem1" && (
        <>
          {!supplierData ? (
            <FileUpload onLoad={setSupplierData} />
          ) : (
            <SupplierTable data={supplierData} onReset={() => setSupplierData(null)} />
          )}
        </>
      )}

      {selectedProblem === "problem2" && <TreeTable data={sampleData} />}
    </div>
  );
}
