const BookItem = ({ book }) => {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
      </div>
    );
  };
  
  export default BookItem;