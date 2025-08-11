"use client";

import React, { useState } from "react";
import styles from "./KilimoChama.module.css";
//import type { Member } from '../types/types';

import {
  members as initialMembers,
  contributions,
  loanRequests,
} from "./mockData";
import { Bar } from "react-chartjs-2";
import {
  Users,
  Wallet,
  Banknote,
  CheckCircle,
  Clock10,
  XCircle,
  PlusCircle,
  HandCoins,
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function KilimoChamaPage() {
  const [members, setMembers] = useState(initialMembers);
  const [showModal, setShowModal] = useState(false);
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [loanRequestsState, setLoanRequestsState] = useState(loanRequests);
  const [formData, setFormData] = useState({
    name: "",
    contributions: "",
    loanStatus: "None",
  });
  const [loanForm, setLoanForm] = useState({
    memberId: "",
    amount: "",
  });

  const totalContributions = contributions.reduce(
    (sum, c) => sum + c.amount,
    0
  );
  const totalMembers = members.length;
  const approvedLoans = loanRequestsState.filter(
    (l) => l.status === "Approved"
  ).length;

  const chartData = {
    labels: contributions.map((c) => c.month),
    datasets: [
      {
        label: "Monthly Contributions (KES)",
        data: contributions.map((c) => c.amount),
        backgroundColor: "orange",
      },
    ],
  };

//   const handleAddMember = () => {
//     const newMember = {
//       id: members.length + 1,
//       name: formData.name,
//       contributions: parseFloat(formData.contributions),
//       loanStatus: formData.loanStatus,
//     };
//     setMembers(prev => [
//   ...prev,
//   {
//     id: String(5),
//     name: "John",
//     contributions: 100,
//     loanStatus: "none"
//   } as Member
// ])

//     setFormData({ name: "", contributions: "", loanStatus: "None" });
//     setShowModal(false);
//   };

//   const handleRequestLoan = () => {
//      const member = members.find((m) => m.id === parseInt(loanForm.memberId));
//     if (!member) return;

//     const newLoan = {
//       id: loanRequestsState.length + 1,
//       memberName: member.name,
//       amount: parseFloat(loanForm.amount),
//       status: "Pending",
//     };

//      setLoanRequestsState((prev) => [...prev, newLoan]);
//     setLoanForm({ memberId: "", amount: "" });
//     setShowLoanModal(false);
//   };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌱 Kilimo Chama Dashboard</h1>
      <p className={styles.subtitle}>Manage your community savings and loans</p>
      <Link href="/kilimo-chama/contributions" className="contributions-link">
        Go to Contributions →
      </Link>
      <div className={styles.card2}>
          <Banknote size={24} />
          <span>Approved Loans</span>
          <strong>{approvedLoans}</strong>
        </div>

      <div className={styles.summaryCards}>
        <div className={styles.card}>
          <Users size={24} />
          <span>Total Members</span>
          <strong>{totalMembers}</strong>
        </div>
        <div className={styles.card}>
          <Wallet size={24} />
          <span>Total Savings</span>
          <strong>KES {totalContributions.toLocaleString()}</strong>
        </div>
        <div className={styles.card}>
          <Banknote size={24} />
          <span>Approved Loans</span>
          <strong>{approvedLoans}</strong>
        </div>
      </div>

      <div className={styles.chartSection}>
        <Bar data={chartData} />
      </div>

      <div className={styles.tables}>
        <div className={styles.tableBox}>
          <div className={styles.tableHeader}>
            <h3>👥 Members</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setShowModal(true)}
                className={styles.addBtn}
              >
                <PlusCircle size={16} /> Add Member
              </button>
              <button
                onClick={() => setShowLoanModal(true)}
                className={styles.addBtn}
              >
                <HandCoins size={16} /> Request Loan
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contributions</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>KES {m.contributions}</td>
                  <td>
                    {m.loanStatus === "Approved" && (
                      <CheckCircle color="green" size={16} />
                    )}
                    {m.loanStatus === "Pending" && (
                      <Clock10 color="orange" size={16} />
                    )}
                    {m.loanStatus === "None" && (
                      <XCircle color="gray" size={16} />
                    )}{" "}
                    {m.loanStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.tableBox}>
          <h3>💰 Loan Requests</h3>
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loanRequestsState.map((l) => (
                <tr key={l.id}>
                  <td>{l.memberName}</td>
                  <td>KES {l.amount}</td>
                  <td>{l.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Member Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Add New Member</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Initial Contribution (KES)"
              value={formData.contributions}
              onChange={(e) =>
                setFormData({ ...formData, contributions: e.target.value })
              }
            />
            <select
              value={formData.loanStatus}
              onChange={(e) =>
                setFormData({ ...formData, loanStatus: e.target.value })
              }
            >
              <option value="None">None</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
            <div className={styles.modalActions}>
             {/* <button onClick={handleAddMember}>Add</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>*/}
            </div>
          </div>
        </div>
      )}

      {/* Request Loan Modal */}
      {showLoanModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Request Loan</h2>
            <select
              value={loanForm.memberId}
              onChange={(e) =>
                setLoanForm({ ...loanForm, memberId: e.target.value })
              }
            >
              <option value="">Select Member</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Loan Amount (KES)"
              value={loanForm.amount}
              onChange={(e) =>
                setLoanForm({ ...loanForm, amount: e.target.value })
              }
            />
            <div className={styles.modalActions}>
             {/* <button onClick={handleRequestLoan}>Submit</button>
              <button onClick={() => setShowLoanModal(false)}>Cancel</button>*/} 
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
