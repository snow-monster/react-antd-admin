import { Navigate, RouteObject } from 'react-router-dom'
import Home from '../layouts/Home'
import Login from '../layouts/Login'
import NotMatch from '../layouts/NotMatch'
const views = import.meta.glob('@/views/**/*.routes.tsx')
const routes: RouteObject []= [
    {
        path: 'home',
        element: <Home />,
        children: []
    },
    {
        path: '*',
        element: <NotMatch />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Navigate to='home' />
    },
]
for (const path in views) {
    views[path]().then((Module) => {
        routes[0].children.push(...(Module.default || []))
    })
}
export default routes