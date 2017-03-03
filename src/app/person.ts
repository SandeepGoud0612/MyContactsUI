import { Address } from './address';
import { Occasion } from './occasion';

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dob: Date;    
    phoneNumber: number;
    alternatePhoneNumber: number;
    emailId: string;
    alternateEmailId: string;
    maritalStatus: boolean;
    addressList: Address[]; 
    occasionList: Occasion[];
    image: any;
}
