import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { AuthStatus, type User } from '../interfaces';
import { checkAuthAction, LoginAction, registerAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await LoginAction(email, password);

      if (!loginResp.ok) {
        logout();
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const registerResp = await registerAction(fullName, email, password);

      if (!registerResp.ok) {
        logout();
        return { ok: false, message: registerResp.message };
      }

      user.value = registerResp.user;
      token.value = registerResp.token;
      authStatus.value = AuthStatus.Authenticated;
    } catch (error) {
      console.log(error);
      return { ok: false, message: 'Error al registrar al usuario' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');

    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkAuthAction();
      if (!statusResp.ok) {
        logout();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResp.user;
      token.value = statusResp.token;
      return true;
    } catch (error) {
      console.log(error);
      logout();
      return false;
    }
  };

  return {
    user,
    token,
    authStatus,

    // Getters
    ischecking: computed(() => authStatus.value == AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value == AuthStatus.Authenticated),

    isAdmin: computed(() => user.value?.roles.includes('admin') ?? false),
    username: computed(() => user.value?.fullName),

    // Actions
    login,
    logout,
    register,
    checkAuthStatus,
  };
});
