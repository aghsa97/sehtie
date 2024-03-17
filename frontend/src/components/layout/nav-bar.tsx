import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function NavBar() {
    return (
        <div className="flex bg- items-center justify-between px-32 py-6 bg-primary/5">
            <Link to="/" className="text-3xl font-semibold">Sehtie</Link>
            <div className="flex items-center justify-center">
                <Button asChild>
                    <Link to="/login">Login</Link>
                </Button>
            </div>
        </div>
    )
}

export default NavBar