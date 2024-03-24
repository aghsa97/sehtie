import { cn } from '@/lib/utils'
import { CalendarDays, Clock, Plus, Users } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

function DoctorNavBar() {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page')

    return (
        <nav className="w-1/4 h-full flex flex-col gap-6">
            <ul className='bg-green-main rounded-3xl flex flex-col items-start gap-4 pl-12 py-12 bg-gradient-to-br from-zinc-950/50 from-0% to-75%'>
                <li
                    className={cn("text-muted/50 transition hover:text-muted cursor-pointer rounded-full flex gap-3 font-medium"
                        , { 'text-primary': page === 'appointments' }
                    )}
                    onClick={() => setSearchParams({ page: 'appointments' })}
                >
                    <CalendarDays className="size-6" />
                    Appointments
                </li>
                <li
                    className={cn("text-muted/50 transition hover:text-muted cursor-pointer rounded-full flex gap-3 font-medium"
                        , { 'text-primary': page === 'records & prescriptions' }
                    )}
                    onClick={() => setSearchParams({ page: 'records & prescriptions' })}
                >
                    <Plus className="size-6" />
                    Records & Prescriptions
                </li>
                <li
                    className={cn("text-muted/50 transition hover:text-muted cursor-pointer rounded-full flex gap-3 font-medium"
                        , { 'text-primary': page === 'patients list' }
                    )}
                    onClick={() => setSearchParams({ page: 'patients list' })}
                >
                    <Users className="size-6" />
                    Patients List
                </li>
            </ul>
            <div className='bg-green-main rounded-3xl flex flex-col items-start gap-6 p-12 bg-gradient-to-br from-zinc-950/50 from-0% to-75%'>
                <div className='flex items-center gap-3'>
                    <Clock className='size-6 text-primary' />
                    <h1 className='text-muted/50 text-l font-semibold'>Upcoming</h1>
                </div>
                <ul className='flex flex-col gap-3'>
                    <li className='flex gap-3'>
                        <div className='flex flex-col justify-center gap'>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-xl font-medium text-muted'>Mohammed Agha</h4>
                                <h4 className='font-medium text-muted-foreground'>
                                    11 Sep 2024 - 10:30
                                </h4>
                            </div>
                        </div>
                    </li>
                    <li className='flex gap-3'>
                        <div className='flex flex-col justify-center gap'>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-xl font-medium text-muted'>Anders Andersson</h4>
                                <h4 className='font-medium text-muted-foreground'>
                                    11 Sep 2024 - 11:00
                                </h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default DoctorNavBar