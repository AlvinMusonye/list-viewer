import { useState } from "react";
import BookItem from "./Bookitem"; 

const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  {id: 4, title:"Matatu Culture", author:"Alvinjr101"},
  {id: 5, title:"Bad Morning", author:"Nba Youngboy"},
  {id: 6, title:"Matatu C", author:"Alvinjr101"},
  {id: 7, title:"Rong Cypher", author:"Wakadinali"},
  {id:8, title:"morning Coffe", author:"Melivia"},
  {id: 9, title:"Africa", author:"Malcom X"},
];

const BookList = () => {
  const [books] = useState(booksData);
  const [searchQuery, setSearchQuery] = useState("");


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
   
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border  p-2 rounded w-full mb-4"
      />

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sky-400">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;