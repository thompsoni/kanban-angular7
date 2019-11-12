import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { environment } from '../../environments/environment';
import { map, take } from 'rxjs/operators';
import { JsonServiceClient } from '@servicestack/client';
import {
    IdAndNamePairDto,
    ListEpicsResponse,
    ListEpicsRequest,
    ListEpicPropertiesResponse,
    ListEpicPropertiesRequest,
    ListEpicBusinessCasesRequest,
    ListEpicBusinessCasesResponse,
    ShowCurrentEpicBusinessCaseResponse,
    ShowCurrentEpicBusinessCaseRequest,
    EpicStateEnum,
    EpicStatusEnum,
    EpicEffortEnum,
    UpdateEpicResponse,
    UpdateEpicRequest,
    CreateEpicBusinessCaseResponse,
    CreateEpicBusinessCaseRequest,
    CreateEpicResponse,
    CreateEpicRequest,
    DeleteEpicResponse,
    DeleteEpicRequest,
    ListEpicTimeboxesResponse,
    ListEpicTimeboxesRequest,
    ShowEpicBacklogResponse,
    ShowEpicBacklogRequest,
    MoveEpicResponse,
    MoveEpicRequest,
} from '../models/a360.dtos';
import { ServiceStackService } from './service-stack.service';

const API_PATH = environment.apiUrl;

@Injectable()
export class EpicService {

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private serviceStack: ServiceStackService,
    ) {
    }

    public list(): Observable<ListEpicsResponse> {
      const request = new ListEpicsRequest();
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public listProperties(): Observable<ListEpicPropertiesResponse> {
      const request = new ListEpicPropertiesRequest();
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public getBusinessCases(epicId: number): Observable<ListEpicBusinessCasesResponse> {
      const request = new ListEpicBusinessCasesRequest();
      request.epicId = epicId;
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public getBusinessCase(epicId: number): Observable<ShowCurrentEpicBusinessCaseResponse> {
      const request = new ShowCurrentEpicBusinessCaseRequest();
      request.epicId = epicId;
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public update(
      payload: {
        id: number,
        name: string,
        description: string,
        outcomes: string,
        strategicThemeId: number,
        typeId: number,
        stateId: EpicStateEnum,
        statusId: EpicStatusEnum,
        effortId: EpicEffortEnum,
        realizedMonetaryBenefit: number,
        realizedBenefits: string,
        link: string,
        ownerId: number,
        valueEstimate: number,
        durationEstimate: number,
        completeness: number,
      }
    ): Observable<UpdateEpicResponse> {
      const request = new UpdateEpicRequest();
      Object.assign(request, payload);
      return Observable.from( this.serviceStack.client.put(request) );
    }

    public createBusinessCase(
      payload: {
        epicId: number,
        costEstimate: number,
        monetaryBenefit: number,
        ownerId: number,
        analysisSummary: string,
        impactToStrategicGoals: string,
        benefitsAndFinancialImpact: string,
        riskAndReductions: string,
      }
    ): Observable<CreateEpicBusinessCaseResponse> {
      const request = new CreateEpicBusinessCaseRequest();
      Object.assign(request, payload);
      return Observable.from( this.serviceStack.client.post(request) );
    }

    public create(
      payload: {
        name: string,
        description: string,
        outcomes: string,
        strategicThemeId: number,
        typeId: number,
        effortId: EpicEffortEnum,
        realizedMonetaryBenefit: number,
        realizedBenefits: string,
        link: string,
        ownerId: number,
        valueEstimate: number,
        durationEstimate: number,
        completeness: number,
      }
    ): Observable<CreateEpicResponse> {
      const request = new CreateEpicRequest();
      Object.assign(request, payload);
      return Observable.from( this.serviceStack.client.post(request) );
    }

    public delete(id: number): Observable<DeleteEpicResponse> {
      const request = new DeleteEpicRequest();
      request.id = id;
      return Observable.from( this.serviceStack.client.delete(request) );
    }

    public listTimeboxesBacklog(): Observable<ShowEpicBacklogResponse> {
      const request = new ShowEpicBacklogRequest();
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public listTimeboxes(from: string): Observable<ListEpicTimeboxesResponse> {
      const request = new ListEpicTimeboxesRequest();
      request.from = from;
      return Observable.from( this.serviceStack.client.get(request) );
    }

    public moveTimebox(
      payload: {
        epicId: number,
        timeboxId: number,
        previousEpicRank: number,
        followingEpicRank: number,
      }
    ): Observable<MoveEpicResponse> {
      const request = new MoveEpicRequest();
      Object.assign(request, payload);
      return Observable.from( this.serviceStack.client.put(request) );
    }


}
