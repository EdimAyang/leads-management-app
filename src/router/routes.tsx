import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboardLayout";
import Dashboard from "@/pages/dashboard";
import LeadsPage from "@/pages/leads";
import CreateLeadPage from "@/pages/leads/createLeadPage";
import EditPage from "@/pages/leads/editLeadPage";


const NotFound = () => <h1>404</h1>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "leads",
        element: <LeadsPage />,
      },
      {
        path:"leads/createLeadPage",
        element:<CreateLeadPage/>
      },
      {
        path:"leads/:id/editLeadPage",
        element:<EditPage/> 
      }
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
