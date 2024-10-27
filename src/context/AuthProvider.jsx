import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  setLocalStorage()
  // localStorage.clear()
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const { employees } = getLocalStorage()
    setuserData(employees)

  }, [])


  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
