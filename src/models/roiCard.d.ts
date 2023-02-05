interface IRoiCard {
  title: string;
  ticker: string;
  fullName?: string;
  investment: number | string | undefined | null;
  purchasePrice: number | string;
  purchasePriceWhen?: number | string | null;
  sellPrice: number | string;
  sellPriceWhen?: number | string;
  useCurrentPricePurchase?: string;
  useCurrentPriceSell?: string;
}
