import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { JsonServiceClient, IReturn } from '@servicestack/client';
import { Router } from '@angular/router';
import { GrowlService } from './growl.service';

@Injectable()
export class ServiceStackService {

  public client: JsonServiceClient;

  // Where to find ids of profile information in headers
  private miniProfilerHeadersKey = 'X-MiniProfiler-Ids';

  // Name of the MiniProfiler object that gets attached to the window
  private miniProfiler = window['MiniProfiler'];

  constructor(
    public router: Router,
    private growlService: GrowlService,
  ) {
    this.client = new JsonServiceClient(environment.apiUrl);
    this.client.onAuthenticationRequired = async () => {
      this.router.navigate(['login']);
      this.growlService.showError('Unauthorized', 'Login to access the resource');
    };
    if (environment.showMiniProfilerResults) {
      if (this.miniProfiler) {
        this.client.responseFilter = this.showMiniProfiler;
      } else {
        console.warn('No miniprofiler detected! We expect it to be attached to the window by a script');
      }
    }
  }


  /**
   * Query the api for debugging diagnostics information about how long each operation is taking
   */
  private showMiniProfiler(response: Response) {

    if (response.headers.has(this.miniProfilerHeadersKey)) {

      const miniprofilerIdString: string = response.headers.get(this.miniProfilerHeadersKey);
      const miniprofilerIds = JSON.parse(miniprofilerIdString) as string[];

      if (this.miniProfiler) {
        this.miniProfiler.fetchResults(miniprofilerIds);
      }
    }
  }
}
