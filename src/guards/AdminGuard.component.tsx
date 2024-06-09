import { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const AdminGuard = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handlePromptPassword = () => {
    const enteredPassword = window.prompt('Enter admin password:')
    if (enteredPassword === process.env.REACT_APP_ADMIN_PASSWORD) {
      setLoggedIn(true)
    } else {
      navigate('/admin')
    }
  }

  if (!loggedIn) {
    handlePromptPassword()
  }

  return loggedIn ? <Outlet /> : <Navigate to={'/admin'} />
}

export default AdminGuard
