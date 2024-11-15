import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import RestaurantInfo from "./RestaurantInfo";
import NormalMenu from "./NormalMenu";

const Menu = () =>  {
    const params = useParams();
    console.log("params", params);
    const [resInfo, setResInfo] = useState([])
    const [normalMenu, setNormalMenu] = useState([])
    const [nestedMenu, setNestedMenu] = useState([])

    useEffect(()=>{
        getMenu()
    }, [])


    const getMenu = async() =>  {
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
            const json = await data.json();
            console.log("menuData",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            const menuCollection = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const restaurantInfo = json?.data?.cards[2]
            const menuList = menuCollection.filter((menuData)=>menuData?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            const nestedMenuList =  menuCollection.filter((menuData)=>menuData?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
            console.log("menuList", menuList);
            console.log("nestedMenu", nestedMenuList)
            console.log("restinfo", restaurantInfo)
            setResInfo(restaurantInfo);
        }
        catch(error){
            console.log("error", error)
        }
    }

    return(
        <div className="w-8/12 mx-auto">
        <RestaurantInfo {...resInfo?.card?.card?.info}/>
        
        </div>
    )
}

export default Menu