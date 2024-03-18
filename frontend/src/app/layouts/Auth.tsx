import { Button } from '@/components/ui/button'
import { Link, Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/3 border-r flex flex-col items-center justify-center'>
                <div className='text-5xl font-bold'>Welcome to Sehtie</div>
                <Button asChild>
                    <Link to='/'>Home</Link>
                </Button>
            </div>
            <div className='w-2/3 flex items-center justify-center'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout