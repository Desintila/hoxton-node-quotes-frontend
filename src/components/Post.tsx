import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthorType } from "../Types/type"



function Post() {
    const navigate = useNavigate()
    const [authors, setAuthors] = useState<AuthorType[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/quotes')
            .then(resp => resp.json())
            .then(authors => setAuthors(authors))
    }, [])



    function createAuthor(firstname: string, lastname: string, image: string, age: number) {
        return fetch('http://localhost:3001/authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstname,
                lastName: lastname,
                image: image,
                age: age
            })
        }).then(resp => resp.json())
    }
    function onSubmit(event: any): void {
        event.preventDefault()

        const firstname = event.target.firstname.value
        const lastname = event.target.lastname.value
        const image = event.target.image.value
        const age = Number(event.target.age.value)

        createAuthor(firstname, lastname, image, age).then(function (newAuthor) {
            const updateAuthors = JSON.parse(JSON.stringify(authors))
            updateAuthors.push(newAuthor)
            setAuthors(updateAuthors)
        })

        navigate('/home')
    }
    return (
        <section className="form-section">
            <h2 className="new-quote">Add a new Author</h2>
            <form className="form" onSubmit={(event) =>

                onSubmit(event)}>

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