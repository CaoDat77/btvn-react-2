function ListUser({ users }) {
  const list = users.map((user, index) => <User user={user} key={index} />);
  return <div className="d-flex gap ">{list}</div>;
}

ListUser.propTypes = {
  users: PropTypes.arrayOf(UserType),
};
