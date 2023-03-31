
import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, useRoutes } from 'react-router-dom'
import Home from '@/core/layouts/Home'
import Login from '@/core/layouts/Login'
import NotMatch from '@/core/layouts/NotMatch'
import User from '@/views/authority/User'
import Role from '@/views/authority/Role'

import routes from './router'


console.log('routes', routes)



function AppRoutes () {
  const element = useRoutes(routes)
  // TODO 初始加载的时候，犹豫是动态导入的路由，存在异步
  const [pending, setRoutesPending] = useState(true)
  useEffect(() => {
   setTimeout(() => {
    setRoutesPending(false)
   }, 300);
  }, [])
  return (
    pending ? null:
    <>{element}</> 
  )
}
function App() {
 
  return (
    <>
      <HashRouter>
        <AppRoutes />
          {/* <Routes>
           
            <Route  path="/"></Route>
            <Route  path="/login" element={<Login />}></Route>
            <Route  path="home" element={<Home />}>
              <Route  path="auth/user" element={<User />}>
              
              </Route>
              <Route  path="auth/role" element={<Role />}>
              
              </Route>
            </Route>
            <Route  path='*' element={<NotMatch />}></Route>
          </Routes> */}

      </HashRouter>
    </>
  )
}

export default App
