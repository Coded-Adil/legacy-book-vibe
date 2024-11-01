import { useParams } from "react-router-dom";

const BookDetail = () => {
    const {bookId} = useParams();
    console.log(bookId);
    return (
        <div>
            <h2 className="text-5xl">Book Details {bookId}</h2>
        </div>
    );
};

export default BookDetail;