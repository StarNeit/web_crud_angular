import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiUser,
  CreateUserRequest,
  UpdateUserRequest,
} from './users.service.type';

@Injectable({ providedIn: 'root' })
export class ApiUsersService {
  constructor(private httpClient: HttpClient) {}

  getUsersList() {
    return this.httpClient.get<ApiUser[]>('/users');
  }

  getUserById(id: string) {
    return this.httpClient.get<ApiUser>(`/users/${id}`);
  }

  addUser(user: CreateUserRequest) {
    return this.httpClient.post(`/users`, user);
  }

  updateUser(id: string, user: UpdateUserRequest) {
    return this.httpClient.patch(`/users/${id}`, user);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`/users/${id}`);
  }
}
