export default function({colorsChange}) {
    
    return(
        <div className="flex gap-3 flex-1 mb-5">
            <span onClick={() => colorsChange("bg-yellow-500")} className="rounded-full bg-yellow-500 w-5 h-5 cursor-pointer"></span>
            <span onClick={() => colorsChange("bg-green-500")} className="rounded-full bg-green-500 w-5 h-5 cursor-pointer"></span>
            <span onClick={() => colorsChange("bg-sky-700")} className="rounded-full bg-sky-700 w-5 h-5 cursor-pointer"></span>
            <span onClick={() => colorsChange("bg-orange-500")} className="rounded-full bg-orange-500 w-5 h-5 cursor-pointer"></span>
        </div>
    )
}