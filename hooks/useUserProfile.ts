export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
}

export function useUserProfile() {
  const userProfile: UserProfile | null = null;
  const isLoading = false;

  return {
    userProfile,
    isAuthenticated: !!userProfile,
    isLoading,
  };
}
