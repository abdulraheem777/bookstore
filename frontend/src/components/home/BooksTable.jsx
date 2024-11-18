import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

const BooksTable = ({ books }) => {
  return (
    <motion.table 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-w-full divide-y divide-gray-200/50"
    >
      <thead className="backdrop-blur-sm bg-white/30">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-md:hidden">Author</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-md:hidden">Year</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="backdrop-blur-sm bg-white/20 divide-y divide-gray-200/50">
        {books.map((book, index) => (
          <motion.tr
            key={book._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
            className="hover:backdrop-blur-md cursor-pointer"
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-md:hidden">{book.author}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-md:hidden">{book.publishYear}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div className="flex gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-xl text-green-600 hover:text-green-700" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-xl text-yellow-600 hover:text-yellow-700" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-xl text-red-600 hover:text-red-700" />
                </Link>
              </div>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default BooksTable;
