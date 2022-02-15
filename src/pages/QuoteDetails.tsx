import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { QuoteType } from "../Types/type"


function QuoteDetails() {
    const [quote, setQuote] = useState<QuoteType | null>(null)

    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/quotes/${params.id}`)
            .then(resp => resp.json())
            .then(quote => setQuote(quote))
    }, [])

    if (quote === null) return <h1>Loading...</h1>
    return (
        <section className="details">
            <div className="quotedetails">
                <div className="author-details"><img src={quote.image} alt="" />
                    <span>Age: {quote.age} years</span>
                </div>
                <div>
                    <h2 >{quote.text}</h2>
                    <span className="author">{quote.firstName} {quote.lastName}</span>
                </div>
            </div>
        </section>
    )
}
export default QuoteDetails