import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText"> 
              <b>Sarah Cavazos</b> and <b>2 others</b> have a birthday today!
            </span>
          </div>
          <img className="rightbarAd" src="assets/ad.jpg" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
    </div>
  );
}
