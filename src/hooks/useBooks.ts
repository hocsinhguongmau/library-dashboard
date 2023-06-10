import { GET_ALL_BOOKS } from '@/constants/constants'
import { getAllBooks, removeBook } from '@/utils/backend-service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllBooks = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [GET_ALL_BOOKS],
    queryFn: () => getAllBooks({}),
  })

  return { data, isLoading, isError, error }
}

export const useRemoveBook = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(removeBook, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_BOOKS] })
    },
  })
  return {
    deleteBook: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  }
}
