interface IRoiCard {
  title: string;
  ticker: string;
  fullName?: string;
  investment: number | string | undefined | null;
  purchasePrice: number | string | undefined | null;
  purchasePriceWhen?: number | string | null;
  sellPrice: number | string | undefined | null;
  sellPriceWhen?: number | string | null;
}
