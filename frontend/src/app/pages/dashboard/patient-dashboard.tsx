import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

import Appointments from "@/components/dashboard/appointments"
import BookAppointment from "@/components/dashboard/patient/book-appointment"
import FindDoctor from "@/components/dashboard/patient/find-doctor"
import MedicalRecords from "@/components/dashboard/patient/medical-records"
import PatientNavBar from "@/components/dashboard/patient/patient-navbar"
import Prescriptions from "@/components/dashboard/patient/prescriptions"

function PatientDashboardPage() {
    const [searchParams,] = useSearchParams()
    const page = searchParams.get('page')
    const patientId = localStorage.getItem('patientId')

    useEffect(() => {
        document.title = 'Patient Dashboard - MediConnect'
        if (!patientId) {
            window.location.href = '/login'
        }
    }, [patientId])

    return (
        <div className="w-full max-w-screen-xl mx-auto flex items-start gap-12">
            <PatientNavBar />
            <div className="w-3/4 h-full bg-green-main rounded-3xl flex flex-col py-12 px-6 bg-gradient-to-br from-zinc-950/50 from-0% to-75%">
                {page === 'medical records' && <MedicalRecords />}
                {page === 'appointments' && <Appointments />}
                {page === 'prescriptions' && <Prescriptions />}
                {page === 'book an appointment' && <BookAppointment />}
                {page === 'find a doctor' && <FindDoctor />}
            </div>
        </div>
    )
}

export default PatientDashboardPage