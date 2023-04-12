import Dropdown from "./_common/Dropdown";
import ListItem from "./_common/ListItem";

export default function ContentCreation({ level }) {
   const VideoContentItems = [
    'Teasers',
    'Story Clips',
    'Behind the Scenes',
    'Studio Space Available Upon Request'
   ]

   const PhotoContentItems = [
    'Edited',
    'Studio Space Available Upon Request'
   ]

    return (
        <div className="w-full px-4 flex flex-col items-center gap-5">
            <h3 className="font-Russo text-lg">Content Creation</h3>
            
            <ul className="w-full list-outside text-left flex flex-col gap-5">
              <ListItem available={level !== 'Basic'} text={"Professional Graphic Design"}/>
              <ListItem 
                available={level !== 'Basic'} 
                text={`${level === 'Standard' ? '4' : level === 'Pro' ? '8' : ''} Media Graphics Monthly`}
              />

              <ListItem available={level !== 'Basic'} text={"Professional Photography"} />
              <Dropdown 
                available={level !== 'Basic'} 
                title={`New Image Content ${level === 'Standard' ? 'Every 6 Months' : level === 'Pro' ? 'Every 3 Months' : ''}`} 
                items={PhotoContentItems} 
              />

              <ListItem available={level !== 'Basic'} text={"Professional Videography"} />
              <Dropdown     
                available={level !== 'Basic'} 
                title={`New Video Content ${level === 'Standard' ? 'Every 6 Months' : level === 'Pro' ? 'Every 3 Months' : ''}`} 
                items={VideoContentItems} 
              />
            </ul>            
        </div>
    )
}