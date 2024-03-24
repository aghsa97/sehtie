import DashboardHeader from "@/components/layout/dashboard-header"
import { Outlet } from "react-router-dom"

function DashboardLayout() {
    return (
        <div className='flex flex-col h-screen'>
            <DashboardHeader />
            <div className='flex-1 py-20 bg-zinc-950/5'>
                <Outlet />
            </div>
        </div >
    )
}

export default DashboardLayout