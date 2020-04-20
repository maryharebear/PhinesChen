export type Token = {
  tokenType: String;
  accessToken: String;
  refreshToken: String;
  expiresIn: String;
}

export type User = {
  id: String;
  name: String;
  companyName: String;
  email: String;
  donatedFood: Array<String>;
  requestedFood: Array<String>;
  role: String;
}

export type ProfileProps = {
  token: Token;
  user: User;
  location: any;
};
