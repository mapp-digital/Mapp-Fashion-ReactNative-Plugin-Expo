/**
 * Type for the authentication credentials for the logged in user,
 * returned by the Dressipi API.
 */
export type AuthCredentials = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
};
