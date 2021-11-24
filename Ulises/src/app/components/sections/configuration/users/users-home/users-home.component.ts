import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/_models/users/User';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';
import { UtilsService } from 'src/app/_services/utils.service';
import { UsersFormComponent } from '../users-form/users-form.component';
import { UsersProfileLegendComponent } from '../users-profile-legend/users-profile-legend.component';

@Component({
  selector: 'users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {

  users!: User[];

  showSpinner: boolean = false;

  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly app: AppComponent, public dialog: MatDialog, private readonly userService: UserService,
    private readonly utilsService: UtilsService, private readonly loginService: LoginService, private readonly router: Router) { }

  async ngOnInit() {
    this.checkPermissions();
    this.retrieveUsers();
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('USER_MANAGEMENT');
  }

  assignDataSource(users: User[]) {
    this.dataSource = new MatTableDataSource(users);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  async retrieveUsers() {
    try {
      this.showSpinner = true;
      const result = await this.userService.getUsers().toPromise();
      this.users = [...result.users];
      this.assignDataSource(this.users);
      this.showSpinner = false;
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  createUser() {
    const dialogRef = this.dialog.open(UsersFormComponent, {
      data: new User(),
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  modifyUser(user: User) {
    const dialogRef = this.dialog.open(UsersFormComponent, {
      data: user,
      autoFocus: false
    });

    this.refreshAfterClosedDialog(dialogRef);
  }

  loadProfileLegend() {
    const dialogRef = this.dialog.open(UsersProfileLegendComponent, {
      data: null,
      id: 'custom-panel'
    });
  }

  async refreshAfterClosedDialog(dialogRef: any) {
    dialogRef.afterClosed().subscribe(async () => {
      this.retrieveUsers();
    });
  }

  getProfile(profile: number) {
    return this.utilsService.getProfileLabel(profile);
  }
}
