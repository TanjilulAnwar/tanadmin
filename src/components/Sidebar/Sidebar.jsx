import "./sidebar.css"
import {Home, Timeline, TrendingUp } from "@material-ui/icons"
export default function Sidebar() {
    return (
        <div className="sidebar">
         <div className="sidebarWrapper">
             <div className="sidebarMenu">
                 <h3 className="siderbarTitle">Dashboard  </h3>
                     <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <Home/>
                            Home
                         </li>
                         <li className="sidebarListItem">
                            <Timeline/>
                            Analytics
                         </li>
                         <li className="sidebarListItem">
                            <TrendingUp/>
                            Sales
                         </li>
                     </ul>
               
             </div>
         </div>
        </div>
    )
}
