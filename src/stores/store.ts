import { create } from "zustand";

interface ID {
  id: number;
  setId: (by: number) => void;
  increase: (by: number) => void;
}

const IdStore = create<ID>((set) => ({
  id: 0,
  setId: (id) => {
    set(() => ({ id: id }));
  },
  increase: (by: number) => set((state) => ({ id: state.id + by })),
  /*
      setId: (by) => {
      set((state) => ({ id: by }));
    }, // 이게 더 보기 편할 수 있음
    */
}));

export default IdStore;
