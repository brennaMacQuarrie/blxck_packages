import { TbSquareRoundedCheckFilled } from "react-icons/tb";

export default function ContentCreation() {
   
    return (
        <div className="w-full px-4 flex flex-col items-center gap-5">
            <h3 className="font-Russo text-lg">Content Creation</h3>
            
            <ul className="list-outside text-left flex flex-col gap-5">
              <li><TbSquareRoundedCheckFilled className="inline mr-2 text-green-400" />Social Media Basic Management</li>
              <li><TbSquareRoundedCheckFilled className="inline mr-2 text-green-400" />Four Media Graphics Monthly</li>
              <li><TbSquareRoundedCheckFilled className="inline mr-2 text-green-400" />New Video Content Every Six Months</li>
              {/* <Dropdown title={'Google Ads'} items={GoogleAdsItems}/>
              <li><TbSquareRoundedCheckFilled className="inline mr-2 text-green-400" />Monthly Reports</li> */}
            </ul>            
        </div>
    )
}