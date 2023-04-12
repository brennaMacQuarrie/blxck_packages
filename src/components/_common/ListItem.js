import CheckMark from "./CheckMark";
import UnChecked from "./UnChecked";

export default function ListItem ({ text, available }) {
    return (              
        <li className="w-full flex justify-start items-center">
            { available ? <CheckMark /> : <UnChecked /> }
            <p className={`${!available && 'text-white/50'} w-full`}>
                { text }
            </p>
        </li>
    )
}