import { create } from 'zustand';
import { Agency } from '../type/agency/type';

interface usePartenerAgencyStoreState {
    agencyInfo: Agency|null;
    setAgencyInfo: (agency: Agency|null) => void;
}

 const usePartnerAgencyStore = create<usePartenerAgencyStoreState>((set) => ({
    agencyInfo:null,
    setAgencyInfo: (agency: Agency|null) => {
        set({ agencyInfo: agency });
    },
}));

export default usePartnerAgencyStore;
