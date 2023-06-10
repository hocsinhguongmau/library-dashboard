import { Routes as AppRoutes, Route } from 'react-router-dom'

import Layout from '@/components/Layout/Layout'
import BookList from '@/pages/Book/BookList'
import NotFound from '@/pages/NotFound'

const Routes = () => {
  return (
    <Layout>
      <AppRoutes>
        <Route path="/" element={<BookList />} />
        <Route path="*" element={<NotFound />} />
      </AppRoutes>
    </Layout>
  )
}

export default Routes
