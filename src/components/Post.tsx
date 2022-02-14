import { QuoteType } from "../App"

type Props = {
    quotes: QuoteType[]
    setQuotes: Function
}

function Post({ quotes, setQuotes }: Props) {

    function createQuote(quote: string, firstname: string, lastname: string, image: string, age: number) {
        return fetch('http://localhost:3001/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: quote,
                firstName: firstname,
                lastName: lastname,
                image: image,
                age: age
            })
        }).then(resp => resp.json())
    }
    function onSubmit(event: any): void {
        event.preventDefault()
        const quote = event.target.quote.value
        const firstname = event.target.firstname.value
        const lastname = event.target.lastname.value
        const image = event.target.image.value
        const age = Number(event.target.age.value)

        createQuote(quote, firstname, lastname, image, age).then(function (newquote) {
            const updateQuotes = JSON.parse(JSON.stringify(quotes))
            updateQuotes.push(newquote)
            setQuotes(updateQuotes)
        })
    }
    return (
        <section className="form-section">
            <h2>Add a new quote</h2>
            <form className="form" onSubmit={(event) =>

                onSubmit(event)}>
                <label className="label" >Quote:
                    <input type="text" name="quote" />
                </label>
                <label className="label">First Name:
                    <input type="text" name="firstname" />
                </label>
                <label className="label">Last Name:
                    <input type="text" name="lastname" />
                </label>
                <label className="label">Image:
                    <input type="text" name="image" />
                </label>
                <label className="label" >Age:
                    <input type="number" name="age" />
                </label>
                <input type="submit" value="submit" />
            </form>
        </section>
    )

}

export default Post