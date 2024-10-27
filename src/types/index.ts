export interface Department {
  id: string;
  name: string;
  email: string;
}

export interface Booking {
  id: string;
  departmentId: string;
  hallName: string;
  purpose: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'department';
  departmentId?: string;
}