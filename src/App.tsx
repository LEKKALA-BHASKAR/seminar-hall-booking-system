import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookingCard from './components/BookingCard';
import { Building2, CalendarPlus, Users, History } from 'lucide-react';

const demoBooking = {
  id: '1',
  departmentId: '1',
  hallName: 'Main Auditorium',
  purpose: 'Annual Technical Symposium',
  startTime: '2024-03-20T09:00:00',
  endTime: '2024-03-20T17:00:00',
  status: 'pending' as const,
  createdAt: '2024-03-15T10:30:00'
};

function App() {
  const [role] = useState<'admin' | 'department'>('admin');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar role={role} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your seminar halls.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Building2 className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Halls</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-sm text-gray-600">2 currently available</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-green-50 rounded-lg">
                <CalendarPlus className="h-7 w-7 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Bookings</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-sm text-gray-600">3 pending approvals</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Departments</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-sm text-gray-600">5 active this week</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-purple-50 rounded-lg">
                <History className="h-7 w-7 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Past Bookings</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-sm text-gray-600">24 this month</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Bookings</h2>
              <p className="text-gray-600 mt-1">Latest booking requests and their status</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2">
              <CalendarPlus className="h-5 w-5" />
              New Booking
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BookingCard booking={demoBooking} />
            <BookingCard booking={{...demoBooking, id: '2', status: 'approved', hallName: 'Conference Room A'}} />
            <BookingCard booking={{...demoBooking, id: '3', status: 'rejected', hallName: 'Seminar Hall B'}} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;