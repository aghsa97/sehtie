import { ActivityIcon, Cross, Hospital } from "lucide-react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegisterPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const user = searchParams.get('user')
    const navigate = useNavigate()


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        navigate('/dashboard')
    }

    if (user === 'patient') {
        return (
            <div className="p-12 text-muted">
                <div className="flex flex-col items-start gap-6">
                    <Hospital className="size-12 text-primary" />
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-3xl font-semibold">Register as a Patient</h1>
                        <p className="text-muted-foreground font-medium">
                            Create an account as a patient and find a doctor
                        </p>
                    </div>
                    <form className="w-full flex flex-col gap-6 mt-6" onSubmit={event => handleSubmit(event)}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input type="email" id="email" placeholder="Enter your email" className="rounded-full text-zinc-950" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="phone_number" className="text-sm font-medium">Phone Number</Label>
                            <Input type="text" id="phone_number" placeholder="Enter your phone number" className="rounded-full text-zinc-950" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                            <Input type="password" id="password" placeholder="Enter your password" className="rounded-full text-zinc-950" />
                        </div>
                        <Button type="submit" className="rounded-full">Register</Button>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-12">
                    <p className="text-muted-foreground font-medium">
                        Already have an account?
                    </p>
                    <Button asChild variant={'link'} className="px-1.5">
                        <Link to="/login">Login</Link>
                    </Button>
                </div>
            </div>
        )
    }
    if (user === 'doctor') {
        return (
            <div className="p-12 text-muted">
                <div className="flex flex-col items-start gap-6">
                    <Cross className="size-12 text-primary" />
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-3xl font-semibold">Register as a Doctor</h1>
                        <p className="text-muted-foreground font-medium">
                            Create an account as a doctor and treat patients
                        </p>
                    </div>
                    <form className="w-full flex flex-col gap-6 mt-6" onSubmit={event => handleSubmit(event)}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input type="email" id="email" placeholder="Enter your email" className="rounded-full text-zinc-950" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="phone_number" className="text-sm font-medium">Phone Number</Label>
                            <Input type="text" id="phone_number" placeholder="Enter your phone number" className="rounded-full text-zinc-950" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                            <Input type="text" id="category" placeholder="Enter your category" className="rounded-full text-zinc-950" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                            <Input type="password" id="password" placeholder="Enter your password" className="rounded-full text-zinc-950" />
                        </div>
                        <Button type="submit" className="rounded-full">Register</Button>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-12">
                    <p className="text-muted-foreground font-medium">
                        Already have an account?
                    </p>
                    <Button asChild variant={'link'} className="px-1.5">
                        <Link to="/login">Login</Link>
                    </Button>
                </div>
            </div>
        )
    }
    return (
        <div className="p-12 text-muted">
            <div className="flex flex-col items-start gap-6">
                <ActivityIcon className="size-12 text-primary" />
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl font-semibold">Register</h1>
                    <p className="text-muted-foreground font-medium">
                        Create an account with Sehtie and get access to our platform
                    </p>
                </div>
                <div className="w-full flex items-center justify-between gap-6">
                    <div className="w-72 h-40 p-6 rounded-xl border-2 border-primary transition hover:bg-primary/5 cursor-pointer flex flex-col justify-between"
                        onClick={() => setSearchParams({ user: 'patient' })}
                    >
                        <Hospital className="size-8 text-primary" />
                        <p className="font-semibold">
                            I am a patient, looking for a doctor
                        </p>
                    </div>
                    <div className="w-72 h-40 p-6 rounded-xl border-2 border-primary transition hover:bg-primary/5 cursor-pointer flex flex-col justify-between"
                        onClick={() => setSearchParams({ user: 'doctor' })}
                    >
                        <Cross className="size-8 text-primary" />
                        <p className="font-semibold">
                            I am a doctor, treating patients
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-12">
                <p className="text-muted-foreground font-medium">
                    Already have an account?
                </p>
                <Button asChild variant={'link'} className="px-1.5">
                    <Link to="/login">Login</Link>
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage