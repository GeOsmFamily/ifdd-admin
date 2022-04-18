export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  phone: number;
  role: number;
  created_at: Date;
  updated_at: Date;
}

export interface Data {
  token: string;
  user: User;
}

export interface LoginResponse {
  success: boolean;
  data: Data;
  message: string;
}
