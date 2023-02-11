import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

function App() {
  return (
    <>
      <SectionWrapper 
        title="NFT replica store. Developed by - Josue Valdez"
        description="Buy, store, collect NFTS, exchange & earn crypto."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="A modern take on current user experience expectations on a topic that goes back centuries."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ACE Project is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Josue Valdez</span>
        </p>
        <span>** Made For Personal Display Of Development Skills ONLY **</span>
      </div>
    </>
  );
}

export default App;
