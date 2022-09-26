import { useEffect, useState } from "react";
import { atlantiaApi } from "../api";
import { getCategories, getSeries } from "../helpers";
import { PriceEvolution, SerieObject } from "../interface";



export const useLines = () => {
    const [seriesProducts, setSeriesProducts] = useState<SerieObject[]>([]);
    const [dates, setDates] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPresenceProducts = async () => {
        try {
          const response = await atlantiaApi.get<PriceEvolution[]>('/price-evolution-chart');
          const arrDates = getCategories(response.data);
          setDates(arrDates);
          const arrSeries: SerieObject[] = getSeries(response.data);  
          setSeriesProducts(arrSeries);
        } catch (error) {
          setError(true);
        }
    };
    getPresenceProducts();
  },[]);

  return {
      dates,
      seriesProducts,
      error
  }
}
