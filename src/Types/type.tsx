export type QuoteType = {
  text: string
  authorId: number
  id: number
  firstName: string
  lastName: string
  image: string
  age: number

}


export type Props = {
  quotes: QuoteType[]
  setQuotes: Function
}

export type QuoteProps = {
  quotes: QuoteType[]
  setQuotes: Function
  quote: QuoteType
}

export type AuthorType = {
  id: number
  firstName: string
  lastName: string
  image: string
  age: number

}