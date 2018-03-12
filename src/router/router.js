import Login from "../components/login/login";

export default class Router {
  routeChangeHandler(routeParam) {
    
    switch(routeParam) {
    case "login":
      new Login().setupComponent();
      //Check how url can be changed. Right now after refresh it tries to find /login document;
      // window.history.replaceState("login", "Login", "/login");
      break;
    }
  }
}
