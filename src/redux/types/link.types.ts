export interface ICreateLinkPayload {
  original_url: string;
  slug: string;
}

export interface ICreateLinkResponse {
  succes: boolean;
  message: string;
}

export interface ILinks {
  id: string;
  slug: string;
  original_url: string;
  created_at: string;
}

export interface IMetadata {
  current_page: number;
  next: string;
  prev: string;
  total_page: number;
}

export interface IGetLinksResponse {
  succes: boolean;
  message: string;
  result: ILinks[];
  metadata: IMetadata;
}

export interface IDeleteLinkResponse {
  succes: boolean;
  message: string;
}