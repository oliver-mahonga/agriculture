import React, { useState } from "react";
import styles from "./Contributions.module.css";
import { Contribution, Member } from "./data";
import { v4 as uuid } from "uuid";

type Props = {
  members: Member[];
  onClose: () => void;
  onAdd: (contribution: Contribution) => void;
};

export default function AddContributionModal({ members, onClose, onAdd }: Props) {
  const [memberId, setMemberId] = useState(members[0]?.id || "");
  const [amount, setAmount] = useState(0);
  const [paid, setPaid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      id: uuid(),
      memberId,
      amount,
      paid,
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Add New Contribution</h3>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <label>Member</label>
          <select value={memberId} onChange={(e) => setMemberId(e.target.value)}>
            {members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>

          <label>Amount (Ksh)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />

          <label>Status</label>
          <select value={paid ? "paid" : "unpaid"} onChange={(e) => setPaid(e.target.value === "paid")}>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>

          <div className={styles.modalActions}>
            <button type="submit" className={styles.addButton}>Add</button>
            <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
