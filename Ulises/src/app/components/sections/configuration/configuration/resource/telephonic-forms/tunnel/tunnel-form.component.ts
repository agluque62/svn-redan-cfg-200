import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-tunnel-form',
  templateUrl: './tunnel-form.component.html',
  styleUrls: ['./tunnel-form.component.scss']
})
export class TunnelFormComponent implements OnInit {

  
  resourceForm!: FormGroup;

  visualizationMode: boolean = false;
  automaticCalling = true;

  isReady: boolean = false;



  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.visualizationMode = (this.visualizationPermission()) ? true : false;

    if(this.resourceForm.value.llamada_automatica === 1){
      this.automaticCalling = true
    } else {
      this.automaticCalling = false
    }

    this.isReady = true;

  }

  visualizationPermission() {
    return !this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && this.userService.isRole('VISUALIZATION');
  }

  automaticCallingIsChecked(opt: boolean){
    this.automaticCalling = opt
    if (this.automaticCalling) {
      this.resourceForm.patchValue({ llamada_automatica: 1 });
    }else{
      this.resourceForm.patchValue({ llamada_automatica: 0 });
    }
  }

}