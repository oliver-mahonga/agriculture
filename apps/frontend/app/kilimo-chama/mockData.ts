// app/kilimo-chama/mockData.ts

export interface Member {
  id: string
  name: string
  contributions: number
  loanStatus: 'Approved' | 'Pending' | 'None'
}

export interface Contribution {
  month: string
  amount: number
}

export interface LoanRequest {
  id: string
  memberName: string
  amount: number
  status: 'Approved' | 'Pending' | 'Rejected'
}

export const members: Member[] = [
  { id: '1', name: 'John Mwangi', contributions: 3000, loanStatus: 'Approved' },
  { id: '2', name: 'Aisha Hassan', contributions: 2500, loanStatus: 'Pending' },
  { id: '3', name: 'Peter Otieno', contributions: 1500, loanStatus: 'None' },
  { id: '4', name: 'Mary Njeri', contributions: 2000, loanStatus: 'Approved' },
  { id: '5', name: 'Ali Yusuf', contributions: 2800, loanStatus: 'None' },
]

export const contributions: Contribution[] = [
  { month: 'January', amount: 8000 },
  { month: 'February', amount: 9500 },
  { month: 'March', amount: 10500 },
  { month: 'April', amount: 9200 },
  { month: 'May', amount: 11000 },
  { month: 'June', amount: 10300 },
]

export const loanRequests: LoanRequest[] = [
  { id: '1', memberName: 'Aisha Hassan', amount: 5000, status: 'Pending' },
  { id: '2', memberName: 'Peter Otieno', amount: 3000, status: 'Rejected' },
  { id: '3', memberName: 'Mary Njeri', amount: 4500, status: 'Approved' },
]
