import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* General Pages */
import UserLogin from './pages/user/login/UserLogin.jsx'
import AdminLogin from './pages/admin/login/AdminLogin.jsx'
import TruckerLogin from './pages/trucker/login/TruckerLogin.jsx'
import UserRegister from './pages/user/register/UserRegister.jsx'
import TruckerRegister from './pages/trucker/register/TruckerRegister.jsx'
import LogoutPage from './pages/LogoutPage.jsx'

/* User Pages */
import UserLayout from './components/layout/UserLayout.jsx'
import LandingPage from './pages/user/landing/LandingPage.jsx'
import ProfilePage from './pages/user/profile/UserProfile.jsx'
import ServiceChoicesPage from './pages/user/services/ServiceChoices.jsx'
import SelectedServicePage from './pages/user/services/SelectedServiceChoice.jsx'
import BookingFormPage from './pages/user/services/BookingForm.jsx'
import BookingConfirmPage from './pages/user/services/BookingConfirmation.jsx'
import UserBookingsPage from './pages/user/bookings/UserBookings.jsx'
import UserBookingDetailsPage from './pages/user/bookings/UserBookingDetails.jsx'

import TruckerLayout from './components/layout/TruckerLayout.jsx'
import TruckerDashboard from './pages/trucker/dashboard/Dashboard.jsx'
import BookingsPage from './pages/trucker/bookingManager/BookingManager.jsx'
import AssetsPage from './pages/trucker/assetManager/AssetManager.jsx'
import PaymentsPage from './pages/trucker/paymentManager/PaymentsManager.jsx'
import TruckerSettings from './pages/trucker/settings/TruckerSettings.jsx'

import AdminLayout from './components/layout/AdminLayout.jsx'
import AdminDashboard from './pages/admin/admindashboard/AdminDashboard.jsx'
import AccountsLogsPage from './pages/admin/accountlogs/AdminAccountsLogs.jsx'
import AdminVerificationPage from './pages/admin/verification/AdminVerification.jsx'
import AdminBookingLogsPage from './pages/admin/bookinglogs/AdminBookingLogs.jsx'
import AdminSettings from './pages/admin/settings/AdminSettings.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Pages */}
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/trkrlogin" element={<TruckerLogin />} />
        <Route path="/adlogin" element={<AdminLogin />} />
        <Route path="/usregister" element={<UserRegister />} />
        <Route path="/trkregister" element={<TruckerRegister />} />
        <Route path="/logout" element={<LogoutPage />} />

        {/* Layouts */}
        <Route path="/" element={<UserLayout />} >
          <Route index element={<LandingPage />} />
          <Route path="/userprofile" element={<ProfilePage />} />
          <Route path="/services" element={<ServiceChoicesPage />} />
          <Route path="/services/choice/view" element={<SelectedServicePage />} />
          <Route path="/services/choice/book" element={<BookingFormPage />} />
          <Route path="/services/choice/book/confirm" element={<BookingConfirmPage />} />
          <Route path="/userbookings" element={<UserBookingsPage />} />
          <Route path="/userbookings/booking/view" element={<UserBookingDetailsPage />} />
        </Route>
        
        <Route path="/trucker" element={<TruckerLayout />}>
          <Route index path="truckerdash" element={<TruckerDashboard />} />
          <Route path="truckerbookings" element={<BookingsPage />} />
          <Route path="truckerassets" element={<AssetsPage />} />
          <Route path="truckerpayments" element={<PaymentsPage />} />
          <Route path="truckersettings" element={<TruckerSettings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;