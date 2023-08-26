export type ErrorResponse = {
  status: number;
  statusText: string;
  exception?: any;
  content?: any;
};

export type ApiResponse<T> = {
  error?: ErrorResponse;
  data?: T;
  status?: number;
};

export type QueryData<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
};

export type AsyncApiResponse<T> = Promise<ApiResponse<T>>;
