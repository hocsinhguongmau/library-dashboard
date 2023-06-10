import { GET_ALL_BOOKS } from '@/constants/constants'
import { getAllBooks, removeBook } from '@/utils/backend-service'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const useGetAllBooks = () => {
  const { data, isLoading, isError, error } = useQuery(GET_ALL_BOOKS, () =>
    getAllBooks({}),
  )

  return { data, isLoading, isError, error }
}

export const useRemoveBook = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(removeBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_ALL_BOOKS)
    },
  })
  return {
    deleteBook: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  }
}
