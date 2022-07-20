export interface Conversation {
  uuid: string;
  read: boolean; // Has the message been read by the user
  profile_url: string | null; // URL to the profile picture of the user
  first_name: string;
  last_name: string;
  platform: Channel;
  last_message: Message | null;
  property: Property;
  reservation: Reservation;
}

export enum Channel {
  Airbnb = 'airbnb',
  Vrbo = 'vrbo',
  Booking = 'booking',
  Direct = 'direct',
}

export interface Message {
  text: string;
  received_at_date: string; // ISO 8601 date
}

export interface Property {
  uuid: string;
  name: string;
  thumbnail_url: string | null;
}

export interface Reservation {
  uuid: string;
  status: ReservationStatus;
  total: number;
  num_guests: number;
}

export enum ReservationStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Declined = 'declined',
  Cancelled = 'cancelled',
  Expired = 'expired',
}

export interface ConversationData {
  data: Conversation[];
}
