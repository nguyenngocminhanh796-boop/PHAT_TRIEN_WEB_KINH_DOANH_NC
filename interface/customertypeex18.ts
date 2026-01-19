import { ICustomer } from '../interface/customerex18'

export interface ICustomerType {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: ICustomer[];
}
