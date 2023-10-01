import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
// import Footer from './components/Footer';
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <div className="outlet">
                <Outlet/>
            </div>
            {/* <Footer/> */}
        </div>
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
                element: <About/>
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
