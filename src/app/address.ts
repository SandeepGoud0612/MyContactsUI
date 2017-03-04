import { Base } from './base';

export class Address extends Base {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
}
