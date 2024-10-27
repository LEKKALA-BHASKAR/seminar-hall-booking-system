const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchBookings() {
  const response = await fetch(`${API_BASE_URL}/bookings`);
  if (!response.ok) throw new Error('Failed to fetch bookings');
  return response.json();
}

export async function createBooking(bookingData: any) {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  if (!response.ok) throw new Error('Failed to create booking');
  return response.json();
}

export async function updateBookingStatus(id: string, status: string) {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}/status?status=${status}`, {
    method: 'PUT',
  });
  if (!response.ok) throw new Error('Failed to update booking status');
  return response.json();
}