import About from '../pages/About'
import Home from '../pages/Home'
import Buttons from '../pages/Buttons'
import { Navigate } from 'react-router'
const routes = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/buttons',
        element:<Buttons/>
    },
    {
        path:'/',
        element:<Navigate to="buttons"/>
    },
]
export default routes;