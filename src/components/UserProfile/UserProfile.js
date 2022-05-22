import { UserProfileStyles } from "./UserProfileStyles";

const UserProfile = () => {
  return (
    <UserProfileStyles>
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </UserProfileStyles>
  );
};

export default UserProfile;
