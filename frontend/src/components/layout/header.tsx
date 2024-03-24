import { Link } from "react-router-dom"
import { ActivityIcon } from "lucide-react"

import { Button } from "../ui/button"

function Header() {
    return (
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-6">
            <Link to="/" className="text-3xl tracking-tight font-medium flex items-center gap-1 text-muted"><ActivityIcon className="size-6 text-primary" />Sehtie</Link>
            <div className="flex items-start gap-9">
                <Link to="/" className="text-muted-foreground transition hover:text-muted">Solutions</Link>
                <Link to="/" className="text-muted-foreground transition hover:text-muted">About</Link>
                <Link to="/" className="text-muted-foreground transition hover:text-muted">Contact</Link>
                <Link to="/" className="text-muted-foreground transition hover:text-muted">Career</Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
                <Button asChild className="rounded-full" size={'lg'}>
                    <Link to="/auth/login">Login</Link>
                </Button>
            </div>
        </div>
    )
}

export default Header