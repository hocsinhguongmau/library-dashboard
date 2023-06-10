export interface IBook {
  id: number
  isbn: string
  title: string
  image: string
  description: string
  authorNames: string[]
  categoryNames: string[]
  publishedDate: Date
}

export interface FetchBooksArgs {
  page?: number
  pageSize?: number
  sortBy?: string
  order?: string
}

export interface BookData {
  books: IBook[]
  totalBooks: number
}
