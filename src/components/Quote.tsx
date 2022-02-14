import { useNavigate } from "react-router-dom"
import { QuoteType } from "../App"

type Props = {
    quote: QuoteType
}

function Quote({ quote }: Props) {
    const navigate = useNavigate()
    return (
        <li className="quote" onClick={() => navigate(`/home/${quote.id}`)}>
            <h3>{quote.text}</h3>
            <span className="author">-{quote.firstName} {quote.lastName}</span>
        </li>
    )
}

export default Quote