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
            
            <ul className="w-full list-outside text-left flex flex-col gap-5">
              <ListItem available={true} text={ 'Full Website Audit' } />
              <Dropdown available={true} title={'Google Ads'} items={GoogleAdsItems}/>
              <Dropdown available={true} title={'Google Ads: Daily Supervision & Maintenance'} items={GoogleSupervisionItems}/>
              <ListItem available={true} text={ 'Google Tag Manager' } />
              <ListItem available={true} text={ 'Google Analytics' } />
              <ListItem available={true} text={ 'Google My Business' } />
              <ListItem available={true} text={ 'Google Merchant Centre' } />
              <ListItem available={true} text={ 'Google Search Console' } />
              <Dropdown available={true} title={'Social Platform Ads'} items={SocialPlatformsItems}/>
              <Dropdown available={true} title={'Social Platform Ads: Daily Supervision & Maintenance'} items={SocialPlatformsSupervisionItems}/>
            </ul>            
        </div>
    )
}