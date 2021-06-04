import {useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Repositories from "./components/Repositories/Repositories";
import useFetchRepositories from "./useFetchRepositories";
const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {repositories, loading, error, hasMore}=useFetchRepositories(currentPage);
  return ( 
    <div>
      <NavBar />
      <Repositories repositories={repositories} loading={loading} error={error} setCurrentPage={setCurrentPage} hasMore={hasMore}/>
    </div>
   );
}
 
export default App;
