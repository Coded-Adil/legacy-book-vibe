import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    console.log(bookId, id)
    const book = data.find(book => book.bookId == id);
    console.log(book);
    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img
                    src={image}
                    className="max-h-[564px] bg-base-200 p-16 rounded-lg" />
                <div>
                    <div className="border-b-2 space-y-2 py-2">
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p>By: {author}</p>
                    </div>
                    <p className="border-b-2 font-bold py-2">{category}</p>
                    <p className="border-b-2 py-2"><span className="font-bold">Review:</span> {review}</p>
                    <div className="flex gap-4 py-2">
                        <p className="text-lg font-bold">Tags: </p>
                        {
                            tags.map((tag, idx) => <div key={idx} className="badge badge-lg badge-outline bg-[#F3FEEC] text-[#23BE0A]">{tag}</div>)
                        }
                    </div>
                    <div className="flex gap-20 mb-4">
                        <ul className="space-y-2">
                            <li>Number of Pages:</li>
                            <li>Publisher:</li>
                            <li>Year of Publishing:</li>
                            <li>Rating:</li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="font-bold">{totalPages}</li>
                            <li className="font-bold">{publisher}</li>
                            <li className="font-bold">{yearOfPublishing}</li>
                            <li className="font-bold">{rating}</li>
                        </ul>
                    </div>
                    <div className="flex gap-8">
                        <button className="btn text-xl font-bold btn-xl btn-outline">Read</button>
                        <button className="btn text-xl font-bold btn-xl bg-[#50B1C9] text-white hover:text-black hover:bg-[#5586a2]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;