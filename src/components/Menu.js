import { useParams } from "react-router-dom"
import {useEffect} from 'react'

const Menu = () =>  {
    const params = useParams();
    console.log("params", params);

    useEffect(()=>{
        getMenu()
    }, [])


    const getMenu = async() =>  {
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
            const json = await data.json();
            console.log("menuData",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            const menuCollection = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const menuList = menuCollection.filter((menuData)=>menuData?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            const nestedMenuList =  menuCollection.filter((menuData)=>menuData?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
            console.log("menuList", menuList);
            console.log("nestedMenu", nestedMenuList)
        }
        catch(error){
            console.log("error", error)
        }
    }

    return(
        <h1>This is menu component</h1>
    )
}

export default Menu