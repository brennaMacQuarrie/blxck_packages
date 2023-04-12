export default function Custom() {
    return (
        <div className="p-10">
            <h3 className="font-Russo text-lg">Additional Services</h3>
            <div className="grid grid-cols-4 gap-6 my-8">
                <div className="border-[1px] border-white/20 rounded p-8">
                    <h4 className="text-blx-gold">Website (Re-)Building</h4>
                    <ul className="text-left">
                        <li>Wordpress</li>
                        <li>Squarespace</li>
                        <li>Webflow</li>
                        <li>Wix</li>
                    </ul>
                </div>
                <div className="border-[1px] border-white/20 rounded p-8">
                    <h4 className="text-blx-gold">Brand Design</h4>
                    <ul className="text-left">
                        <li>Logo</li>
                        <li>Colors</li>
                    </ul>
                </div>
                <div className="border-[1px] border-white/20 rounded p-8">
                    <h4 className="text-blx-gold">Strategy</h4>
                    <ul className="text-left">
                        <li>Long-term Planning</li>
                        <li>Multi-level Campaigns</li>
                    </ul>
                </div>
                <div className="border-[1px] border-white/20 rounded p-8">
                    <h4 className="text-blx-gold">Other?</h4>
                </div>
            </div>

        </div>
    )
}