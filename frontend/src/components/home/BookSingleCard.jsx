import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard>
      <div 
        className='backdrop-blur-lg bg-white/40 border border-white/20 rounded-xl px-4 py-2 m-4 relative transition-all duration-300 hover:shadow-xl hover:bg-white/60'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          className='absolute top-1 right-2 px-4 py-1 backdrop-blur-md bg-red-300/70 rounded-lg'
        >
          {book.publishYear}
        </motion.div>
        
        <h4 className='my-2 text-gray-600/90'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-sky-400/90 text-2xl' />
          <h2 className='my-1 text-gray-800/90'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-sky-400/90 text-2xl' />
          <h2 className='my-1 text-gray-800/90'>{book.author}</h2>
        </div>
        
        <motion.div 
          className="flex justify-between items-center gap-x-2 mt-4 p-4"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          <BiShow
            className='text-3xl text-blue-500/90 hover:text-blue-700 cursor-pointer transform transition-transform hover:scale-110'
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
          </Link>
        </motion.div>
        
        {showModal && (
          <BookModal book={book} onClose={() => setShowModal(false)} />
        )}
      </div>
    </AnimatedCard>
  );
};

export default BookSingleCard;
