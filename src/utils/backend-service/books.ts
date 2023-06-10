import axios from 'axios'

import { BACKEND_API_URL } from '@/constants'
import { FetchBooksArgs, IBook } from '@/types'

export const getAllBooks = async (args: FetchBooksArgs) => {
  const { page, pageSize, sortBy, order } = args
  const response = await axios.get(`${BACKEND_API_URL}/books`, {
    params: {
      page: page,
      pageSize: pageSize,
      sortBy: sortBy,
      order: order,
    },
  })
  return response.data
}

export const getBookDetails = async (id: number) => {
  const response = await axios.get(`${BACKEND_API_URL}/books/${id}`)
  return response.data
}

export const addBook = async (book: IBook) => {
  try {
    await axios.post(`${BACKEND_API_URL}/books`, book)
  } catch (error: any) {
    console.error('Error:', error.response.data)
  }
}

// export const updateBookFunction = async (id: number, book: IBook) => {
//   const response = await axios.put(`${BACKEND_API_URL}/books.json`, book)
//   console.log(`book ${id} is updated`, book)
//   return response.data
// }

export const removeBook = async (id: number) => {
  try {
    await axios.delete(`${BACKEND_API_URL}/books/${id}`)
  } catch (error: any) {
    console.error('Error:', error.response.data)
  }
}
