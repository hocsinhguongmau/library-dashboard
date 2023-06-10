import { useRemoveBook } from '@/hooks/useBooks'
import { IBook } from '@/types'
import { formatPublishedDate } from '@/utils/frontend-service'
import { Link } from 'react-router-dom'

export default function BookItem({
  id,
  image,
  title,
  authorNames,
  categoryNames,
  publishedDate,
}: IBook) {
  const { deleteBook, isLoading, isError } = useRemoveBook()
  const handleDeleteBook = () => {
    deleteBook(id)
  }

  return (
    <div key={id} className="relative">
      <Link to={`/book/${id}`} className="block px-2">
        <img
          src={image}
          alt={title}
          width={200}
          height={300}
          className="w-full"
        />
      </Link>
      <h4 className="mt-4 text-xl font-bold text-center capitalize">
        <Link to={`/book/${id}`}>{title}</Link>
      </h4>
      {authorNames.length > 0 ? (
        <h4 className="italic text-center">{authorNames.join(', ')}</h4>
      ) : null}{' '}
      {categoryNames.length > 0 ? (
        <h4 className="italic text-center">{categoryNames.join(', ')}</h4>
      ) : null}
      <p className="text-center">
        Published date: {formatPublishedDate(publishedDate)}
      </p>
      <p className="mt-4">
        <button
          className="button"
          onClick={handleDeleteBook}
          disabled={isLoading}>
          delete
        </button>
      </p>
      {isError && <p>Cannot delete book</p>}
    </div>
  )
}
