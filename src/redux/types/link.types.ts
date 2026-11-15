export interface ICreateLinkPayload {
  original_url: string;
  slug: string;
}

export interface ICreateLinkResponse {
  succes: boolean;
  message: string;
}
