import { ActivityIcon, BadgeCheck } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function HomePage() {
    return (
        <div className="flex flex-col text-muted">
            <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
                <div className="w-1/2 space-y-6">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-7xl font-semibold text-pretty">Revolutionize Healthcare Management with Sehtie</h1>
                        <p className="text-lg text-muted-foreground">Empowering Patients and Doctors for Seamless Healthcare Interactions.</p>
                    </div>
                    <Button asChild className="rounded-full" size={'lg'}>
                        <Link to="/register">Get Started</Link>
                    </Button>
                </div>
                <img src="/hero.png" alt="hero" />
            </div>
            <div className="h-72 w-full max-w-screen-xl mx-auto mb-32 bg-green-950 flex items-center justify-center">
                <div className="flex items-center w-2/3 h-full py-20 space-x-12">
                    <div className="w-1/2 flex flex-col gap-3">
                        <h1 className="text-7xl font-semibold tracking-tighter">2.3<span className="text-primary">+</span></h1>
                        <p className="text-muted-foreground">Doctors per 1000 population is what we are aiming to increase.</p>
                    </div>
                    <Separator orientation="vertical" className="bg-muted-foreground" />
                    <div className="w-1/2 flex flex-col gap-3">
                        <h1 className="text-7xl font-semibold tracking-tight">5<span className="text-primary">%</span></h1>
                        <p className="text-muted-foreground">of the GDP, falling below the average of low-income countries as we aim to raise this figure.</p>
                    </div>
                </div>
            </div>
            <div className="mt-24 py-24 bg-primary text-primary-foreground">
                <div className="flex flex-col gap-3">
                    <h1 className="text-7xl font-semibold text-center">How It Works</h1>
                    <p className="text-primary-foreground font-medium text-center">Sehtie is a specialty drug enrollment platform that helps you get the drugs you need.</p>
                </div>
                <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
                    <div className="w-1/2 p-24 pb-0 flex flex-col justify-start items-start gap-6">
                        <Separator orientation="horizontal" className="bg-rose-700 w-1/3 h-2 rounded-full mb-3" />
                        <h1 className="text-7xl font-semibold tracking-tight">Patient</h1>
                        <p className="text-primary-foreground font-medium text-pretty">Create an account with Sehtie and get access to our platform</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Seamless Access to Medical Records
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Convenient Appointment Booking
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Access to Recipes and Medications
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Secure Communication with Doctors
                            </li>
                        </ul>
                        <Button asChild className="rounded-full mt-12 bg-green-main hover:bg-green-main/95 text-white" size={'lg'}>
                            <Link to="/register">Start your treatment</Link>
                        </Button>
                    </div>
                    <div className="w-1/2 p-24 pb-0 flex flex-col justify-center items-start gap-6">
                        <Separator orientation="horizontal" className="bg-purple-700 w-1/3 h-2 rounded-full mb-3" />
                        <h1 className="text-7xl font-semibold tracking-tight">Doctor</h1>
                        <p className="text-primary-foreground font-medium text-pretty">Create an account with Sehtie and get access to our platform</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Effortless Documentation
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Online Appointment Management
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Recipe and Resource Sharing
                            </li>
                            <li className="flex items-center gap-3 font-medium text-green-main">
                                <BadgeCheck className="size-6 text-primary fill-green-main" />
                                Enhanced Patient Engagement
                            </li>
                        </ul>
                        <Button asChild className="rounded-full mt-12 bg-green-main hover:bg-green-main/95 text-white" size={'lg'}>
                            <Link to="/register">Find your Patient</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <footer className="py-24 bg-green-main">
                <div className="flex justify-between w-full max-w-screen-xl mx-auto">
                    <div className="w-1/3">
                        <div className="text-xl tracking-tight font-medium flex items-center gap-1">
                            <ActivityIcon className="size-6 text-primary" />
                            Sehtie
                        </div>
                        <p className="text-muted-foreground text-sm">© 2024 Sehtie. All rights reserved</p>
                        <p className="pt-6 text-pretty text-sm">
                            This app was created by a team of three of us within a tight timeframe of under 10 days during a hackathon event.
                        </p>
                    </div>
                    <div className="flex flex-col gap-9">
                        <h3 className="text-xl tracking-tight font-medium">
                            <h3>Soultions</h3>
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <Link to="/" className="text-muted-foreground transition hover:text-foreground">For Doctors</Link>
                            <Link to="/" className="text-muted-foreground transition hover:text-foreground">For Patients</Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-9">
                        <h3 className="text-xl tracking-tight font-medium">
                            <h3>Made By</h3>
                        </h3>
                        <div className="flex gap-3">
                            <img src="/mohammed.jpeg" alt="" className="size-12 rounded-full object-cover" />
                            <img src="/abdu.png" alt="" className="size-12 rounded-full" />
                            <img src="/ahmed.png" alt="" className="size-12 rounded-full" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage