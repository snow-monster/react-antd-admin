
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '@/core/layouts/Home'
import Login from '@/core/layouts/Login'
import User from '@/views/authority/User'
import Role from '@/views/authority/Role'

function App() {
 
  return (
    <>
      <HashRouter>
          <Routes>
          <Route  path="/"></Route>
            <Route  path="/login" element={<Login />}></Route>
            <Route  path="home" element={<Home />}>
              <Route  path="auth/user" element={<User />}>
              
              </Route>
              <Route  path="auth/role" element={<Role />}>
              
              </Route>
            </Route>
          </Routes>
      </HashRouter>
    </>
  )
}

export default App
