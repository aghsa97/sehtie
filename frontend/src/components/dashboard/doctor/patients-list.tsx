import { User } from 'lucide-react'

function PatientsList() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Patients List
                </h1>
                <h3 className='text-muted-foreground'>
                    Here you can find a list of your patients.
                </h3>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6'>
                    <h1 className="text-xl font-semibold tracking-tight text-muted">
                        Your patients
                    </h1>
                    <ul className="flex flex-col gap-3">
                        <li className='flex gap-3'>
                            <div className='flex flex-col items-center justify-center bg-muted/10 rounded-full shrink-0 size-16'>
                                <User className="size-6 text-primary" />
                            </div>
                            <div className='flex items-center justify-between gap-12'>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-xl font-medium text-muted'>Dr. John Doe</h4>
                                    <h4 className='font-medium text-muted-foreground'>Dermatologist</h4>
                                </div>
                            </div>
                        </li>
                        <li className='flex gap-3'>
                            <div className='flex flex-col items-center justify-center bg-muted/10 rounded-full shrink-0 size-16'>
                                <User className="size-6 text-primary" />
                            </div>
                            <div className='flex items-center justify-between gap-12'>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-xl font-medium text-muted'>Dr. Susanna Anderson</h4>
                                    <h4 className='font-medium text-muted-foreground'>General Practitioner</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PatientsList