import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

/**
 * Firebase auth instance.
 */
const auth = getAuth();

/**
 * Custom hook for managing user authentication using Firebase Auth.
 *
 * This hook listens for changes in the user's authentication status and provides
 * the current user object when signed in, or undefined when signed out.
 *
 * @returns An object with the current user information.
 */
export function useAuthentication() {
  // --- Hooks ----------------------------------------------------------------------
  const [user, setUser] = useState<User>();
  // --- END: Hooks ------------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------------
  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);
  // --- END: Side effects ----------------------------------------------------------------

  return {
    user,
  };
}

/**
 * Sign in to firebase using the firebase auth instance.
 * @param email
 * @param password
 */
export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Logout from firebase using the auth instance.
 */
export function logOut() {
  return signOut(auth);
}

/**
 * Returns a custom error message based on firebase error message.
 * @param message firebase error message
 * @returns Custom error message
 */
export function useAuthErrorMessage(message: string): string {
  //firebase errors docs https://firebase.google.com/docs/auth/admin/errors?hl=es-419
  const errorMessageMap: { [key: string]: string } = {
    "invalid-email": "formato de Email incorrecto",
    "invalid-login-credentials": "Usuario o contraseña incorrectos",
    "insufficient-permission": "No tienes permisos",
  };
  const defaultMessage = "Error de autenticación";

  const mappedMessage = Object.keys(errorMessageMap).find((key) => message.includes(key));

  return mappedMessage ? errorMessageMap[mappedMessage] : defaultMessage;
}
