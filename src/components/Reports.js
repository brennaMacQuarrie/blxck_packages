import ListItem from "./_common/ListItem";

export default function Reports({ level }) {
    return (
        <div className="w-full px-4 flex flex-col items-center gap-5">
        <h3 className="font-Russo text-lg">Reporting</h3>
        
        <ul className="w-full list-outside text-left flex flex-col gap-5">
            <ListItem available={true} text={ 'Monthly Review Meetings' } /> 
            <ListItem available={true} text={ 'Monthly Reports' } /> 
            <ListItem available={level === 'Pro'} text={ 'Quarterly Reports' } /> 
            <ListItem available={level === 'Pro'} text={ 'Yearly Reports' } /> 

        </ul>            
    </div>
    )
}