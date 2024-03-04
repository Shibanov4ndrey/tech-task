import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { API_URL } from "@/shared/config";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}/api`,
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({})
})