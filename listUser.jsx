function ListUser({ users }) {
  const list = users.map((user) => <User user={user} />);
  return <div className="d-flex gap ">{list}</div>;
}

ListUser.propTypes = {
  users: PropTypes.arrayOf(UserType),
};
