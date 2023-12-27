import { Component } from '@angular/core';
import {
  NbGetters,
  NbSortDirection,
  NbSortRequest,
  NbToastrService,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';
import { ApiUsersService } from '../../services/api/users.service';
import { ApiUser } from '../../services/api/users.service.type';
import { catchError, finalize } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss'],
})
export class UsersManageComponent {
  defaultColumns = ['id', 'email', 'firstName', 'lastName'];
  allColumns = [...this.defaultColumns, 'actions'];

  dataSource?: NbTreeGridDataSource<ApiUser>;
  sortColumn?: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  getUsersQuery = this.apiUserService.getUsersList();

  isSubmitting = false;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<ApiUser>,
    private apiUserService: ApiUsersService,
    private toastrService: NbToastrService,
    private layoutService: LayoutService
  ) {
    this.fetchTableData();
  }

  public transformColumnNames(input: string, delimiter = '\t'): string {
    const columnNames = input.split(delimiter);

    // Capitalize the first letter of each word and insert a space
    const formattedColumnNames = columnNames.map(columnName =>
      columnName
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase
        .replace(/^\w/, c => c.toUpperCase())
    );

    return formattedColumnNames.join(' ');
  }

  fetchTableData() {
    this.layoutService.setLoadingState(true);

    this.getUsersQuery
      .pipe(finalize(() => this.layoutService.setLoadingState(false)))
      .subscribe(result => {
        if (!result) return;

        const getters: NbGetters<ApiUser, ApiUser> = {
          dataGetter: (node: ApiUser) => node,
        };

        this.dataSource = this.dataSourceBuilder.create(result, getters);
        this.sortColumn &&
          this.updateSort({
            column: this.sortColumn,
            direction: this.sortDirection,
          });
      });
  }

  deleteUser(id: string) {
    this.isSubmitting = true;

    this.apiUserService
      .deleteUser(id)
      .pipe(
        catchError(() => {
          this.toastrService.danger('Delete failed');
          throw new Error('Delete failed'); // Re-throw the error to continue the error flow
        }),
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe(() => {
        this.fetchTableData();
        this.toastrService.success('Delete successfully');
      });
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }
}
