import NavBar from "./components/NavBar/NavBar";
import Repositories from "./components/Repositories/Repositories";
import useFetchRepositories from "./useFetchRepositories";
const App = () => {
  useFetchRepositories();
  return ( 
    <div>
      <NavBar />
      <Repositories />
    </div>
   );
}
 
export default App;
