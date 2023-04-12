export default function SectionHeading({ title, amount, subheading }) {
    return ( <div className={`w-full bg-gradient-to-r h-36 pt-4 rounded-t text-black border-b-[1px] border-white/80 
      ${title === 'Basic' && 'from-blx-blue to-blx-gold from-50%'} 
      ${title === "Standard" && 'from-blx-gold to-white from-50%'}
      ${title === "Full" && 'from-white/50 to-black from-10% text-white'}`}>
        <h2 className="font-SpaceAge text-2xl leading-none">{ amount }</h2>
        <h3 className="font-SpaceAge text-lg leading-none">{ title }</h3>
        <p className="text-sm w-3/4 mx-auto">{ subheading }</p>
      </div>
    )
}