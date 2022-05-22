import UserProfile from "../UserProfile/UserProfile";
import { UserListStyles } from "./UserListStyles";

const UserList = (users) => {
  return (
    <UserListStyles>
      <div className="maincontainer">
        <UserProfile />
      </div>
    </UserListStyles>
  );
};

export default UserList;
