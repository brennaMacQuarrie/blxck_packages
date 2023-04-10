import CheckMark from "./CheckMark";

export default function ListItem ({ text }) {
    return (              
        <li className="flex justify-start items-center"><CheckMark />{ text }</li>
    )
}