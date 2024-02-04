import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home=()=> {
    const [books, setBooks] = useState([]);
    const [loading, setLoading]=useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5555/books')
        .then((res)=>{
            setBooks(res.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })    
    },[]);
    return (
      <div className='container mx-auto p-8'>
        <div className='flex items-center justify-between mb-8'>
          <div className='flex space-x-4'>
            <button
              className={`bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300 ${
                showType === 'table' ? 'text-white font-bold' : 'text-blue-900'
              }`}
              onClick={() => setShowType('table')}
            >
              Table View
            </button>
            <button
              className={`bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300 ${
                showType === 'card' ? 'text-white font-bold' : 'text-blue-900'
              }`}
              onClick={() => setShowType('card')}
            >
              Card View
            </button>
          </div>
          <Link to='/books/create' className='text-blue-800'>
            <MdOutlineAddBox className='text-4xl' />
          </Link>
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-4'>Psychological Books List</h1>
          {loading ? <Spinner /> : showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
        </div>
      </div>
    );
};

export default Home
