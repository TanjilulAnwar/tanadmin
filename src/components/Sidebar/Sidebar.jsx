import "./sidebar.css"
import {Home, Timeline, TrendingUp, 
    Person,Shop, Money,Report,
MailOutline,FeedbackOutlined,MessageOutlined, WorkOutline, BarChart } from "@material-ui/icons"
export default function Sidebar() {
    return (
        <div className="sidebar">
         <div className="sidebarWrapper">
         <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                     <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <Home className="sidebarIcon"/>
                            Home
                         </li>
                         <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                         </li>
                         <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                         </li>
                     </ul>
               
             </div>
             <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                     <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Users
                         </li>
                         <li className="sidebarListItem">
                            <Shop className="sidebarIcon" />
                            Products
                         </li>
                         <li className="sidebarListItem">
                            <Money className="sidebarIcon" />
                            Transactions
                         </li>
                         <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                         </li>
                     </ul>
               
             </div>
             <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Notifications </h3>
                     <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                         </li>
                         <li className="sidebarListItem">
                            <FeedbackOutlined className="sidebarIcon" />
                            Feedback
                         </li>
                         <li className="sidebarListItem">
                            <MessageOutlined className="sidebarIcon" />
                            Messages
                         </li>
                     </ul>
               
             </div>
             <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Stuff  </h3>
                     <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                         </li>
                         <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                         </li>
                         <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                         </li>
                     </ul>
               
             </div>
         </div>
        </div>
    )
}
