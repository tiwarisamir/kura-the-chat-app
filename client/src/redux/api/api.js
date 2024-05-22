import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER}/api/v1/` }),
  tagTypes: ["Chat"],

  endpoints: (builder) => ({
    myChatS: builder.query({
      query: () => ({
        url: "chat/my",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),
  }),
});

export default api;

export const { useMyChatSQuery } = api;
