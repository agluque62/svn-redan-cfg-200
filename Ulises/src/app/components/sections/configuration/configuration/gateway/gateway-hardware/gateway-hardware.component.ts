import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Gateway } from 'src/app/_models/configs/gateway/Gateway';
import { GatewayHardwareRadio } from 'src/app/_models/configs/gateway/hardware/GatewayHardwareRadio';
import { GatewayHardwareResponse } from 'src/app/_models/configs/gateway/hardware/GatewayHardwareResponse';
import { GatewayHardwareTelephone } from 'src/app/_models/configs/gateway/hardware/GatewayHardwareTelephone';
import { GatewayService } from 'src/app/_services/gateway.service';

@Component({
  selector: 'gateway-hardware',
  templateUrl: './gateway-hardware.component.html',
  styleUrls: ['./gateway-hardware.component.scss']
})
export class GatewayHardwareComponent implements OnInit {

  @Input('gateway')  gateway!: Gateway;
  gatewayHardwareResponse!: GatewayHardwareResponse;
  gatewayHardwareRadio!: GatewayHardwareRadio[];
  gatewayHardwareTelephone!: GatewayHardwareTelephone[];

  ready: boolean = false;
  items: any[] = [];

  constructor(private readonly gatewayService: GatewayService) {
  }

  async ngOnInit() {
    this.init()
  }

  async init(){
    this.gatewayHardwareResponse = await this.gatewayService.getGatewayHardware(this.gateway.idCGW).toPromise();
    if (this.gatewayHardwareResponse) {
      this.gatewayHardwareRadio = this.gatewayHardwareResponse.radio;
      this.gatewayHardwareTelephone = this.gatewayHardwareResponse.tfno;
      this.initItems();
      this.ready = true;
    }
  }
  initItems() {
    
    this.items = []
    for (let i=0; i<16; i++) {
      this.items.push(null);
    }

    let cont = 0;
    for (let row=0; row<4; row++) {
      for (let col=0; col<4; col++) {
        let item: GatewayHardwareRadio | GatewayHardwareTelephone | undefined;
        item = this.getHardwareRadio(col, row);
        if (item == undefined) {
          item = this.getHardwareTelephone(col, row);
        }
        this.items[cont] = item;
        cont++;
      }
    }
  }

  getHardwareRadio(col: number, row: number): GatewayHardwareRadio | undefined {
    return this.gatewayHardwareRadio.find(radio => radio.columna === col && radio.fila === row);
  }

  getHardwareTelephone(col: number, row: number): GatewayHardwareTelephone | undefined {
    return this.gatewayHardwareTelephone.find(telephone => telephone.columna === col && telephone.fila === row);
  } 
}