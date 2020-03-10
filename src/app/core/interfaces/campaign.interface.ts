import { AddressInterface } from "./address.interface";
import { ContactInterface } from "./contact.interface";
import { CategoryInterface } from './category.interface';

export interface CampaignInterface {
  title?: string;
  description?: string;
  destination?: string;
  address?: AddressInterface;
  contact?: ContactInterface;
  userCreateId?: number;
  categoryId?: number;
  degreeKinship?: string;
  urlImage?: string;
  category?: CategoryInterface;
  active?;
  status?;

  percentageCompleted;
  user;
  approvedDate;
  expireIn;
  daysToExpire;
  countDonators;
  dateCreate?: Date;
  _id?;
  isValid?: boolean;
}
