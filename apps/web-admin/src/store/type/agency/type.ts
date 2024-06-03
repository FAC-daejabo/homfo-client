export {type ITotalAgency, type Agency, type Address}

interface ITotalAgency{
    data: Agency[];
    hasNext: boolean;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
}


interface Agency {
    agencyType: string;
    chairmanName: string;
    deduction: boolean;
    id: number;
    name: string;
    openedAt: string;
    openingRegistrationNumber: string;
    partner: boolean;
    phoneNumber: string;
    officeCallNumber?: string;
    roadAddress?: Address;
    lotAddress?: Address;
    roadAddressDetail: string;
    lotAddressDetail?: string;
}

interface Address{
    address: string;
    id: number;
    latitude: number;
    longitude: number;
}
