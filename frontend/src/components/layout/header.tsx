import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function Header() {
    return (
        <div className="bg-primary/5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
                <Link to="/" className="text-3xl font-semibold">Sehtie</Link>
                <div className="flex items-center justify-center">
                    <Button asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header