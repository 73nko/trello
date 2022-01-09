import { Fragment } from "react";
import "./header.scss";

function Header({ user, logout, login }) {
  return (
    <header>
      {!user ? (
        <button onClick={login}>Login</button>
      ) : (
        <Fragment>
          <img src={user.avatar} alt={user.name} />
          <p>
            Hello <strong>{user.name}</strong>
          </p>
          <button onClick={logout}>Logout</button>
        </Fragment>
      )}
    </header>
  );
}

export default Header;
