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
      label: 'Visualizacion CFIGR+RCS',
      pow: 1,
      selected: false
    },
    {
      label: 'Mando (RCS)',
      pow: 2,
      selected: false
    },
    {
      label: 'Inhibición de histórico alarmas en GW (RCS)',
      pow: 4,
      selected: false
    },
    {
      label: 'Reconocimiento de alarmas (RCS)',
      pow: 8,
      selected: false
    },
    {
      label: 'Gestión perfiles de Usuario (CFIGR+RCS+CFIGL)',
      pow: 16,
      selected: false
    },
    {
      label: 'Selección de configuraciones a supervisar',
      pow: 32,
      selected: false
    },
    {
      label: 'Administrador General (CFIGR+RCS+CFIGL)',
      pow: 64,
      selected: false
    },
    {
      label: 'Visualización CFIGL',
      pow: 128,
      selected: false
    },
    {
      label: 'Administrador CFIGL',
      pow: 256,
      selected: false
    },
    {
      label: 'Históricos/Estadísticas CFIGR',
      pow: 512,
      selected: false
    },
    {
      label: 'Backup BD CFIGR',
      pow: 1024,
      selected: false
    },
    {
      label: 'Control aviso acústico RCS',
      pow: 2048,
      selected: false
    },
    {
      label: 'Gestión de configuraciones CFIGL',
      pow: 4096,
      selected: false
    },
    {
      label: 'Actualización Software de GWs (RCS)',
      pow: 8192,
      selected: false
    },
    {
      label: 'Gestión Configuraciones CFIGR',
      pow: 32768,
      selected: false
    }
  ];

  appset: any;

  constructor(public dialogRef: MatDialogRef<UsersFormComponent>, @Inject(MAT_DIALOG_DATA) public user: User, private fb: FormBuilder,
    private readonly app: AppComponent, private readonly userService: UserService, private readonly alertService: AlertService,
    private readonly historicService: HistoricService, private readonly utilsService: UtilsService) { }

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
      await this.alertService.errorMessage("", "!No se puede eliminar el usuario loggeado!");
      return;
    }

    try {
      const confirm = await this.alertService.confirmationMessage(``, `¿Seguro que quiere eliminar el usuario ${this.user.name}?`)
      if (confirm.value) {

        this.showSpinner = true;
        const result = await this.userService.deleteUser(this.user.idOPERADORES).toPromise();
        this.showSpinner = false;

        if (result.error != 1) {
          await this.alertService.errorMessage(`Error`, result.error);
        } else {
          await this.alertService.successMessage(`Éxito`, `Usuario borrado correctamente`);
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
        let error;
        let message: string;

        this.showSpinner = true;
        if (this.type == 'CREATE') {
          const result = await this.userService.createUser(this.userForm.value.name, password, profile).toPromise();
          error = (result.error) ? result.error : null;
          message = `Usuario ${this.userForm.value.name} creado correctamente`;
          await this.historicService.updateCfg(52, this.userForm.value.name).toPromise();
        } else {
          const result = await this.userService.editUser(this.user.name, password, profile, this.user.idOPERADORES).toPromise();
          error = (result.err) ? result.err : null;
          message = `Usuario ${this.user.name} modificado correctamente`;
          await this.historicService.updateCfg(54, this.user.name).toPromise();
        }
        this.showSpinner = false;

        if (error) {
          await this.alertService.errorMessage(`Error`, error);
        } else {
          await this.alertService.successMessage(`Éxito`, message);
          this.dialogRef.close();
        }
      } else {
        await this.alertService.errorMessage(AppSettings.ERROR_FORM, AppSettings.INVALID_FORM);
      }
    } catch (error: any) {
      this.dialogRef.close();
      this.app.catchError(error);
    }
  }
}
