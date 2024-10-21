import Cardcontainer from "./Cardcontainer"

const Body = () =>{
    const author = "nikhil"
    return(
    <>
        <div>This is body component</div>
        <div className='mx-10'>
            <div>Carousel component</div>
            <div className='flex justify-between'>
                <div>Searchbar</div>
                <div>Filters</div>
            </div>
            <Cardcontainer createdBy={author}/>
        </div>
    </>
    )
}

export default Body