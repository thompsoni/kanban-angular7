import { Injectable, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

    constructor( ) {
        // TODO
    }

    public log( component: string, msg?: string, data?: any ) {
        if ( !environment.silent ) {
            const timestamp = (new Date).toISOString();
            console.log( `[${timestamp}] ${component}: ${msg}` );
            console.log(data);
        }
    }
}
