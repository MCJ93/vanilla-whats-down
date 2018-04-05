import Login from "../components/login/login";
import Messenger from "../components/messenger/messenger";
import PageNotFound from "../components/pageNotFound/pageNotFound";

export function routeChangeHandler() {
  const pathName = window.location.pathname.slice(1);
  switch(pathName) {
  case "":
  case "login":
    new Login().setupComponent();
    break;
  case "messenger":
    new Messenger().setupComponent();
    break;
  default:
    new PageNotFound().setupComponent();
  }
}
  
export function changeUrl(routeParam) {
  window.location.pathname = routeParam;
}
