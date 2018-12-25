import api from '../../api';

export const rejectLoan = (loanId) =>
  api.post(`/admin/loans/${loanId}/reject`)
      .then((response) => response.data);

export const approveLoan = (loanId) =>
  api.post(`/admin/loans/${loanId}/approve`)
     .then((response) => response.data);

export const getPendingLoans = () =>
  api.get('/admin/loans/pending')
     .then((response) => response.data);
