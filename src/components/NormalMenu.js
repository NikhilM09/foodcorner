import DishInfo from "./DishInfo"

const NormalMenu = ({title, itemCards}) => {
    return(
        <>
         <div className="font-bold">
            {title}
        </div>
        <div>
            {
                itemCards?.map((itemCard)=>{
                    return <DishInfo/>
                })
            }
        </div>
        </>
    )
}

export default NormalMenu