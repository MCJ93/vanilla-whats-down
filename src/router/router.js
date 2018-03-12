import Login from "../components/login/login";

export default class Router {
  routeChangeHandler(routeParam) {
    
    switch(routeParam) {
    case "login":
      new Login().setupComponent();
      break;
    }
  }
}
