import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Users } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='w-full h-screen flex bg-green-main'>
            <div className='w-1/3 flex flex-col items-center justify-center bg-primary'>
                <div className='flex flex-col items-start justify-center gap-12'>
                    <div className='flex items-center gap-6'>
                        <BookOpen className='size-12 text-zinc-950 p-3 bg-zinc-50/25 rounded-xl' />
                        <div>
                            <h1 className='text-3xl font-bold text-zinc-950'>Visit our Support Center</h1>
                            <p className='text-lg font-medium text-zinc-700'>
                                Get help with account issues, app issues, and more
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Clock className='size-12 text-zinc-950 p-3 bg-zinc-50/25 rounded-xl' />
                        <div>
                            <h1 className='text-3xl font-bold text-zinc-950'>
                                View our Product Roadmap
                            </h1>
                            <p className='text-lg font-medium text-zinc-700'>
                                See what we're working on and what's coming next
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Users className='size-12 text-zinc-950 p-3 bg-zinc-50/25 rounded-xl' />
                        <div>
                            <h1 className='text-3xl font-bold text-zinc-950'>
                                Join our Community
                            </h1>
                            <p className='text-lg font-medium text-zinc-700'>
                                Connect with other users and share your ideas with us
                            </p>
                        </div>
                    </div>
                    <Button asChild size={'lg'} className='bg-green-main transition hover:bg-green-main/90 rounded-full text-zinc-50'>
                        <Link to='/'>Back to Home</Link>
                    </Button>
                </div>
            </div>
            <div className='w-2/3 flex items-center justify-center'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout