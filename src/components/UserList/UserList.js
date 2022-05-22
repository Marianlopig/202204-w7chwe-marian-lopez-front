import UserProfile from "../UserProfile/UserProfile";
import { UserListStyles } from "./UserListStyles";

const UserList = () => {
  return (
    <UserListStyles>
      <div className="maincontainer">
        <UserProfile />
      </div>
    </UserListStyles>
  );
};

export default UserList;
