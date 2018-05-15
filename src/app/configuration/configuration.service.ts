import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class MoistureSensorConfiguration {   
  constructor(public min: number, public max: number, public sensorPowerPin: number, public sensorReadPin: number, public threshold: number) { }
}

export class RelayConfiguration {
  constructor(public pin: number) { }
}

export class Configuration {
  constructor(public ssid: string, public password: string, public relays: RelayConfiguration[], public moistureSensors: MoistureSensorConfiguration[]) { }
}



@Injectable()
export class ConfigurationService {  
  private configurations$: BehaviorSubject<Configuration[]> = new BehaviorSubject<Configuration[]>([]);
}
