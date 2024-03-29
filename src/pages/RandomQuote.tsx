import { useEffect, useState } from "react"
import { QuoteType } from "../Types/type"



function Random() {
    const [randomQuote, setRandomQuote] = useState<QuoteType | null>(null)
    useEffect(() => {
        fetch('https://neighborly-odd-leotard.glitch.me/randomquote')
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
                <span className="author">{randomQuote.firstName} {randomQuote.lastName}</span>
            </div>
        </div>
    )
}
export default Random