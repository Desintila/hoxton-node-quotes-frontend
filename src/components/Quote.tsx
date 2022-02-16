import { useNavigate } from "react-router-dom"
import { QuoteProps } from "../Types/type"




function Quote({ quote, setQuotes, quotes }: QuoteProps) {
    const navigate = useNavigate()

    function deleteQuote(id: number) {
        return fetch(`http://localhost:3001/quotes/${id}`, {
            method: 'DELETE'
        })
    }

    function removeQuote() {
        let update = [...quotes]
        deleteQuote(quote.id)
        update = update.filter(targetQuote => targetQuote.id !== quote.id)
        setQuotes(update)
    }

    return (
        <li className="quote" >
            <button className="delete-btn" onClick={() => removeQuote()}>X</button>
            <article className="article" onClick={() => navigate(`/home/${quote.id}`)}>
                <h3 >{quote.text}</h3>
                <span className="author-name">-{quote.author.firstName} {quote.author.lastName}</span>
            </article>
        </li>
    )
}

export default Quote