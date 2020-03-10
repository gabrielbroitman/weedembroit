import { AddressInterface } from "./address.interface";
import { ContactInterface } from "./contact.interface";

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
  dateCreate?: Date;
  isValid?: boolean;
}
