import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"
export default function WidgetSm() {
    return (
        <div className= "widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" alt="Person" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alex Sharp</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" alt="Person" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alex Sharp</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" alt="Person" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alex Sharp</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                    </button>
                </li> 
                <li className="widgetSmListItem">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" alt="Person" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alex Sharp</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" alt="Person" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Alex Sharp</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
