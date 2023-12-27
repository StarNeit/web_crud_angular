export interface ApiUser {
  createdAt: string;
  firstName: string;
  lastName: string;
  lastLogin: string;
  email: string;
  id: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  lastLogin: string;
  email: string;
}

export type UpdateUserRequest = CreateUserRequest;
