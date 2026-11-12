export interface IRegisterResponse {
  message: string;
}

export interface IRegisterPayload {
  email: string;
  full_name: string;
  password: string;
  confirm_password: string;
}
