export interface Hosting {
  id: string;
  name: string;
  title: string;
  type: string;
  description: string;
  ability: number;
  rooms: number;
  phone: number;
  email: string;
  payment_method: string[];
  images: string[];

  amphitryon: {
    amphitryon_id: string;
    name: string;
    lastname: string;
    email: string;
    shift: string;
    status: string;
  };

  location: {
    location_id: string;
    country: string;
    city: string;
    adress: string;
    area: string;
    latitude: string;
    longitude: string;
  };

  rule: {
    rule_id: string;
    title: string;
    category: string;
    description: string;
    penalty: string;
    created_at: string;
    updated_at: string;
    status: string;
  };

  service: {
    service_id: string;
    name: string[];
    accessibility: string;
  };

  additional: {
    additional_id: string;
    service: string;
    cost: number;
    status: string;
  }[];

  review: {
    review_id: string;
    room_id: string;
    customer_id: string;
    rating: number;
    comment: string;
    created_at: string;
    updated_at: string;
  };

  room: {
    room_id: string;
    number: number;
    images: string[];
    discounts: number;
    price_per_night: number;
    type: string;
    floor: number;
    beds: number;
    bathroom: number;
  };
}