function Layout({ user }) {
  return (
    <div>
      {!user ? (
        <p>You need to be logged to use the app</p>
      ) : (
        <p>The connected user is {user.name}</p>
      )}
    </div>
  );
}

export default Layout;
