'use-client'

import { useGetTopChartsQuery } from "redux/services/deezerCore";

export async function loadCharts() {
    try{
        const response = await useGetTopChartsQuery({})
    
        if(response.error)  throw new Error(response?.error || "Unknown server error");
    
        return response.data
      }catch(e) {
        console.log('ERROR', e)
      }
}