import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import MenuPage from '../pages/MenuPage'
import ReservasPage from '../pages/ReservasPage'
import AdminPage from '../pages/AdminPage'
import GalleryPage from '../pages/GalleryPage'
import ErrorPage from '../pages/ErrorPage'

const RoutesFront = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='user' element={<UserPage />}/>
        <Route path='menu' element={<MenuPage />}/>
        <Route path='reservas' element={<ReservasPage />}/>
        <Route path='admin' element={<AdminPage />}/>
        <Route path='gallery' element={<GalleryPage />}/>
        <Route path='*' element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default RoutesFront