// /app/kilimo-chama/contributions/page.tsx

import React from "react";
import ContributionTable from "./ContributionTable";

export default function ContributionsPage() {
  return (
    <main style={{ padding: "2rem", background: "#0f1f0f", minHeight: "100vh" }}>
      <ContributionTable />
    </main>
  );
}
