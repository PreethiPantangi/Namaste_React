import React, { lazy, StrictMode, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {

    // authentication
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: 'Preethi Pantangi'
        }
        setUserName(data.name);
    }, [])
 
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <Header/>
                <div className="ml-52 mr-48">
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: '/cart',
                element: <Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>
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
