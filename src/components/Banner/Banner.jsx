import BannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl min-h-96 mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg" />
                <div className='space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-2xl bg-green-500 text-xl text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;