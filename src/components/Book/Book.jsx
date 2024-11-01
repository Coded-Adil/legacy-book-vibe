import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookId, image, rating, category, tags, author, bookName } = book;
    return (
        <Link to={`books/:${bookId}`}>
            <div className="card border w-96 max-h-[650px] p-6">
                <figure className="bg-base-300 py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body space-y-3">
                    <div className="flex gap-4">
                        {
                            tags.map((tag, idx) => <div key={idx} className="badge badge-lg badge-outline bg-[#F3FEEC] text-[#23BE0A]">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title text-2xl">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-between border-t-2 pt-6 border-dashed">
                        <p className="font-semibold">{category}</p>
                        <div className="flex gap-2">
                            <p>{rating}</p>
                            <CiStar className="text-2xl"></CiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;