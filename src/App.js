import './App.css';
import AdManagement from './components/AdManagement';
import ContentCreation from './components/ContentCreation';
import Custom from './components/Custom';
import Reports from './components/Reports';
import SocialMediaManagement from './components/SocialMediaManagement';
import SectionHeading from './components/_common/SectionHeading';


function App() {
  return (
    <div className="App">
      <h1 className="font-SpaceAge text-2xl font-bold">Blxck<span className="yellow-stroke">marketing</span></h1>
      <h2 className="font-Russo text-lg text-white/90 leading-none">Service Packages</h2>
      <section className="text-md h-full max-w-[1600px] py-10 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="h-fit border-[1px] border-white rounded-md flex flex-col items-center gap-8 pb-10">
            <SectionHeading 
              title={'Basic'} 
              amount={'$750'}
              subheading={'For businesses that have content ready to be seen'}
            />
            <div className="flex flex-col items-center gap-8 px-4 h-full max-w-[400px]">
              <AdManagement />
              <ContentCreation level={"Basic"} />
              <SocialMediaManagement level={"Basic"} />
              <Reports level={"Basic"} />
            </div>
          </div>
          <div className="h-fit border-[1px] border-white rounded-md flex flex-col items-center gap-8 pb-10">
            <SectionHeading 
              title={'Standard'} 
              amount={'$1500'}
              subheading={'For businesses requiring moderate support with content creation'}
            />
            <div className="flex flex-col items-center gap-8 px-4 h-full max-w-[400px]">
              <AdManagement />
              <ContentCreation level={"Standard"} />
              <SocialMediaManagement level={"Standard"} />
              <Reports level={"Standard"} />
            </div>
          </div>
          <div className="h-fit border-[1px] border-white rounded-md flex flex-col items-center gap-8 pb-10">
            <SectionHeading 
              title={'Full'} 
              amount={'$2150'}
              subheading={'For businesses requiring full content creation & management services'}
            />
            <div className="flex flex-col items-center gap-8 px-4 h-full max-w-[400px]">
              <AdManagement />
              <ContentCreation level={"Pro"} />
              <SocialMediaManagement level={"Pro"} />
              <Reports level={"Pro"} />
            </div>
          </div>     
        </div>

        <div className="h-fit max-w-[1600px] border-[1px] border-white rounded-md">
          <div className="bg-white/10 py-4 border-b-[1px] border-white/80">
            <h2 className="font-SpaceAge text-xl">Custom</h2>            
            <p className="text-sm w-3/4 mx-auto">Choose your own adventure</p>
            <p>💡</p>
          </div>
          <Custom />
        </div>
      </section>

    </div>
  );
}

export default App;
