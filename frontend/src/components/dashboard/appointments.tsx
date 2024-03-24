import { Clock } from 'lucide-react'

function Appointments() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Appointments
                </h1>
                <h3 className='text-muted-foreground'>
                    Here you can check your upcoming appointments.
                </h3>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className="text-xl font-semibold tracking-tight text-muted">
                    Your Upcoming Appointments
                </h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-3'>
                        <div className='flex flex-col items-center justify-center bg-muted/10 rounded-xl shrink-0 size-16'>
                            <Clock className='size-6 text-primary' />
                        </div>
                        <div className='flex flex-col justify-center gap'>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-xl font-medium text-muted'>Dermatologist</h4>
                                <h4 className='font-medium text-muted-foreground'>Dr. John Doe</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <h4 className='text-xl font-semibold text-muted'>Date</h4>
                        <h4 className='font-medium text-muted'>11 Sep 2024</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold text-muted'>Time</h4>
                        <h4 className='font-medium text-muted'>10:30</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold text-muted'>Location</h4>
                        <h4 className='font-medium text-muted'>Dermatology Clinic</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold text-muted'>Reason for appointment</h4>
                        <h4 className='font-medium text-muted'>Acne treatment</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments