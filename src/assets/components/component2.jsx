import { RatingList } from "./RatingList"

export const Component2 = ({ handleFilteredMovies, rating,setSortingCondition, handleOrder,setAscending}) => {

    return (
        <header className="flex flex-col md:flex-row items-center justify-between ml-10 text-white">
            <h1 className="text-xl mb-2">Popular</h1>
            <section className="flex gap-6 px-4">
                <RatingList rating={rating} ratings={[8, 7, 6]} handleFilteredMovies={handleFilteredMovies} />
                <select aria-label="sorting catagory" onChange={(e)=>setSortingCondition(e.target.value)} name="category" id="Category" className="text-black">
                    <option value="">Sort By</option>
                    <option value="date">Date</option>
                    <option value="rating">Rating</option>
                </select>
                <select aria-label="display order" onChange={handleOrder} name="sorted" className="text-black">
                    <option value="">Order</option>
                    <option value="ascending">Ascending</option>
                    <option value="deccending">Decending</option>
                </select>
            </section>
        </header>
    )
}