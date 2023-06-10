import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-full max-w-xs p-4 border-r border-gray-500">
      <ul>
        <li>
          <Link to={'/'}>Books</Link>
        </li>
        <li>
          <Link to={'/add-book'}>Add Book</Link>
        </li>
      </ul>
    </div>
  )
}
