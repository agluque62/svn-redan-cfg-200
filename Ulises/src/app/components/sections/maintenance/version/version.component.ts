import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { AppComponent } from 'src/app/app.component';
import { Version } from 'src/app/_models/login/Version';
import { LoginService } from 'src/app/_services/login.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  version!: Version;
  ready: boolean = false;

  constructor(private readonly loginService: LoginService, private readonly app: AppComponent,
    private readonly userService: UserService, private readonly router: Router,
    private readonly translate: TranslateService) { }

  async ngOnInit() {
    try {
      this.checkPermissions();
      this.version = await this.loginService.version().toPromise();
      this.ready = true;
    } catch (error: any) {
      this.app.catchError(error);
    }
  }

  async checkPermissions() {
    if (this.notPermission()) {
      await this.loginService.logout().toPromise();
      this.app.destroyAlive();
      this.router.navigate(['/access']);
    }
  }

  notPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('HISTORICS');
  }

  downloadPDF() {
    const header = [[
      `${this.translate.instant('maintenance.version')}`,
      `${this.translate.instant('maintenance.nodeJS')}`,
      `${this.translate.instant('maintenance.MySQL')}`,
      `${this.translate.instant('maintenance.files')}`,
      `${this.translate.instant('maintenance.date')}`,
      `${this.translate.instant('maintenance.size')}`,
      `${this.translate.instant('maintenance.MD5')}`]];

    let body: any = [];
    body.push(['BACKEND']);
    this.version.file.forEach(archivos => {
      body.push([`${this.version.version}.${this.version.subversion}`, 
        this.version.nodejsversion, 
        this.version.mysqlversion, 
        archivos.Name, archivos.date, 
        archivos.fileSizeInBytes, 
        archivos.md5])
    });

    body.push(['FRONTEND']);
    this.version.filef.forEach(archivos => {
      body.push([`${this.version.version}.${this.version.subversion}`, 
        this.version.nodejsversion, 
        this.version.mysqlversion, 
        archivos.Name, archivos.date, 
        archivos.fileSizeInBytes, 
        archivos.md5])
    });

    const doc = new jsPDF('l');
    doc.setFontSize(11);

    autoTable(doc, {
      head: header,
      body: body,
      startY: 30,
      margin: { horizontal: 20 },
      bodyStyles: { valign: 'top' },
      headStyles: { fillColor: [255, 50, 40] },
      columnStyles: {
        0: { cellWidth: 30, overflow: 'linebreak' },
        1: { cellWidth: 30, overflow: 'linebreak' },
        2: { cellWidth: 30, overflow: 'linebreak' },
        3: { cellWidth: 45, overflow: 'linebreak' },
        4: { cellWidth: 25, overflow: 'linebreak' },
        5: { cellWidth: 25, overflow: 'linebreak' },
        6: { cellWidth: 65, overflow: 'linebreak' },
        7: { cellWidth: 30, overflow: 'linebreak' }
      }
    });

    const pageCount = doc.getNumberOfPages();
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(`${this.translate.instant('maintenance.version_report')}`, 125, 20);
    }

    doc.save("Version.pdf");


  }

  downloadExcel() {
    let data = "";
    const header = [
      `${this.translate.instant('maintenance.version')}`,
      `${this.translate.instant('maintenance.nodeJS')}`,
      `${this.translate.instant('maintenance.MySQL')}`,
      `${this.translate.instant('maintenance.files')}`,
      `${this.translate.instant('maintenance.date')}`,
      `${this.translate.instant('maintenance.size')}`,
      `${this.translate.instant('maintenance.MD5')}`];

    data += header.join(';');
    data += "\n";

    data += "BACKEND\n";
    this.version.file.forEach(archivos => {
      data += [`${this.version.version}.${this.version.subversion}`, 
                this.version.nodejsversion, 
                this.version.mysqlversion, 
                archivos.Name, 
                archivos.date, 
                archivos.fileSizeInBytes, 
                archivos.md5].join(';');
      data += "\n";
    });

    data += "FRONTEND\n";
    this.version.filef.forEach(archivos => {
      data += [`${this.version.version}.${this.version.subversion}`, 
                this.version.nodejsversion, 
                this.version.mysqlversion, 
                archivos.Name, 
                archivos.date, 
                archivos.fileSizeInBytes, 
                archivos.md5].join(';');
      data += "\n";
    });


    var myLink = document.createElement('a');
    myLink.download = 'Version.csv';
    myLink.href = "data:application/csv," + escape(data);
    myLink.click();
  }
}
