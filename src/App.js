import NavBar from "./components/NavBar/NavBar";
import Repositories from "./components/Repositories/Repositories";
import useFetchRepositories from "./useFetchRepositories";
const App = () => {
  const {repositories, loading, error}=useFetchRepositories();
  return ( 
    <div>
      <NavBar />
      <Repositories repositories={repositories} loading={loading} error={error}/>
    </div>
   );
}
 
export default App;
