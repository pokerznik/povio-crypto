type Quote = Record<string, QuoteDetails>;

interface QuoteDetails {
  price: number;
  percent_change_24h: number;
}

export interface Cryptocurrency {
  cmc_rank: number;
  symbol: string;
  quote: Quote;
}
