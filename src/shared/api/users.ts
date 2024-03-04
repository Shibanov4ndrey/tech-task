import { api } from './api'
import { User } from "@shared";

interface UserResponse {
  results:  User[],
}


export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UserResponse, void>({
      query: () => ({
        url: '/?results=500',
        method: 'GET',
      }),
    }),
  })
})

export const { useGetUsersQuery } = usersApi

export const { endpoints: { getUsers } } = usersApi