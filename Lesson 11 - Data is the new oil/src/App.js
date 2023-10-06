import React, { lazy, StrictMode, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';


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
        <StrictMode>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                {/* <UserContext.Provider value={{loggedInUser: 'Abhishek Bedarkar'}}> */}
                    <Header/>
                {/* </UserContext.Provider> */}
                <div className="ml-52 mr-48">
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </StrictMode>
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
