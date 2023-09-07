export interface ICoffe {
  title: String;
  description: String;
  price: String;
  categories: Array<String>;
  photo_url: String;
}

export interface IDeliveryItem {
  id?: string;
  [key: string]: any;
}
