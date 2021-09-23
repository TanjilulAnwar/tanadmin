import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                <div className="userShowTop">
                    <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/9.jpg" 
                    alt="" 
                    className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Becker</span>
                        <span className="userShowUsertitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="useShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                   
                    <div className="useShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <div className="useShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitle">+ 880 15212 08467</span>
                    </div>
                    <div className="useShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="useShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitle">New Yor,USA</span>
                    </div>
                  
              
                    
                </div>
                 </div>
                <div className="userUpdate">

                </div>
            </div>
        </div>
    )
}
