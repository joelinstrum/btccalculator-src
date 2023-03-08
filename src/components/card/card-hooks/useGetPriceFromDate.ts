import { useState, useEffect } from "react";

const useGetPriceFromDate = (fromDate?: string) => {
  const [priceFromDate, setPriceFromDate] = useState<string | null>(null);

  useEffect(() => {
    if (fromDate) {
      setPriceFromDate("2000");
    }
  }, [fromDate]);

  return priceFromDate;
};

export default useGetPriceFromDate;
