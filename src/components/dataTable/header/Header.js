import { Avatar, Input } from "@material-ui/core";
import {
  MailOutline,
  NotificationsOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlined />
        <Input placeholder="Search here..." />
      </div>

      <div className="header__right">
        <div className="header__rightIcons">
          <div>
            <NotificationsOutlined />
          </div>
          <div>
            <MailOutline />
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
