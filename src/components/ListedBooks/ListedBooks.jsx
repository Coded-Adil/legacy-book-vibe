import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredInWishList, getStoredReadList } from '../../utility/addToDb';
import ListedBook from '../ListedBook/ListedBook';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedWishList = getStoredInWishList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);
        console.log(storedWishList, storedWishListInt);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setReadList(readBookList);
        setWishList(wishBookList);
    }, []);
    return (
        <div>
            <h2 className="text-5xl my-8">Listed Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            readList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='space-y-6 my-10'>
                        {
                            wishList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;