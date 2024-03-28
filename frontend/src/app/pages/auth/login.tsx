import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ActivityIcon } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const response = await fetch(`http://localhost:5266/login/${email}`)

        if (!response.ok) {
            console.log('Invalid email')
            return
        }
        const data = await response.json()

        if (data.passowrd !== password) {
            console.log('Invalid password')
            return
        }
        if (data.category) {
            localStorage.setItem('doctorId', data.id)
            navigate('/dashboard/doctor?page=appointments')
            return
        }
        localStorage.setItem('patientId', data.id)
        navigate('/dashboard/patient?page=medical records')
    }

    return (
        <div className="p-12 text-muted">
            <div className="flex flex-col items-start gap-6">
                <ActivityIcon className="size-12 text-primary" />
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <p className="text-muted-foreground font-medium">Login to your account to access the platform</p>
                </div>
            </div>
            <form className="flex flex-col gap-6 mt-6" onSubmit={event => handleSubmit(event)}>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="email" id="email" placeholder="Enter your email" className="rounded-full text-zinc-950" />
                </div>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <Input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password" id="password" placeholder="Enter your password" className="rounded-full text-zinc-950" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" className="rounded-sm" />
                        <Label htmlFor="remember" className="text-sm font-medium">Remember me</Label>
                    </div>
                    <Button variant={'link'} type="button">Forgot Password?</Button>
                </div>
                <Button type="submit" className="rounded-full">Login</Button>
            </form>
            <div className="flex items-center justify-center mt-6">
                <p className="text-muted-foreground font-medium">Don't have an account?</p>
                <Button variant={'link'} className="px-1.5">
                    <Link to="/auth/register">Create an account</Link>
                </Button>
            </div>
        </div>
    )
}

export default LoginPage