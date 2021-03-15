import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class AlertService extends BaseService {

    constructor() {
        super();
    }

    confirmationMessage(title: string, message: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            heightAuto: false
        })
    }

    errorMessage(title: string, message: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonText: 'Aceptar',
            heightAuto: false
        });
    }

    successMessage(title: string, message: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            heightAuto: false
        });
    }

    fieldMessage(title: string, message: string) {

        return Swal.fire({
            title: title,
            html: message,
            icon: 'info',
            heightAuto: true,
            confirmButtonText: 'Aceptar'
        });
    }
}
