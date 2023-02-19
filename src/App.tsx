import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const App = () => {
  return (
    <Auth0Provider
      domain="chembeeragaton.jp.auth0.com"
      clientId="ZfN660B0ucf4jCIUDTD01GFzwq29RMuJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
        // redirect_uri: "https://chemagaton24.github.io/AuthODemo",
      }}
    >
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Auth0Provider>
  );
};

export default App;
