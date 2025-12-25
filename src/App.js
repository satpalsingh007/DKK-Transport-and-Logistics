import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import OurCompany from "./components/OurCompany";
import OurCommitment from "./components/OurCommitment";
import RoadFreight from "./components/RoadFreight";
import ExpressDelivery from "./components/ExpressDelivery";
import StorageWarehouse from "./components/StorageWarehouse";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
const App = () => {
  return(
   <>
    <Helmet>
                <title>DKK Transport & Logistics</title>
                <meta name="description" content="DKK Transport & Logistics" />
                <meta name="keywords" content="transport, logistics, freight, delivery" />
      </Helmet>
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />, // This is the main layout component
        children: [
            { path: "/", element: <Homepage /> },
            { path: "our-company", element: <OurCompany /> },
            { path: "our-commitment", element: <OurCommitment /> },
            { path: "road-freight", element: <RoadFreight /> },
            { path: "express-delivery", element: <ExpressDelivery /> },
            { path: "storage-warehouse", element: <StorageWarehouse /> },
            { path: "faq", element: <Faq /> },
            { path: "contact-us", element: <ContactUs /> },

            
        ]
    }
]);

// Rendering the router to the DOM
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <RouterProvider router={appRouter} /> // Use RouterProvider to handle routing
);

// ReactDOM.createRoot(document.getElementById("main")).render(<App />);