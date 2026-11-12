export interface IRegisterResponse {
  message: string;
}

export interface IRegisterPayload {
  email: string;
  full_name: string;
  password: string;
  confirm_password: string;
}

export interface ILoginResponse {
  message: string;
  result: {
    Token: string;
  };
}

export interface ILoginPayload {
  email: string;
  password: string;
}
