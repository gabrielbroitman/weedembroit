import { AddressInterface } from './../interfaces/address.interface';
import { CategoryInterface } from '../interfaces/category.interface';
import { ContactInterface } from '../interfaces/contact.interface';

export class CreateCampaignDTO {
  title: string;
  destination: string;
  degreeKinship: string;
  userId;
  favoredName: string;
  address: AddressInterface;
  category: CategoryInterface;
  categoryId: string;
  description: string;
  value: number;
  contact: ContactInterface;
}
