import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex grow">
        <Sidebar />
        <div className="w-full max-w-5xl p-4 mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
