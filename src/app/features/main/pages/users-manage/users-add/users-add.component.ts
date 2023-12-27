import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ApiUsersService } from '../../../services/api/users.service';
import { ApiUser } from '../../../services/api/users.service.type';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
})
export class UsersAddComponent {
  addUserForm!: FormGroup;
  isLoading = false;

  user?: ApiUser;

  get isEditing() {
    return !!this.user;
  }

  constructor(
    private fb: FormBuilder,
    private apiUserService: ApiUsersService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute
  ) {
    this.initForm();
    this.fetchUserData();
  }

  fetchUserData() {
    this.route.paramMap.subscribe(async params => {
      const userId = params.get('id');

      if (userId) {
        this.isLoading = true;

        try {
          this.user = await lastValueFrom(
            this.apiUserService.getUserById(userId)
          );
        } finally {
          this.isLoading = false;
        }
      }

      this.addUserForm.patchValue({
        ...this.user,
      });
    });
  }

  initForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.addUserForm.valid && !this.addUserForm.errors) {
      const userData = this.addUserForm.value;
      this.isLoading = true;

      const observer = !this.isEditing
        ? this.apiUserService.addUser(userData)
        : this.apiUserService.updateUser(this.user?.id ?? '', userData);

      observer.subscribe({
        next: () => {
          this.toastrService.success(
            `${this.isEditing ? 'Edited' : 'Added'} user successfully`,
            'Success'
          );

          if (!this.isEditing) {
            this.addUserForm.reset();
          }
        },
        error: error => {
          this.toastrService.danger('An error occur. Please try again later.');
          console.error(error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.toastrService.warning(
        'Please fill in all required fields',
        'Warning'
      );
    }
  }
}
