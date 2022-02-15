export type QuoteType = {
  text: string
  firstName: string
  lastName: string
  image: string
  age: number
  id: number
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