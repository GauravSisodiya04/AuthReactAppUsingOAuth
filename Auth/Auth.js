import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.auth = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH01_DOMAIN,
      client_id: process.env.REACT_APP_AUTH01_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH01_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  login = () => {
    console.log(process.env);
    this.auth0.authorize();
  };
}
