export interface IResponse<T> {
  data: T[],
  pagination: {
    total_count: number,
    count: number,
    offset: number
  }
}

export interface IGifsResponse {
  title: string,
  user?: {
    username?: string
  }
  images: {
    fixed_width: {
      url: string
    }
  },
  import_datetime: string
}

export interface IAutocompleteResponse {
  name: string
}

export enum PaginatorEnum {
  TRENDING = 'TRENDING',
  SEARCH = 'SEARCH'
}
