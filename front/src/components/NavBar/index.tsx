import { AuthContext } from "AuthContext";
import { useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getTokenData, isAuthenticated } from "util/auth";
import { getAuthData, removeAuthData } from "util/storage";
import "./styles.css";

const NavBar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });

    history.push("/");
  };

  return (
    <div className="NavBar-container">
      <h2>MovieFlix</h2>
      {authContextData.authenticated && (
        <div className="welcome-container">
          <span>Bem vindo(a): {getAuthData().userName}</span>
          <div className="btn-container">
            <a onClick={handleSubmit} href="#SAIR">
              SAIR
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
