import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BoardMembers from "../feautures/boardMembers/views/BoardMembers";
import CompanyDetails from "../feautures/companyDetails/views/CompanyDetails";
import ShareOfCompanies from "../feautures/shareOfCompanies/views/ShareOfCompanies";
import FinancialData from "../feautures/financialData/views/FinancialData";

const PublicApp = () => {
    return <Layout>
        <Outlet></Outlet>
    </Layout>
}

export const publicRoutes = [
    {
        path: '/',
        element: <Navigate to={window.baseUrl + 'editappr/cd' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} />
    },
    {
        path: window.baseUrl,
        element: <Navigate to={window.baseUrl + 'editappr/cd' + '?func=ll&objId=' + window.currentWebreportId + '&objAction=RunReport'} />
    },
    {
        path: window.baseUrl + 'editappr',
        element: <PublicApp />,
        children: [
            {
                children : [
                    {
                        path: 'cd',
                        element: <CompanyDetails />,
                    },
                    {
                        path: 'bm',
                        element: <BoardMembers />
                    },
                    {
                        path: 'fd',
                        element: <FinancialData />
                    },
                    {
                        path: 'sc',
                        element: <ShareOfCompanies />
                    }
                ]
            }
            
        ]
    },
]