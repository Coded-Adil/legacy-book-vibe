import { IoDocumentOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";

const ListedBook = ({ book }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
    return (
        <div className="flex p-6 border rounded-xl gap-8">
            <div>
                <img className="max-h-[513px] w-[220px] p-12 bg-base-200" src={image} alt="" />
            </div>
            <div>
                <div className="space-y-2 mb-2">
                    <h2 className="text-4xl font-bold">{bookName}</h2>
                    <p className="text-xl">By: {author}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="font-bold text-xl">Tags:</span>
                    {
                        tags.map((tag, idx) => <div key={idx} className="badge badge-lg badge-outline bg-[#F3FEEC] text-[#23BE0A]">{tag}</div>)
                    }
                    <div className="flex">
                    <IoLocationOutline className="text-2xl"></IoLocationOutline>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-8 items-center my-4">
                    <div className="flex">
                        <IoIosContacts className="text-2xl"></IoIosContacts>
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex">
                        <IoDocumentOutline className="text-2xl"></IoDocumentOutline>
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <div className="flex justify-start gap-4 items-end pt-6 border-t-2 border-dashed">
                    <div className="btn bg-[#89CFFF] btn-md text-md font-bold rounded-full text-[#328EFF]">Category: {category}</div>
                    <div className="btn bg-yellow-100 btn-md text-md font-bold rounded-full text-yellow-500">Rating: {rating}</div>
                    <div className="btn bg-green-200 btn-md text-md font-bold rounded-full text-green-700">View Details</div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;