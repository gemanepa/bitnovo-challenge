type TCurrency = {
  symbol: string;
  name: string;
  min_amount: string;
  max_amount: string;
  image: string;
  blockchain: string;
};

type TTransaction = {
  confirmed: boolean;
  currency: string;
  amount: number;
  tx_hash: string;
  block?: number | null;
  created_at: string;
};

type TOrder_Created_Response = {
  payment_uri: string;
  identifier: string;
  web_url: string;
  address: string;
  tag_memo: string;
  input_currency: string;
  expected_input_amount: number;
  rate: number;
  notes: string;
  reference: null | string;
  fiat: string;
  language: string;
};

type TStoragedOrder = TOrder_Created_Response & {
  fiat_amount: number;
  currency_img: string;
};

type TOrder_Info_Response = {
  identifier: string;
  reference?: string | null;
  created_at: string;
  edited_at: string;
  status:
    | "NR"
    | "PE"
    | "AC"
    | "IA"
    | "CO"
    | "CA"
    | "EX"
    | "OC"
    | "RF"
    | "FA"
    | "DE";
  fiat_amount: number;
  crypto_amount?: number | null;
  unconfirmed_amount: number;
  confirmed_amount: number;
  currency_id: string;
  merchant_device_id: number;
  merchant_device: string;
  address?: string | null;
  tag_memo?: string | null;
  url_ko?: string | null;
  url_ok?: string | null;
  url_standby?: string | null;
  expired_time?: string | null;
  good_fee: boolean;
  notes: string;
  rbf?: boolean;
  safe: boolean;
  fiat:
    | "EUR"
    | "USD"
    | "GBP"
    | "ARS"
    | "AUD"
    | "BGN"
    | "BOB"
    | "BRL"
    | "CAD"
    | "CHF"
    | "CLP"
    | "COP"
    | "DKK"
    | "DOP"
    | "GEL"
    | "HUF"
    | "ISK"
    | "JPY"
    | "KRW"
    | "MXN"
    | "NOK"
    | "NZD"
    | "PEN"
    | "PLN"
    | "PYG"
    | "RON"
    | "SEK"
    | "SGD"
    | "SVC"
    | "UYU";
  language: string;
  percentage: number;
  received_amount: number;
  balance_based: string;
  internal_data: string;
  transactions: TTransaction[];
};

type TOrder = TStoragedOrder & TOrder_Info_Response;

export type {
  TCurrency,
  TOrder,
  TStoragedOrder,
  TOrder_Created_Response,
  TOrder_Info_Response,
  TTransaction,
};
