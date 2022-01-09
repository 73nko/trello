function Header() {
  const user = {
    name: "Dani",
    avatar: "https://eu.ui-avatars.com/api/?name=Dani",
  };

  function logout() {
    console.log("logout");
  }

  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <p>
        Hello <strong>{user.name}</strong>
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
