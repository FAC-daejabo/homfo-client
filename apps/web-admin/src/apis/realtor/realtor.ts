import { fetchFromApi } from "@homfo-client/util";

interface realtorBody{
    agencyId: number;
    name: string;
    phoneNumber? :string;
    certificateId? : string;
    position?: string;
    note?: string;
}

export const createRealtor = async (name:string, phoneNumber: string, certificateId: string, position: string, note: string, agencyId: number) => {
    try {
     const body: realtorBody =  {
        name: name,
        agencyId: agencyId
     }
     if (phoneNumber.length > 0) body.phoneNumber = phoneNumber;
     if (certificateId.length > 0) body.certificateId = certificateId;
     if (position.length > 0) body.position = position;
      const res = await fetchFromApi("POST",'/realtors/create',body);  
      console.log(res.data);  
    } catch (error: unknown) {
      console.log(error);
    }   
}


export const getPartnerRealtorsList= async () => {
    try {
      const params = {
        "page": 0,
        "size": 10,
        "sort": ["name"],
        "needCount": true,
      }
      const res = await fetchFromApi("GET",'/realtors/search/pages', undefined, params);  
      console.log(res.data)
    } catch (error: unknown) {
      console.log(error);
    }   
}  