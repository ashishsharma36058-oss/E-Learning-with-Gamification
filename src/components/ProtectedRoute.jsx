import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isLoggedIn =
    !!localStorage.getItem('g_access') ||
    !!localStorage.getItem('token') ||
    !!localStorage.getItem('user')

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}
