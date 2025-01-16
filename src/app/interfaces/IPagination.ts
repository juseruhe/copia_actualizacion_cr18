export interface IPagination {
  page: number;
  limit: number;
  total: number;
  pageSizeOptions?: number[];
  hidePageSize?: boolean;
}
