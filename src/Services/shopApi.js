import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../DataBases/fireBase";

export const shopApi = createApi({

    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProducts: builder.query({
            query: () => `products.json`
        }),
        getSubCategoriesByCategory: builder.query({
            query: (category) => `subCategories.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        })
    })

})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetSubCategoriesByCategoryQuery, useGetProductsByCategoryQuery} = shopApi