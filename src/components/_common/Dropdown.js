import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { TbCircleChevronUp } from "react-icons/tb";
import ListItem from "./ListItem";

export default function Dropdown ({ title, items, available }) {
    const [isOpen, setIsOpen] = useState(false)

    const renderItems = items.map((item) => <li><BsArrowReturnRight className="inline mr-2 h-4 w-4" />{ item }</li>)
    const onToggleView = () => {
        setIsOpen(isOpen => !isOpen)
    }
    return ( <li>
        <div className="flex justify-between items-center gap-2">
            <ListItem available={available} text={ title } />
            <button onClick={onToggleView}>
                <TbCircleChevronUp className={`inline float-right h-6 w-6 text-gray-500 transition-all duration-300 ${isOpen ? "-rotate-180 text-gray-100" : "rotate-0"}`} />
            </button>
        </div>
        <ul className={`text-md pl-6 md:pl-10 list-inside ${isOpen ? "visible" : "hidden"}`} >
            { renderItems }
        </ul>
      </li>

    )
}
