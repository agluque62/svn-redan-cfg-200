import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})

export class AlertService extends BaseService {

    constructor(private readonly translate: TranslateService) {
        super();
    }

    confirmationMessage(title: string, message: string, accept: string, cancel: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: accept,
            cancelButtonText: cancel,
            heightAuto: false
        })
    }

    errorMessage(title: string, message: string, accept: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonText: accept,
            heightAuto: false
        });
    }

    successMessage(title: string, message: string, accept: string) {

        return Swal.fire({
            title: title,
            text: message,
            icon: 'success',
            confirmButtonText: accept,
            heightAuto: false
        });
    }

    fieldMessage(title: string, message: string, accept: string) {

        return Swal.fire({
            title: title,
            html: message,
            icon: 'info',
            heightAuto: true,
            confirmButtonText: accept
        });
    }

    Notification(title: string, message: string, accept: string) {

        return Swal.fire({
            title: title,
            html: "<div class='notification-text'>" + message +"</div>",
            // icon: 'info',
            heightAuto: true,
            confirmButtonText: accept
        });
    }
}
