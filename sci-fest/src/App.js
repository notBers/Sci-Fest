import {Routes, Route} from "react-router-dom"
import { Main } from "./main";
import { S_i } from "./studentinterface";
import { Login } from "./login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/paths/login" element={<Login/>}/>
        <Route path="/:id" element={<S_i/>}/>
      </Routes>
    </div>
  );
}

export default App;


