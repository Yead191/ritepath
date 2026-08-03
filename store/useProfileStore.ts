import { create } from 'zustand';

interface ProfileState {
  profile: Record<string, unknown> | null;
  setProfile: (profile: Record<string, unknown> | null) => void;
  reset: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  reset: () => set({ profile: null }),
}));
