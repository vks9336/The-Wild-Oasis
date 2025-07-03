import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashBoard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Booking from './pages/Booking';
import Checkin from './pages/Checkin';
import ProtectedRoute from './ui/ProtectedRoute';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:bookingId" element={<Booking />} />
          <Route path="checkin/:bookingId" element={<Checkin />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
