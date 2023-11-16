import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import RowPost from "./components/RowPost";
import { originals,action,romantic,sci } from "./constants/urls";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title={'Netflix Originals'}/>
     <RowPost url={action} title={'Action Movies'} isSmall />
     <RowPost url={romantic} title={'Romantic Movies'} isSmall />
    <RowPost url={sci} title={'Thriller Movies'} isSmall />
    </div>
  );
}

export default App;
