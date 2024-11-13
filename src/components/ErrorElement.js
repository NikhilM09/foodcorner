import { useRouteError } from "react-router-dom"


const ErrorElement = () =>{
    const error = useRouteError()
    console.log("error", error);
    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl font-bold text-red-400">Error code : {error.status}</h1>
            <h1 className="text-3xl font-bold text-red-400">{error.statusText}</h1>
            <h1 className="text-xl font-semibold">{error.data}</h1>
        </div>
    )
}

export default ErrorElement