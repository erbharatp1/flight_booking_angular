import { Passengers } from "./passengers";

export class Booking {

  bookingId: number;
  pnrNo: number;
  origin: string;
  destination: string;
  trip: string;
  journeyFromDate: Date;
  journeyToDate: Date;
  mealOnePreference: string;
  mealRoundPreference: string;
  price: number;
  ticketStatus: string;
  discount: number;
  userId: number;
  userIdUpdate: number;
  noOfPassengers: number;
  createdDate: Date;
  id: any;
  flightId: number;
  passengerList: Array<Passengers>;
  depature: any;



}
