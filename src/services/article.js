import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '7d96fdaf95msh9019922b4604671p16d038jsnc9cbfc032c0a',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key','KEY');
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
})