import { Role } from 'shared/const';

export interface User {
  id: string;
  email: string;
  roles: Role[];
}

export interface UserSchema {
  isInit: boolean;
  authData?: User;
  isLoading?: boolean;
}
