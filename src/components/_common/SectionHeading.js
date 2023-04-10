export default function SectionHeading({ title, subheading }) {
    return ( <div className={`bg-gradient-to-r h-28 pt-4 text-black border-b-[1px] border-white/80 
      ${title === 'Basic' && 'from-blx-blue to-blx-gold from-50%'} 
      ${title === "Standard" && 'from-blx-gold to-white from-50%'}
      ${title === "Full" && 'from-white via-black from-5% to-black from-50% text-white'}`}>
        <h2 className="font-SpaceAge text-xl">{ title }</h2>
        <p className="text-sm w-3/4 mx-auto">{ subheading }</p>
      </div>
    )
}