import { useEffect, useState } from "react"
import { QuoteType } from "../App"


function Random() {
    const [randomQuote, setRandomQuote] = useState<QuoteType | null>(null)
    useEffect(() => {
        fetch('http://localhost:3001/randomquote')
            .then(resp => resp.json())
            .then(randomQuote => setRandomQuote(randomQuote))
    }, [])


    if (randomQuote === null)
        return <h1>Loading</h1>

    return (
        <div>
            <h1>Random Quote of the day</h1>
            <div className="randomquote">
                <h2 >{randomQuote.text}</h2>
                <span className="author">{randomQuote.author}</span>
            </div>
        </div>
    )
}
export default Random