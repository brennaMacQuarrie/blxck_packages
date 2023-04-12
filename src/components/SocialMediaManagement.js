import Dropdown from "./_common/Dropdown";
import ListItem from "./_common/ListItem";

export default function SocialMediaManagement({ level }) {
    const GrowthActionsItems = [
        'Hashtag Management',
        'Related Account Research',
        'Trend Identification',
        'Brand Itentity Support & Development'
    ]

    return (
        <div className="w-full px-4 flex flex-col items-center gap-5">
            <div>
                <h3 className="font-Russo text-lg">Social Media Management</h3>
                <span className="text-sm">Facebook & Instagram</span>
            </div>
            
            <ul className="w-full list-outside text-left flex flex-col gap-5">
              <ListItem available={level !== 'Basic'} text={"Social Media Post Scheduling"}/>
              <ListItem available={level !== 'Basic'} text={"Comment & DM Response Management"}/>
              <ListItem available={level === 'Pro'} text={"Content Strategy & Promotion Support"}/>
              <ListItem available={level === 'Pro'} text={"Engagement Strategy"}/>
              <ListItem available={level === 'Pro'} text={"Performance Tracking"}/>
              <Dropdown 
                available={level === 'Pro'}
                title={"Social Media Growth Actions"} 
                items={GrowthActionsItems} 
              />
            </ul>            
        </div>
    )
}