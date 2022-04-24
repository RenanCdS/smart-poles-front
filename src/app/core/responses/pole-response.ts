import { CondominiumResponse } from "./condominium-response";

export interface PoleResponse {
  id: string;
  condominiumId: string;
  isGateway: string;
  createdAt: string;
  condominium: CondominiumResponse;
}
