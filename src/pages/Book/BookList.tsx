import BookItem from '@/components/Book/BookItem'
import Loading from '@/components/Loading/Loading'
import { useGetAllBooks } from '@/hooks/useBooks'
import { IBook } from '@/types'

export default function BookList() {
  const { data, isLoading, isError, error } = useGetAllBooks()

  if (isLoading) {
    return <Loading classes="pt-8" />
  }

  if (isError) {
    return (
      <p>Error: {(error as any)?.response?.data?.message || 'Unknown Error'}</p>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center capitalize">Book list</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {data.books.map((book: IBook) => (
          <BookItem {...book} key={book.id} />
        ))}
      </div>
    </div>
  )
}
