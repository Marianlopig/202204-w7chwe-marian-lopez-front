import { UserProfileStyles } from "./UserProfileStyles";

const UserProfile = ({ user }) => {
  return (
    <UserProfileStyles>
      <div className="container">
        <img src={user.image} alt="" />
      </div>
    </UserProfileStyles>
  );
};

export default UserProfile;
