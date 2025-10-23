import { Route, Routes } from 'react-router-dom'
import './App.css'

// Components
import Header from './components/Header'
import DoctorProfile from './components/DoctorProfile'
import Footer from './components/Footer'
import ReservationForm from './components/ReservationForm'

// Pages
import Home from './pages/home'
import Reservation from './pages/Reservation'
import ContactUs from './pages/Contact'
import AboutCompany from './pages/About'
import Services from './pages/Services'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/About" element={<AboutCompany />} />
        <Route path="/Services" element={<Services />} />


        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/reservation-form" element={<ReservationForm />} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
