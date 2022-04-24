import { CondominiumResponse } from "./condominium-response";

export interface UserResponse {
  name: string;
  username: string;
  condominium: CondominiumResponse;
  createdAt: string;
  role: string;
}
