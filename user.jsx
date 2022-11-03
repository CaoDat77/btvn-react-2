function User({ user }) {
  return (
    <div className="item">
      <div className="center">
        <img src={user.avatar} alt={user.fullname} />
        <p className="name">{user.fullname}</p>
        <button>VIEW PROFILE</button>
      </div>
    </div>
  );
}

const UserType = PropTypes.exact({
  id: PropTypes.string,
  fullname: PropTypes.string,
  avatar: PropTypes.string,
  job: PropTypes.string,
});

User.propTypes = {
  user: UserType,
};
