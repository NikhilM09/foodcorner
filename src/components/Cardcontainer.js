import Restaurantcard from "./Restaurantcard"
import {useState, useEffect} from 'react'
import Shimmer from "./Shimmer"

const Cardcontainer = ({createdBy}) =>{
    const [restaurantCollection, setRestaurantCollection] = useState([])
    const [masterCollection, setMasterCollection] = useState([])
    const [searchText, setSearchText] = useState("")
    const [error, setError] = useState("");
    // let restaurantCollection = [
    //     {
    //         restaurantName:"Achija Veg Restaurant",
    //         starRating:"4.5",
    //         deliveryTime:"25-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"rmlcifdqtpoxdrdvet2s"
    //     },
    //     {
    //         restaurantName:"Chinese Wok",
    //         starRating:"4.0",
    //         deliveryTime:"20-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"e0839ff574213e6f35b3899ebf1fc597"
    //     },
    //     {
    //         restaurantName:"KFC",
    //         starRating:"4.5",
    //         deliveryTime:"20-40",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG"
    //     },
    //     {
    //         restaurantName:"McDonald's",
    //         starRating:"3.9",
    //         deliveryTime:"20-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/2801a82b-0761-40ef-9de0-906d150b1833_32399.jpg"
    //     },
    //     {
    //         restaurantName:"Achija Veg Restaurant",
    //         starRating:"4.5",
    //         deliveryTime:"25-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"rmlcifdqtpoxdrdvet2s"
    //     },
    //     {
    //         restaurantName:"Chinese Wok",
    //         starRating:"4.0",
    //         deliveryTime:"20-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"e0839ff574213e6f35b3899ebf1fc597"
    //     },
    //     {
    //         restaurantName:"KFC",
    //         starRating:"4.5",
    //         deliveryTime:"20-40",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG"
    //     },
    //     {
    //         restaurantName:"McDonald's",
    //         starRating:"3.9",
    //         deliveryTime:"20-30",
    //         cuisines:"Pizzas, Pastas",
    //         location:"Ghatkopar",
    //         imgId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/2801a82b-0761-40ef-9de0-906d150b1833_32399.jpg"
    //     }
    // ]

    const handleRating = () =>{
        const newCollection = restaurantCollection.filter(restaurant=>restaurant.info?.avgRating>=4.5);
        console.log("newCollection", newCollection);
        setRestaurantCollection(newCollection);
    }

    const handleSearch = () =>{
        const filteredData = masterCollection.filter(restaurant=>restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log("filtered data", filteredData);
        setRestaurantCollection(filteredData);
    }

    const getRestaurants = async() =>{
        try{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log("response", response);
        if(!response.ok){
            switch (response.status){
                case 400 : throw new error("Bad request, kndly check again");
                case 401 : throw new error("Authentication failed, kindly provide valid credentials");
                case 403 : throw new error("Forbidden content");
                case 404 : {
                    setError("Page not found")
                    throw new error("Not found");
                }
                default : throw new error("something went wrong")
            }
        }
        const json = await response.json();
        console.log("restaurantList", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setMasterCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch(error){
            console.log("error found in api", error)
            // setError(error.message)
        }
    }

    useEffect(()=>{
        getRestaurants()
    },[])

    console.log("component is rendered")
    if(error!=="") return <div className="text-red-500 text-4xl font-bold text-center">{error}</div>

    return(
        <>
        <div className="flex justify-between">
        <button className="bg-slate-400 p-2" onClick={handleRating}>Top rated restaurants</button>
        <div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="border-gray-500 border-2 mx-2 w-[500px]"/>
            <button className="bg-blue-400 px-2 py-1 rounded-md" onClick={handleSearch}>Search</button>
        </div>
        </div>
        {(restaurantCollection.length===0 && masterCollection.length!==0) ? 
            <div className="text-3xl text-center">There are no restaurants match your search</div>
            : restaurantCollection.length===0 && <div className="flex justify-center flex-wrap gap-4">{
                new Array(20).fill(0).map((card, index) => {return <Shimmer key={index}/>})
            }</div>
        }
        <div className='flex gap-4 flex-wrap justify-center'>
           {restaurantCollection.map((restaurant, index)=>{
            return (
                <Restaurantcard
                key={restaurant?.info?.id}
                {...restaurant.info}
                />
            )
           })}
        </div>
        </>
        
    )
}

export default Cardcontainer