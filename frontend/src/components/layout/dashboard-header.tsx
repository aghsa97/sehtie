import { ActivityIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function DashboardHeader() {
    return (
        <div className="flex justify-center items-center bg-green-main">
            <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto py-6'>
                <div className="flex items-center gap-1">
                    <ActivityIcon className="size-6 text-primary" />
                    <p className='text-3xl tracking-tight font-medium text-muted'>
                        Sehtie
                    </p>
                </div>
                <div className='flex items-start gap-3'>
                    <Button asChild size={'icon'} className='size-10 rounded-full cursor-pointer'>
                        <img src="/mohammed.jpeg" alt="" className='object-cover' />
                    </Button>
                    <div className='flex flex-col items-start'>
                        <p className='text-muted text- font-medium'>Mohammed Agha</p>
                        <Link to={'/'} className='text-muted-foreground text-sm font-medium hover:text-primary transition'>Settings | Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader