import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books';
import Book from './Book';

const ItemList = () => {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="itemlist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ItemList />);
