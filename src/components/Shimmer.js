const Shimmer = () =>{
    return(
        <div className='w-[250px]'>
            <div className='rounded-2xl'>
                <div className='rounded-2xl w-full h-[200px] bg-[rgb(242,240,239)]'></div>
            </div>
            <div className='px-2 w-full flex flex-col gap-1 mt-2'>
            {/* <h1 className='font-bold'>Achija Veg Restaurants</h1> */}
            <h1 className='font-bold bg-[#f2f0ef] w-full h-2'></h1>
            <div className='flex justify-between w-full h-2'>
                {/* <div>⭐4.5</div> */}
                <div className="bg-[#f2f0ef] w-7"></div>
                {/* <div>25-30 mins</div> */}
                <div className="bg-[#f2f0ef] w-7"></div>
            </div>
            {/* <div>Pizzas, Pastas</div> */}
            <div className="bg-[#f2f0ef] w-full h-2"></div>
            {/* <div>Ghatkopar</div> */}
            <div className="bg-[#f2f0ef] w-full h-2"></div>
            </div>
        </div>
    )
}

// function Shimmer(){
//     <div>This is Shimmer component</div>
// }

export default Shimmer