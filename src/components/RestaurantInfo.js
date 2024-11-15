const RestaurantInfo = ({name, avgRating,totalRatingsString, costForTwoMessage, cuisines,areaName, sla}) => {
    return(
        <div className="flex flex-col mb-4 rounded-xl gap-2 border-[1px] p-3 border-gray-600">
            <div className="text-2xl font-bold">{name}</div>
            <div className="flex font-semibold gap-2">
                <div>
                    ⭐{avgRating} ({totalRatingsString})
                </div>
                <div>
                    {costForTwoMessage}
                </div>
            </div>
            {cuisines && <div className="text-orange-600 underline font-semibold">{cuisines.join(", ")}</div>}
            <div className="text-gray-400 font-semibold">{areaName}</div>
            <div className="font-semibold">{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</div>
        </div>
    )
}   

export default RestaurantInfo