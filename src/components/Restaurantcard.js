const Restaurantcard = ({counterValue,name, avgRating, sla, cuisines, locality, cloudinaryImageId}) => {
    // console.log("what is props????", props)
    // const {restaurantName, starRating, deliveryTime, cuisines, location} = props
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return(
        <div className='w-[250px]'>
            {/* <div className='rounded-2xl'>
                <img className='rounded-2xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmlcifdqtpoxdrdvet2s" alt="resImage"/>
            </div> */}
            <div>{counterValue}</div>
            <div className='rounded-2xl'>
                <img className='rounded-2xl w-full h-[200px] object-cover' src={IMG_URL+cloudinaryImageId} alt="resImage"/>
            </div>
            <div className='px-2'>
            {/* <h1 className='font-bold'>Achija Veg Restaurants</h1> */}
            <h1 className='font-bold'>{name}</h1>
            <div className='flex justify-between'>
                {/* <div>⭐4.5</div> */}
                <div>⭐{avgRating}</div>
                {/* <div>25-30 mins</div> */}
                <div>{sla?.deliveryTime}mins</div>
            </div>
            {/* <div>Pizzas, Pastas</div> */}
            <div>{cuisines.join(", ")}</div>
            {/* <div>Ghatkopar</div> */}
            <div>{locality}</div>
            </div>
        </div>
    )
}

export default Restaurantcard