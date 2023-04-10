import './App.css';
import AdManagement from './components/AdManagement';
import ContentCreation from './components/ContentCreation';
import SectionHeading from './components/_common/SectionHeading';


function App() {
  return (
    <div className="App">
      <h1 className="font-SpaceAge text-blx-gold text-2xl font-bold">Blxck<span className="yellow-stroke">marketing</span> service packages</h1>
      <section className="text-base h-full mx-8 py-10 grid grid-cols-3 gap-4">
        <div className="h-fit border-[1px] border-white rounded-md h-fit flex flex-col gap-8 pb-6">
          <SectionHeading title={'Basic'} subheading={'For businesses that have content ready to be seen'}/>
          <AdManagement />
          <ContentCreation />
        </div>
        <div className="h-fit border-[1px] border-white rounded-md h-fit flex flex-col gap-8 pb-6">
          <SectionHeading title={'Standard'} subheading={'For businesses requiring moderate support with content creation'}/>
          <AdManagement />
        </div>
        <div className="h-fit border-[1px] border-white rounded-md h-fit flex flex-col gap-8 pb-6">
          <SectionHeading title={'Full'} subheading={'For businesses requiring full content creation & management services'}/>
          <AdManagement />
        </div>      
      </section>
        <div className="h-fit border-[1px] border-white rounded-md h-fit flex flex-col gap-8 pb-6">
          <div className="bg-white/10 py-4 border-b-[1px] border-white/80">
            <h2 className="font-SpaceAge text-xl">Custom</h2>            
            <p className="text-sm w-3/4 mx-auto">Choose your own adventure</p>
            <p>💡</p>
          </div>
          {/* <AdManagement /> */}
        </div>
    </div>
  );
}

export default App;
