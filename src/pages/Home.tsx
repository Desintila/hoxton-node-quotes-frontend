import Quote from '../components/Quote'
import { QuoteType } from "../App"
import { useNavigate } from 'react-router-dom'


type Props = {
    quotes: QuoteType[]
}

function Homepage({ quotes }: Props) {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Quotes</h1>
            <button className='randomquote-button' onClick={() => navigate('/randomquote')}>Click to see random quote of the day</button>
            <ul className='quotes-list'>
                {
                    quotes.map((quote, index) => <Quote quote={quote} key={index} />)
                }
            </ul>
        </div>
    )
}
export default Homepage