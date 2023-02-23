import {Routes, Route} from "react-router-dom"
import { Main } from "./main";
import { S_i } from "./studentinterface";
import { Login } from "./login";
import { DownloadFile } from "./projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="projects" element={<DownloadFile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:id" element={<S_i/>}/>
      </Routes>
    </div>
  );
}

export default App;


