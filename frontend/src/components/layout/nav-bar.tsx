import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="shadow-md">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
                <Link to="/" className="font-medium hover:underline hover:underline-offset-4">Life & health</Link>
                <Link to="/" className="font-medium hover:underline hover:underline-offset-4">Child & Pregnant</Link>
                <Link to="/" className="font-medium hover:underline hover:underline-offset-4">Diseases & ailments</Link>
                <Link to="/" className="font-medium hover:underline hover:underline-offset-4">Examination & treatment</Link>
            </div>
        </div>
    )
}

export default NavBar