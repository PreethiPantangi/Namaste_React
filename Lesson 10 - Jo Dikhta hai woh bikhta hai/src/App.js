import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="ml-52 mr-48">
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
