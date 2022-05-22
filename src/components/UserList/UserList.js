import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk } from "../../redux/thunks/usersThunk/usersThunk";
import UserProfile from "../UserProfile/UserProfile";
import { UserListStyles } from "./UserListStyles";

const UserList = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return (
    <UserListStyles>
      <div className="maincontainer">
        {users.map((user) => (
          <UserProfile user={user} />
        ))}
      </div>
    </UserListStyles>
  );
};

export default UserList;
