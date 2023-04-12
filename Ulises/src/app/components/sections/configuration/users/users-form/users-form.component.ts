import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AppSettings } from 'src/app/core/app.settings';
import { User } from 'src/app/_models/users/User';
import { AlertService } from 'src/app/_services/alert.service';
import { HistoricService } from 'src/app/_services/historic.service';
import { UserService } from 'src/app/_services/user.service';
import { UtilsService } from 'src/app/_services/utils.service';

import { LoginUser } from 'src/app/_models/login/LoginUser';
import { TranslateService } from '@ngx-translate/core';


interface ProfileItem {
  label: string,
  pow: number,
  selected: boolean
}

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  type: string = 'CREATE';
  userForm!: FormGroup;
  profileBinary!: any;

  ready: boolean = false;
  MAX_COLUMN_ITEMS: number = 7;

  showSpinner: boolean = false;
  currentUser!: LoginUser;


  profiles: ProfileItem[] = [
    {
      label: 'users.profile_1',
      pow: 1,
      selected: false
    },
    {
      label: 'users.profile_2',
      pow: 2,
      selected: false
    },
    {
      label: 'users.profile_3',
      pow: 4,
      selected: false
    },
    {
      label: 'users.profile_4',
      pow: 8,
      selected: false
    },
    {
      label: 'users.profile_5',
      pow: 16,
      selected: false
    },
    {
      label: 'users.profile_6',
      pow: 32,
      selected: false
    },
    {
      label: 'users.profile_7',
      pow: 64,
      selected: false
    },
    {
      label: 'users.profile_8',
      pow: 128,
      selected: false
    },
    {
      label: 'users.profile_9',
      pow: 256,
      selected: false
    },
    {
      label: 'users.profile_10',
      pow: 512,
      selected: false
    },
    {
      label: 'users.profile_11',
      pow: 1024,
      selected: false
    },
    {
      label: 'users.profile_12',
      pow: 2048,
      selected: false
    },
    {
      label: 'users.profile_13',
      pow: 4096,
      selected: false
    },
    {
      label: 'users.profile_14',
      pow: 8192,
      selected: false
    },
    {
      label: 'users.profile_15',
      pow: 32768,
      selected: false
    }
  ];

  appset: any;

  constructor(public dialogRef: MatDialogRef<UsersFormComponent>, @Inject(MAT_DIALOG_DATA) public user: User, private fb: FormBuilder,
    private readonly app: AppComponent, private readonly userService: UserService, private readonly alertService: AlertService,
    private readonly historicService: HistoricService, private readonly utilsService: UtilsService, 
    private readonly translate: TranslateService) { }

  ngOnInit(): void {

    this.appset = AppSettings;

    if (this.user.name != '') {
      this.type = 'EDIT';
    }

    this.profileToArray();
    this.initForm();

    this.ready = true;

    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  }

  initForm() {
    this.userForm = new FormGroup({
      name: new FormControl({ value: this.user.name, disabled: this.type == 'EDIT' }, [Validators.pattern(AppSettings.NAME_PATTERN)]),
      clave: new FormControl(window.atob(this.user.clave)),
      permissions: new FormArray([])
    });

    this.initFormArray();
  }

  permissions(): FormArray {
    return this.userForm.get("permissions") as FormArray
  }

  initFormArray() {
    const itemsPermissions = <FormArray>this.userForm.controls['permissions'];

    this.profiles.forEach((profile, idx) => {
      itemsPermissions.push(this.fb.group({
        id: idx,
        name: profile.label,
        selected: profile.selected,
        pow: profile.pow
      }))
    });
  }

  profileToArray() {
    const BINARY = 2;
    this.profileBinary = Number().toString(BINARY);

    this.profiles.forEach(profile => {
      profile.selected = ((this.user.perfil & profile.pow) ? true : false);
    });
  }

  arrayToProfile() {

    let profile = 0;

    this.userForm.value.permissions.forEach((item: any, idx: number) => {
      if (item.selected) {
        profile += item.pow;
      }
    });

    return profile;
  }

  async deleteUser() {
    if (this.user.name == this.currentUser.name){
      await this.alertService.errorMessage("", `${this.translate.instant('users.alert.error_delete_user')}`, this.translate.instant('button.accept'));
      return;
    }

    try {
      const confirm = await this.alertService.confirmationMessage(``, 
          this.translate.instant('users.alert.conf_delete_user', {user: this.user.name}), 
          this.translate.instant('button.accept'), this.translate.instant('button.cancel'))
      if (confirm.value) {

        this.showSpinner = true;
        const result = await this.userService.deleteUser(this.user.idOPERADORES).toPromise();
        this.showSpinner = false;

        if (result.error != 1) {
          await this.alertService.errorMessage(``, result.error, this.translate.instant('button.accept'));
        } else {
          await this.alertService.successMessage(``, `${this.translate.instant('users.alert.succ_delete_user')}`,this.translate.instant('button.accept'));
          await this.historicService.updateCfg(53, this.user.name).toPromise();
          this.dialogRef.close();
        }
      }
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async saveUser() {
    try {

      if (this.userForm.valid) {
        const profile = this.arrayToProfile();
        const password = window.btoa(this.userForm.value.clave);

        if (this.type == 'CREATE') {
          this.showSpinner = true;
          const result = await this.userService.createUser(this.userForm.value.name, password, profile).toPromise();
          this.showSpinner = false;
          if (result.error) {
            await this.alertService.errorMessage(``, 
              this.translate.instant('users.alert.error_create_user', {cause: this.translateCause(result.error), user: this.userForm.value.name}), 
              this.translate.instant('button.accept'));
          } else {
            await this.historicService.updateCfg(52, this.userForm.value.name).toPromise();
            await this.alertService.successMessage(``, 
              this.translate.instant('users.alert.succ_create_user', {user: this.userForm.value.name}), 
              this.translate.instant('button.accept'));
            this.dialogRef.close();
          }
        } else {
          this.showSpinner = true;
          const result = await this.userService.editUser(this.user.name, password, profile, this.user.idOPERADORES).toPromise();
          this.showSpinner = false;
          if (result.err) {
            await this.alertService.errorMessage(``, 
              this.translate.instant('users.alert.error_modify_user', {cause: this.translateCause(result.err), user: this.user.name}), 
              this.translate.instant('button.accept'));
          } else {
            await this.historicService.updateCfg(54, this.user.name).toPromise();
            await this.alertService.successMessage(``, 
              this.translate.instant('users.alert.succ_modify_user', {user: this.user.name}), 
              this.translate.instant('button.accept'));
            this.dialogRef.close();
          }
        }
      } else {
        await this.alertService.errorMessage(`${this.translate.instant('appsettings.ERROR_FORM')}`, `${this.translate.instant('appsettings.INVALID_FORM')}`, this.translate.instant('button.accept'));
      }
    } catch (error: any) {
      this.dialogRef.close();
      this.app.catchError(error);
    }
  }

  translateCause(error: any) {
    if (error === 'ER_DUP_ENTRY')
      return this.translate.instant('users.error.cause_duplicated');
    else {
      return error;
    }
  }
}
