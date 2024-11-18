import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SearchBar from '../components/home/SearchBar';
import Header from '../components/Header';
import GlassmorphicCard from '../components/common/GlassmorphicCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setFilteredBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <GlassmorphicCard className="p-8 rounded-xl">
          <div className="mb-8 space-y-6">
            <SearchBar onSearch={handleSearch} />
            <div className="flex justify-center gap-4">
              <button
                className={`px-6 py-2 rounded-lg transition duration-200 ${
                  showType === 'table'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-sky-600 border border-sky-600 hover:bg-sky-50'
                }`}
                onClick={() => setShowType('table')}
              >
                Table View
              </button>
              <button
                className={`px-6 py-2 rounded-lg transition duration-200 ${
                  showType === 'card'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-sky-600 border border-sky-600 hover:bg-sky-50'
                }`}
                onClick={() => setShowType('card')}
              >
                Card View
              </button>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/20">
            <h1 className="text-2xl font-semibold text-gray-800/90 mb-6">
              Books Collection ({filteredBooks.length})
            </h1>
            
            {loading ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <div className={showType === 'table' ? 'overflow-x-auto' : ''}>
                {showType === 'table' ? (
                  <BooksTable books={filteredBooks} />
                ) : (
                  <BooksCard books={filteredBooks} />
                )}
              </div>
            )}
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default Home;
