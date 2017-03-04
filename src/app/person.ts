import { Address } from './address';
import { Occasion } from './occasion';
import { Base } from './base';
import { Image } from './image';

export class Person extends Base{    
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
    image: Image;
}
