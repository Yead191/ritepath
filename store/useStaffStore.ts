import { create } from 'zustand';

interface StaffState {
  staff: Record<string, unknown> | null;
  setStaff: (staff: Record<string, unknown> | null) => void;
  reset: () => void;
}

export const useStaffStore = create<StaffState>((set) => ({
  staff: null,
  setStaff: (staff) => set({ staff }),
  reset: () => set({ staff: null }),
}));
