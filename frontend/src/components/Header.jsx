import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-sky-700 hover:text-sky-600">
            BookStore
          </Link>
          <Link 
            to="/books/create"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition duration-200 flex items-center gap-2"
          >
            <span>Add Book</span>
            <span className="text-xl">+</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header; 