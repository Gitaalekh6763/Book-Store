import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className='min-w-full bg-white border border-gray-300 shadow-lg rounded-md'>
        <thead className="bg-gray-100">
          <tr>
            <th className='py-3 px-4 border-b font-semibold text-gray-700'>No</th>
            <th className='py-3 px-4 border-b font-semibold text-gray-700'>Title</th>
            <th className='py-3 px-4 border-b font-semibold text-gray-700 md:table-cell'>Author</th>
            <th className='py-3 px-4 border-b font-semibold text-gray-700 md:table-cell'>Publish Year</th>
            <th className='py-3 px-4 border-b font-semibold text-gray-700'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='text-center hover:bg-gray-50 transition duration-300'>
              <td className='py-2 px-4 border-b'>{index + 1}</td>
              <td className='py-2 px-4 border-b'>{book.title}</td>
              <td className='py-2 px-4 border-b md:table-cell'>{book.author}</td>
              <td className='py-2 px-4 border-b md:table-cell'>{book.publishYear}</td>
              <td className='py-2 px-4 border-b'>
                <div className='flex justify-center items-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-green-600 hover:text-green-800 transition duration-300' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-yellow-600 hover:text-yellow-800 transition duration-300' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-red-600 hover:text-red-800 transition duration-300' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
