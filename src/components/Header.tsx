import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    return (
        <header className="header">
            <h1 onClick={() => navigate('/home')}>Quotes</h1>
            <nav className="right-nav">
                <ul className="nav-list">
                    <li onClick={() => navigate('/randomquote')}>Random Quote</li>
                    <li onClick={() => navigate('/addquote')}>New Quote</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header