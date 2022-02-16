import Quote from '../components/Quote'
import { Props } from '../Types/type'



function Homepage({ quotes, setQuotes }: Props) {
    console.log(quotes)
    return (

        <div>
            <ul className='quotes-list'>
                {
                    quotes.map((quote, index) => <Quote quote={quote} key={index} quotes={quotes} setQuotes={setQuotes} />)
                }
            </ul>
        </div>
    )
}
export default Homepage