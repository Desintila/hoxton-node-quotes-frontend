import { QuoteType } from "../App"

type Props = {
    quote: QuoteType
}

function Quote({ quote }: Props) {
    return (
        <li className="quote">
            <h3>{quote.text}</h3>
            <span className="author">-{quote.author}</span>
        </li>
    )
}

export default Quote