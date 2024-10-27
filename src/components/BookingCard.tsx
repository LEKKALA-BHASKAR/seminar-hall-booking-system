import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle, Clock3, MapPin } from 'lucide-react';
import type { Booking } from '../types';

const statusConfig = {
  pending: {
    className: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    icon: Clock3,
    iconColor: 'text-yellow-600'
  },
  approved: {
    className: 'bg-green-50 text-green-800 border-green-200',
    icon: CheckCircle,
    iconColor: 'text-green-600'
  },
  rejected: {
    className: 'bg-red-50 text-red-800 border-red-200',
    icon: XCircle,
    iconColor: 'text-red-600'
  }
};

const StatusBadge = ({ status }: { status: Booking['status'] }) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1.5 ${config.className}`}>
      <Icon className={`h-4 w-4 ${config.iconColor}`} />
      {status}
    </span>
  );
};

export default function BookingCard({ booking }: { booking: Booking }) {
  const startDate = new Date(booking.startTime);
  const endDate = new Date(booking.endTime);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">{booking.hallName}</h3>
          </div>
          <StatusBadge status={booking.status} />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-3 text-gray-400" />
          <span className="font-medium">{startDate.toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-3 text-gray-400" />
          <span>
            {startDate.toLocaleTimeString('en-US', { 
              hour: '2-digit',
              minute: '2-digit'
            })} - {endDate.toLocaleTimeString('en-US', { 
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-700 text-sm">{booking.purpose}</p>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Requested {new Date(booking.createdAt).toLocaleDateString()}
        </span>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}