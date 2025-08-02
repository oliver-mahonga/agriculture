"use client";
import React, { useState } from "react";
import styles from "./Contributions.module.css";
import {
  members,
  contributions as mockContributions,
  Contribution,
} from "./data";
import AddContributionModal from "./AddContributionModal";
//import AddContributionModal from "./AddContributionModal";

export default function ContributionTable() {
  const [contributions, setContributions] =
    useState<Contribution[]>(mockContributions);
  const [showModal, setShowModal] = useState(false);

  const getMemberName = (id: string) =>
    members.find((m) => m.id === id)?.name || "Unknown";

  const togglePaid = (id: string) => {
    setContributions((prev) =>
      prev.map((c) => (c.id === id ? { ...c, paid: !c.paid } : c))
    );
  };

  const addContribution = (contribution: Contribution) => {
    setContributions((prev) => [...prev, contribution]);
    setShowModal(false);
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}> Member Contributions</h2>
        <button className={styles.addButton} onClick={() => setShowModal(true)}>
          + New Contribution
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Member</th>
            <th>Amount (Ksh)</th>
            <th>Date</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((contrib) => (
            <tr key={contrib.id}>
              <td>{getMemberName(contrib.memberId)}</td>
              <td>{contrib.amount}</td>
              <td>{contrib.date}</td>
              <td className={contrib.paid ? styles.paid : styles.unpaid}>
                {contrib.paid ? "Paid" : "Pending"}
              </td>
              <td>
                <button
                  className={styles.toggleButton}
                  onClick={() => togglePaid(contrib.id)}
                >
                  Mark as {contrib.paid ? "Unpaid" : "Paid"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <AddContributionModal
          members={members}
          onClose={() => setShowModal(false)}
          onAdd={addContribution}
        />
      )}
    </div>
  );
}
