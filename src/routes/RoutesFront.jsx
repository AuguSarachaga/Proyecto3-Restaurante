import { Routes, Route } from 'react-router-dom'

const RoutesFront = () => {
  return (
    <>
    <Routes>
        <Route path='/'/>
        <Route path='about'/>
        <Route path='Contact'/>
        <Route path='Register'/>
        <Route path='login'/>
        <Route path='user'/>
        <Route path='menu/:id'/>
        <Route path='reservas'/>
        <Route path='admin'/>
        <Route path='gallery'/>
        <Route path='*'/>
    </Routes>
    
    
    
    
    </>
  )
}

export default RoutesFront