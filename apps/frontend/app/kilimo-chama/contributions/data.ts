// /app/kilimo-chama/contributions/data.ts

export type Member = {
  id: string;
  name: string;
};

export type Contribution = {
  id: string;
  memberId: string;
  amount: number;
  date: string;
  paid: boolean;
};

export const members: Member[] = [
  { id: "1", name: "John Mwangi" },
  { id: "2", name: "Achieng Atieno" },
  { id: "3", name: "Mutiso Kamau" },
];

export let contributions: Contribution[] = [
  { id: "c1", memberId: "1", amount: 500, date: "2025-07-01", paid: true },
  { id: "c2", memberId: "2", amount: 300, date: "2025-07-01", paid: false },
  { id: "c3", memberId: "3", amount: 400, date: "2025-07-01", paid: true },
];
