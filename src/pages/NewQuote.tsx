import Post from "../components/Post"
import { Props } from "../Types/type"


function NewQuote({ quotes, setQuotes }: Props) {
    return (
        <main>
            <Post quotes={quotes} setQuotes={setQuotes} />
        </main>
    )
}
export default NewQuote