export default class LoginApi {
  checkLogin(login, password) {
    return password ? true : false;
  }
}
