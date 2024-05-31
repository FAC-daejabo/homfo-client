import { create } from 'zustand';

interface UserStoreState {
    rendering: boolean;
    setRendering: (rendering:boolean) => void;
}

 const useRenderingStore = create<UserStoreState>((set) => ({
  rendering:false,
  setRendering: (rendering: boolean) => {
    set({ rendering: rendering });
  },
}));
export default useRenderingStore;
