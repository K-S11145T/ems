import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  

  const [user, setuser] = useState(null)
  const [LoginUserdata, setLoginUserdata] = useState(null)
  const [logout, setlogout] = useState(false)
  const [userData , setuserData] = useContext(AuthContext)

  useEffect(() => {
    const LoggedInUser = localStorage.getItem("LoggedInUser")
    if (LoggedInUser) {
      const userData = JSON.parse(LoggedInUser)
      setuser(userData.role)

      setLoginUserdata(userData.data)

    }
  } , [])


  const handleLogout = () => {
    if (user == 'admin' || user == 'employee') {
      setlogout(true)
      setuser(null)
    }

  }

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setuser("admin")
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'admin' }))

    } else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setuser("employee")
        setLoginUserdata(employee)
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    } else {
      alert('Invalid credentials')
    }
  }



  return (
    <>
      <div className='w-full min-h-screen text-white bg-black'>

        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard handleLogout={handleLogout} /> : user == 'employee' ? <EmployeeDashboard handleLogout={handleLogout} data={LoginUserdata} /> : null}
        

      </div>
    </>
  )
}

export default App
