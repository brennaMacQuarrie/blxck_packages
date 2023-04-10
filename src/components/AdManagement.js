import Dropdown from "./_common/Dropdown";
import ListItem from "./_common/ListItem";

export default function AdManagement() {
    const GoogleAdsItems = [
        "Search Ads",
        "Google Map Ads",
        "Display Ads",
        "YouTube & Video Ads",
        "Shopping Ads",
        "Re-Marketing Ads",
    ]
    const GoogleSupervisionItems = [
        "Keyword Management",
        "Audience Management & Creation",
        "Conversion Tracking",
        "Campaign Optimization",
        "Campaign Budget Management"
    ]

    const SocialPlatformsItems = [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "TikTok"
    ]
    const SocialPlatformsSupervisionItems = [
        "Audience Management & Creation",
        "Tracking Pixel setup & Intall",
        "Shop Creation and Feed Management",
        "Conversion Tracking",
        "Campaign Optimization",
        "Re-Marketing",
    ]

    return (
        <div className="w-full px-4 flex flex-col items-center gap-5">
            <h3 className="font-Russo text-lg">Ad Management</h3>
            
            <ul className="list-outside text-left flex flex-col gap-5">
              <Dropdown title={'Google Ads'} items={GoogleAdsItems}/>
              <Dropdown title={'Google Ads: Daily Supervision & Maintenance'} items={GoogleSupervisionItems}/>
              <ListItem text={ 'Google Tag Manager' } />
              <ListItem text={ 'Google Analytics' } />
              <ListItem text={ 'Google My Business' } />
              <ListItem text={ 'Google Merchant Centre' } />
              <ListItem text={ 'Google Search Console' } />
              <Dropdown title={'Social Platform Ads'} items={SocialPlatformsItems}/>
              <Dropdown title={'Social Platform Ads: Daily Supervision & Maintenance'} items={SocialPlatformsSupervisionItems}/>
              <ListItem text={ 'Monthly Reports' } />
            </ul>            
        </div>
    )
}