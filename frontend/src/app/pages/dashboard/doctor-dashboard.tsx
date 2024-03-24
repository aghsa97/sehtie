import { useSearchParams } from "react-router-dom"

import RecordsPrescriptions from "@/components/dashboard/doctor/records-prescriptions"
import DoctorNavBar from "@/components/dashboard/doctor/doctor-navbar"
import PatientsList from "@/components/dashboard/doctor/patients-list"
import Appointments from "@/components/dashboard/appointments"

function DoctorDashboardPage() {
    const [searchParams,] = useSearchParams()
    const page = searchParams.get('page')


    return (
        <div className="w-full max-w-screen-xl mx-auto flex items-start gap-12">
            <DoctorNavBar />
            <div className="w-3/4 h-full bg-green-main rounded-3xl flex flex-col py-12 px-6 bg-gradient-to-br from-zinc-950/50 from-0% to-75%">
                {page === 'appointments' && <Appointments />}
                {page === 'records & prescriptions' && <RecordsPrescriptions />}
                {page === 'patients list' && <PatientsList />}
            </div>
        </div>
    )
}

export default DoctorDashboardPage