import { RatingList } from "./RatingList"

export const Component2 = ({ handleFilteredMovies, rating,setSortingCondition, handleOrder,setAscending}) => {

    return (
        <header className="flex flex-col md:flex-row items-center justify-between ml-10 text-white">
            <h1 className="text-xl mb-2">Popular</h1>
            <section className="flex gap-6 px-4">
                <RatingList rating={rating} ratings={[8, 7, 6]} handleFilteredMovies={handleFilteredMovies} />
                <label htmlFor="category"></label>
                <select aria-label="select sorting category" onChange={(e)=>setSortingCondition(e.target.value)} name="category" id="Category" className="text-black">
                    <option value="Date">Date</option>
                    <option value="Rating">Rating</option>
                </select>
                <label htmlFor="sorted"></label>
                <select aria-label="select order" onChange={handleOrder} name="sorted" id="sorted" className="text-black">
                    <option value="Ascending">Ascending</option>
                    <option value="Decending">Decending</option>
                </select>
            </section>
        </header>
    )
}