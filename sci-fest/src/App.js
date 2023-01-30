import {Routes, Route} from "react-router-dom"
import { Main } from "./main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;


