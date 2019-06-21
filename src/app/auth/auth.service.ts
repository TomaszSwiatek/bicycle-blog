import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService {
  // we store created user
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString() //we re created fake id - which has to be universal before we connect to fb
    };
  }
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString() //later we will change that logic to other
    };
  }
  logout() {
    this.user = null;
  }

  //   to get access to user we have to create such a method:

  getUser() {
    return { ...this.user }; //we use spread operator to dont mutate data saved by user. so we work on copy.
  }
  //   method checkin is the user auth
    isAuth(): boolean {
    return this.user !== null;
  }
}
