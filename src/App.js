import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        {/* <div className="others">other pages</div> */}
      </div>
    </div>
  );
}

export default App;
