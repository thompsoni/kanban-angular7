/* Options:
Date: 2018-06-12 17:02:14
Version: 5.11
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:59681

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse() : T;
}

export interface IReturnVoid
{
    createResponse() : void;
}

export interface IPost
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

export class Response
{
    // @DataMember(Order=1)
    responseStatus: ResponseStatus;
}

export class UnitResponse<TPayloadDto> extends Response
{
    result: TPayloadDto;
}

export class IdAndNamePairDto
{
    id: number;
    name: string;
}

export class ListResponse<TPayloadDto> extends Response
{
    // @DataMember(Order=2)
    total: number;

    // @DataMember(Order=3)
    offset: number;

    // @DataMember(Order=4)
    results: TPayloadDto[];
}

export class UserDto
{
    id: number;
    userName: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    timeZone: string;
    createdDate: string;
    modifiedDate: string;
}

export class CustomAttributeValueDto
{
    id: number;
    attribute: IdAndNamePairDto;
    strategicThemeId: number;
    value: string;
}

export type StrategicThemeStateEnum = "DevError" | "Draft" | "Proposed" | "Rejected" | "Approved" | "Closed";

export class StrategicThemeStateDto
{
    id: StrategicThemeStateEnum;
    name: string;
}

export class UserLookupDto
{
    id: number;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
}

export class StrategicThemeDto
{
    id: number;
    name: string;
    description: string;
    state: StrategicThemeStateDto;
    rank: number;
    owner: UserLookupDto;
}

export class StrategicThemeRankingDto
{
    id: number;
    rank: number;
}

export type EpicStateEnum = "DevError" | "Draft" | "Proposed" | "Postponed" | "Rejected" | "Approved" | "Closed";

export class EpicStateDto
{
    id: EpicStateEnum;
    name: string;
}

export type EpicStatusEnum = "DevError" | "Green" | "Yellow" | "Red";

export class EpicStatusDto
{
    id: EpicStatusEnum;
    name: string;
}

export type EpicEffortEnum = "DevError" | "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";

export class EpicEffortDto
{
    id: EpicEffortEnum;
    name: string;
    weight: number;
}

export class EpicDto
{
    id: number;
    name: string;
    description: string;
    outcomes: string;
    businessCaseVersion: number;
    strategicTheme: IdAndNamePairDto;
    type: IdAndNamePairDto;
    state: EpicStateDto;
    status: EpicStatusDto;
    effort: EpicEffortDto;
    realizedMonetaryBenefit: number;
    realizedBenefits: string;
    link: string;
    owner: UserLookupDto;
    valueEstimate: number;
    durationEstimate: number;
    rank: number;
    completeness: number;
}

export class EpicBusinessCaseDto
{
    id: number;
    epic: IdAndNamePairDto;
    version: number;
    costEstimate: number;
    monetaryBenefit: number;
    owner: UserLookupDto;
    analysisSummary: string;
    impactToStrategicGoals: string;
    benefitsAndFinancialImpact: string;
    riskAndReductions: string;
}

export class EpicTimeboxCardDto
{
    epic: EpicDto;
    businessCase: EpicBusinessCaseDto;
}

export class EpicTimeboxDto
{
    id: number;
    isLocked: boolean;
    start: string;
    end: string;
    contents: EpicTimeboxCardDto[];
}

export class BudgetCapacityDto
{
    id: number;
    budget: IdAndNamePairDto;
    timebox: EpicTimeboxDto;
    capacity: number;
}

export class ExternalTeamCapacityDto
{
    id: number;
    externalTeam: IdAndNamePairDto;
    timebox: EpicTimeboxDto;
    capacity: number;
}

export class InternalTeamCapacityDto
{
    id: number;
    internalTeam: IdAndNamePairDto;
    timebox: EpicTimeboxDto;
    capacity: number;
}

export class BudgetCapacityUpdateDto
{
    timeboxId: number;
    budgetId: number;
    capacity: number;
}

export class ExternalTeamCapacityUpdateDto
{
    timeboxId: number;
    externalTeamId: number;
    capacity: number;
}

export class InternalTeamCapacityUpdateDto
{
    timeboxId: number;
    internalTeamId: number;
    capacity: number;
}

export class EpicBudgetAllocationDto
{
    id: number;
    epic: IdAndNamePairDto;
    budget: IdAndNamePairDto;
    costCenter: IdAndNamePairDto;
    timeboxId: number;
    amount: number;
    description: string;
}

export class ExternalTeamAllocationDto
{
    id: number;
    externalTeam: IdAndNamePairDto;
    feature: IdAndNamePairDto;
    costCenter: IdAndNamePairDto;
    timeboxId: number;
    amount: number;
    description: string;
}

export class FeatureBudgetAllocationDto
{
    id: number;
    feature: IdAndNamePairDto;
    budget: IdAndNamePairDto;
    costCenter: IdAndNamePairDto;
    timeboxId: number;
    amount: number;
    description: string;
}

export class InternalTeamAllocationDto
{
    id: number;
    internalTeam: IdAndNamePairDto;
    feature: IdAndNamePairDto;
    costCenter: IdAndNamePairDto;
    timeboxId: number;
    amount: number;
    description: string;
}

export class OrganizationDto
{
    id: number;
    name: string;
    description: string;
}

export class InternalTeamDto
{
    id: number;
    name: string;
    costCenter: IdAndNamePairDto;
    function: string;
    owner: UserLookupDto;
}

export type FeatureStateEnum = "DevError" | "Draft" | "Proposed" | "Approved" | "WIP" | "Done" | "Rejected";

export class FeatureStateDto
{
    id: FeatureStateEnum;
    name: string;
}

export type FeatureStatusEnum = "DevError" | "Green" | "Yellow" | "Red";

export class FeatureStatusDto
{
    id: FeatureStatusEnum;
    name: string;
}

export class FeatureDto
{
    id: number;
    name: string;
    description: string;
    epic: IdAndNamePairDto;
    owner: UserLookupDto;
    type: IdAndNamePairDto;
    state: FeatureStateDto;
    status: FeatureStatusDto;
    rank: number;
    costEstimate: number;
    sizeEstimate: number;
    completeness: number;
    link: string;
    workPackage: IdAndNamePairDto;
}

export class FeaturePropertiesDto
{
    state: FeatureStateDto[];
    status: FeatureStatusDto[];
    type: IdAndNamePairDto[];
}

export class ExternalTeamDto
{
    id: number;
    name: string;
    costCenter: IdAndNamePairDto;
    function: string;
    owner: UserLookupDto;
}

export class EpicTimeboxSettingDto
{
    id: number;
    length: number;
    sizeLimit: number;
    backlogSizeLimit: number;
}

export class EpicPropertiesDto
{
    effort: EpicEffortDto[];
    state: EpicStateDto[];
    status: EpicStatusDto[];
    type: IdAndNamePairDto[];
}

export class CustomAttributeDto
{
    id: number;
    name: string;
    description: string;
}

export class CostCenterBudgetDto
{
    id: number;
    name: string;
    costCenter: IdAndNamePairDto;
    function: string;
    owner: UserLookupDto;
}

export class CostCenterResourcesDto
{
    internalTeams: InternalTeamDto[];
    externalTeams: ExternalTeamDto[];
    budgets: CostCenterBudgetDto[];
}

export class CostCenterDto
{
    id: number;
    name: string;
    description: string;
    owner: UserLookupDto;
}

export type SystemRoleEnum = "DevError" | "Admin" | "EpicOwner" | "FeatureOwner" | "CostCenterOwner" | "PortfolioReader";

export class LoggedInUserDto
{
    id: number;
    role: SystemRoleEnum;
}

export class CreateWorkPackageResponse extends UnitResponse<number>
{
}

export class DeleteWorkPackageResponse extends Response
{
}

export class ListWorkPackagesResponse extends ListResponse<IdAndNamePairDto>
{
}

export class UpdateWorkPackageResponse extends Response
{
}

export class CreateUserResponse extends UnitResponse<number>
{
}

export class DeleteUserResponse extends Response
{
}

export class ListUsersResponse extends ListResponse<UserDto>
{
}

export class ShowUserResponse extends UnitResponse<UserDto>
{
}

export class UpdateUserResponse extends Response
{
}

export class CreateCustomAttributeValueResponse extends UnitResponse<number>
{
}

export class CreateStrategicThemeResponse extends UnitResponse<number>
{
}

export class DeleteCustomAttributeValueResponse extends Response
{
}

export class DeleteStrategicThemeResponse extends Response
{
}

export class ListCustomAttributeValuesResponse extends ListResponse<CustomAttributeValueDto>
{
}

export class ListStrategicThemesResponse extends ListResponse<StrategicThemeDto>
{
}

export class ReorderStrategicThemesResponse extends Response
{
}

export class ShowStrategicThemeResponse extends UnitResponse<StrategicThemeDto>
{
}

export class StrategicThemeLookupResponse extends ListResponse<IdAndNamePairDto>
{
}

export class UpdateCustomAttributeValueResponse extends Response
{
}

export class UpdateStrategicThemeResponse extends Response
{
}

export class ListStrategicThemeStatesResponse extends ListResponse<StrategicThemeStateDto>
{
}

export class UpdateStrategicThemeStateResponse extends Response
{
}

export class ShowBudgetCapacityResponse extends ListResponse<BudgetCapacityDto>
{
}

export class ShowExternalTeamCapacityResponse extends ListResponse<ExternalTeamCapacityDto>
{
}

export class ShowInternalTeamCapacityResponse extends ListResponse<InternalTeamCapacityDto>
{
}

export class UpdateBudgetCapacityResponse extends Response
{
}

export class UpdateExternalTeamCapacityResponse extends Response
{
}

export class UpdateInternalTeamCapacityResponse extends Response
{
}

export class AllocateEpicBudgetResponse extends UnitResponse<number>
{
}

export class AllocateExternalTeamResponse extends UnitResponse<number>
{
}

export class AllocateFeatureBudgetResponse extends UnitResponse<number>
{
}

export class AllocateInternalTeamResponse extends UnitResponse<number>
{
}

export class ShowEpicBudgetAllocationResponse extends ListResponse<EpicBudgetAllocationDto>
{
}

export class ShowExternalTeamAllocationResponse extends ListResponse<ExternalTeamAllocationDto>
{
}

export class ShowFeatureBudgetAllocationResponse extends ListResponse<FeatureBudgetAllocationDto>
{
}

export class ShowInternalTeamAllocationResponse extends ListResponse<InternalTeamAllocationDto>
{
}

export class CreateOrganizationResponse extends UnitResponse<number>
{
}

export class DeleteOrganizationResponse extends Response
{
}

export class ListOrganizationsResponse extends ListResponse<IdAndNamePairDto>
{
}

export class ShowOrganizationResponse extends UnitResponse<OrganizationDto>
{
}

export class UpdateOrganizationResponse extends Response
{
}

export class CreateInternalTeamResponse extends UnitResponse<number>
{
}

export class DeleteInternalTeamResponse extends Response
{
}

export class ListInternalTeamsResponse extends ListResponse<InternalTeamDto>
{
}

export class ShowInternalTeamResponse extends UnitResponse<InternalTeamDto>
{
}

export class UpdateInternalTeamResponse extends Response
{
}

export class CreateFeatureResponse extends UnitResponse<number>
{
}

export class DeleteFeatureResponse extends Response
{
}

export class FeatureLookupResponse extends ListResponse<IdAndNamePairDto>
{
}

export class ListFeaturesResponse extends ListResponse<FeatureDto>
{
}

export class MoveFeatureResponse extends Response
{
}

export class ShowFeatureResponse extends UnitResponse<FeatureDto>
{
}

export class UpdateFeatureResponse extends Response
{
}

export class CreateFeatureTypeResponse extends UnitResponse<number>
{
}

export class DeleteFeatureTypeResponse extends Response
{
}

export class ListFeaturePropertiesResponse extends UnitResponse<FeaturePropertiesDto>
{
}

export class UpdateFeaturePropertiesResponse extends Response
{
}

export class CreateExternalTeamResponse extends UnitResponse<number>
{
}

export class DeleteExternalTeamResponse extends Response
{
}

export class ListExternalTeamsResponse extends ListResponse<ExternalTeamDto>
{
}

export class ShowExternalTeamResponse extends UnitResponse<ExternalTeamDto>
{
}

export class UpdateExternalTeamResponse extends Response
{
}

export class ListEpicTimeboxesResponse extends ListResponse<EpicTimeboxDto>
{
}

export class LockEpicTimeboxResponse extends Response
{
}

export class MoveEpicResponse extends Response
{
}

export class SeedEpicTimeboxesResponse extends Response
{
}

export class ShowEpicBacklogResponse extends ListResponse<EpicTimeboxCardDto>
{
}

export class ShowEpicTimeboxSettingsResponse extends UnitResponse<EpicTimeboxSettingDto>
{
}

export class UnlockEpicTimeboxResponse extends Response
{
}

export class UpdateEpicTimeboxSettingsResponse extends Response
{
}

export class CreateEpicResponse extends UnitResponse<number>
{
}

export class DeleteEpicResponse extends Response
{
}

export class EpicLookupResponse extends ListResponse<IdAndNamePairDto>
{
}

export class ListEpicFeaturesResponse extends ListResponse<FeatureDto>
{
}

export class ListEpicsResponse extends ListResponse<EpicDto>
{
}

export class ShowEpicResponse extends UnitResponse<EpicDto>
{
}

export class UpdateEpicResponse extends Response
{
}

export class CreateEpicTypeResponse extends UnitResponse<number>
{
}

export class DeleteEpicTypeResponse extends Response
{
}

export class ListEpicPropertiesResponse extends UnitResponse<EpicPropertiesDto>
{
}

export class UpdateEpicPropertiesResponse extends Response
{
}

export class CreateEpicBusinessCaseResponse extends UnitResponse<number>
{
}

export class ListEpicBusinessCasesResponse extends ListResponse<EpicBusinessCaseDto>
{
}

export class ShowCurrentEpicBusinessCaseResponse extends UnitResponse<EpicBusinessCaseDto>
{
}

export class CreateCustomAttributeResponse extends UnitResponse<number>
{
}

export class DeleteCustomAttributeResponse extends Response
{
}

export class ListCustomAttributesResponse extends ListResponse<CustomAttributeDto>
{
}

export class ShowCustomAttributeResponse extends UnitResponse<CustomAttributeDto>
{
}

export class UpdateCustomAttributeResponse extends Response
{
}

export class CostCenterLookupResponse extends ListResponse<IdAndNamePairDto>
{
}

export class CreateCostCenterResponse extends UnitResponse<number>
{
}

export class DeleteCostCenterResponse extends Response
{
}

export class ListCostCenterResourcesResponse extends UnitResponse<CostCenterResourcesDto>
{
}

export class ListCostCentersResponse extends ListResponse<CostCenterDto>
{
}

export class ShowCostCenterResponse extends UnitResponse<CostCenterDto>
{
}

export class UpdateCostCenterResponse extends Response
{
}

export class CreateCostCenterBudgetResponse extends UnitResponse<number>
{
}

export class DeleteCostCenterBudgetResponse extends Response
{
}

export class ListCostCenterBudgetsResponse extends ListResponse<CostCenterBudgetDto>
{
}

export class ShowCostCenterBudgetResponse extends UnitResponse<CostCenterBudgetDto>
{
}

export class UpdateCostCenterBudgetResponse extends Response
{
}

export class LoginResponse extends UnitResponse<LoggedInUserDto>
{
}

export class LogoutResponse extends Response
{
}

// @Route("/workpackages", "POST")
export class CreateWorkPackageRequest implements IReturn<CreateWorkPackageResponse>
{
    name: string;
    createResponse() { return new CreateWorkPackageResponse(); }
    getTypeName() { return "CreateWorkPackageRequest"; }
}

// @Route("/workpackages/{Id}", "DELETE")
export class DeleteWorkPackageRequest implements IReturn<DeleteWorkPackageResponse>
{
    id: number;
    createResponse() { return new DeleteWorkPackageResponse(); }
    getTypeName() { return "DeleteWorkPackageRequest"; }
}

// @Route("/workpackages", "GET")
export class ListWorkPackagesRequest implements IReturn<ListWorkPackagesResponse>
{
    createResponse() { return new ListWorkPackagesResponse(); }
    getTypeName() { return "ListWorkPackagesRequest"; }
}

// @Route("/workpackages/{Id}", "PUT")
export class UpdateWorkPackageRequest implements IReturn<UpdateWorkPackageResponse>
{
    id: number;
    name: string;
    createResponse() { return new UpdateWorkPackageResponse(); }
    getTypeName() { return "UpdateWorkPackageRequest"; }
}

// @Route("/users", "POST")
export class CreateUserRequest implements IReturn<CreateUserResponse>
{
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    timeZone: string;
    createResponse() { return new CreateUserResponse(); }
    getTypeName() { return "CreateUserRequest"; }
}

// @Route("/users/{Id}", "DELETE")
export class DeleteUserRequest implements IReturn<DeleteUserResponse>
{
    id: number;
    createResponse() { return new DeleteUserResponse(); }
    getTypeName() { return "DeleteUserRequest"; }
}

// @Route("/users", "GET")
export class ListUsersRequest implements IReturn<ListUsersResponse>
{
    createResponse() { return new ListUsersResponse(); }
    getTypeName() { return "ListUsersRequest"; }
}

// @Route("/users/{Id}", "GET")
export class ShowUserRequest implements IReturn<ShowUserResponse>
{
    id: number;
    createResponse() { return new ShowUserResponse(); }
    getTypeName() { return "ShowUserRequest"; }
}

// @Route("/users/{Id}", "PUT")
export class UpdateUserRequest implements IReturn<UpdateUserResponse>
{
    id: number;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    timeZone: string;
    createResponse() { return new UpdateUserResponse(); }
    getTypeName() { return "UpdateUserRequest"; }
}

// @Route("/strategic-themes/{StrategicThemeId}/attributes", "POST")
export class CreateCustomAttributeValueRequest implements IReturn<CreateCustomAttributeValueResponse>
{
    strategicThemeId: number;
    attributeId: number;
    value: string;
    createResponse() { return new CreateCustomAttributeValueResponse(); }
    getTypeName() { return "CreateCustomAttributeValueRequest"; }
}

// @Route("/strategic-themes", "POST")
export class CreateStrategicThemeRequest implements IReturn<CreateStrategicThemeResponse>
{
    name: string;
    description: string;
    ownerId: number;
    createResponse() { return new CreateStrategicThemeResponse(); }
    getTypeName() { return "CreateStrategicThemeRequest"; }
}

// @Route("/strategic-themes/{StrategicThemeId}/attributes/{Id}", "DELETE")
export class DeleteCustomAttributeValueRequest implements IReturn<DeleteCustomAttributeValueResponse>
{
    id: number;
    createResponse() { return new DeleteCustomAttributeValueResponse(); }
    getTypeName() { return "DeleteCustomAttributeValueRequest"; }
}

// @Route("/strategic-themes/{Id}", "DELETE")
export class DeleteStrategicThemeRequest implements IReturn<DeleteStrategicThemeResponse>
{
    id: number;
    createResponse() { return new DeleteStrategicThemeResponse(); }
    getTypeName() { return "DeleteStrategicThemeRequest"; }
}

// @Route("/strategic-themes/{StrategicThemeId}/attributes", "GET")
export class ListCustomAttributeValuesRequest implements IReturn<ListCustomAttributeValuesResponse>
{
    strategicThemeId: number;
    createResponse() { return new ListCustomAttributeValuesResponse(); }
    getTypeName() { return "ListCustomAttributeValuesRequest"; }
}

// @Route("/strategic-themes", "GET")
export class ListStrategicThemesRequest implements IReturn<ListStrategicThemesResponse>
{
    createResponse() { return new ListStrategicThemesResponse(); }
    getTypeName() { return "ListStrategicThemesRequest"; }
}

// @Route("/strategic-themes/reorder", "PUT")
export class ReorderStrategicThemesRequest implements IReturn<ReorderStrategicThemesResponse>
{
    rankings: StrategicThemeRankingDto[];
    createResponse() { return new ReorderStrategicThemesResponse(); }
    getTypeName() { return "ReorderStrategicThemesRequest"; }
}

// @Route("/strategic-themes/{Id}", "GET")
export class ShowStrategicThemeRequest implements IReturn<ShowStrategicThemeResponse>
{
    id: number;
    createResponse() { return new ShowStrategicThemeResponse(); }
    getTypeName() { return "ShowStrategicThemeRequest"; }
}

// @Route("/strategic-themes/lookup", "GET")
export class StrategicThemeLookupRequest implements IReturn<StrategicThemeLookupResponse>
{
    search: string;
    createResponse() { return new StrategicThemeLookupResponse(); }
    getTypeName() { return "StrategicThemeLookupRequest"; }
}

// @Route("/strategic-themes/{StrategicThemeId}/attributes/{Id}", "PUT")
export class UpdateCustomAttributeValueRequest implements IReturn<UpdateCustomAttributeValueResponse>
{
    id: number;
    value: string;
    createResponse() { return new UpdateCustomAttributeValueResponse(); }
    getTypeName() { return "UpdateCustomAttributeValueRequest"; }
}

// @Route("/strategic-themes/{Id}", "PUT")
export class UpdateStrategicThemeRequest implements IReturn<UpdateStrategicThemeResponse>
{
    id: number;
    name: string;
    description: string;
    stateId: StrategicThemeStateEnum;
    ownerId: number;
    createResponse() { return new UpdateStrategicThemeResponse(); }
    getTypeName() { return "UpdateStrategicThemeRequest"; }
}

// @Route("/strategic-theme-properties/states", "GET")
export class ListStrategicThemeStatesRequest implements IReturn<ListStrategicThemeStatesResponse>
{
    createResponse() { return new ListStrategicThemeStatesResponse(); }
    getTypeName() { return "ListStrategicThemeStatesRequest"; }
}

// @Route("/strategic-theme-properties/states", "PUT")
export class UpdateStrategicThemeStateRequest implements IReturn<UpdateStrategicThemeStateResponse>
{
    id: StrategicThemeStateEnum;
    name: string;
    createResponse() { return new UpdateStrategicThemeStateResponse(); }
    getTypeName() { return "UpdateStrategicThemeStateRequest"; }
}

// @Route("/resource-capacity/budget", "GET")
export class ShowBudgetCapacityRequest implements IReturn<ShowBudgetCapacityResponse>
{
    costCenterId: number;
    timeboxId: number;
    createResponse() { return new ShowBudgetCapacityResponse(); }
    getTypeName() { return "ShowBudgetCapacityRequest"; }
}

// @Route("/resource-capacity/external-teams", "GET")
export class ShowExternalTeamCapacityRequest implements IReturn<ShowExternalTeamCapacityResponse>
{
    costCenterId: number;
    timeboxId: number;
    createResponse() { return new ShowExternalTeamCapacityResponse(); }
    getTypeName() { return "ShowExternalTeamCapacityRequest"; }
}

// @Route("/resource-capacity/internal-teams", "GET")
export class ShowInternalTeamCapacityRequest implements IReturn<ShowInternalTeamCapacityResponse>
{
    costCenterId: number;
    timeboxId: number;
    createResponse() { return new ShowInternalTeamCapacityResponse(); }
    getTypeName() { return "ShowInternalTeamCapacityRequest"; }
}

// @Route("/resource-capacity/budget", "PUT")
export class UpdateBudgetCapacityRequest implements IReturn<UpdateBudgetCapacityResponse>
{
    updates: BudgetCapacityUpdateDto[];
    createResponse() { return new UpdateBudgetCapacityResponse(); }
    getTypeName() { return "UpdateBudgetCapacityRequest"; }
}

// @Route("/resource-capacity/external-teams", "PUT")
export class UpdateExternalTeamCapacityRequest implements IReturn<UpdateExternalTeamCapacityResponse>
{
    updates: ExternalTeamCapacityUpdateDto[];
    createResponse() { return new UpdateExternalTeamCapacityResponse(); }
    getTypeName() { return "UpdateExternalTeamCapacityRequest"; }
}

// @Route("/resource-capacity/internal-teams", "PUT")
export class UpdateInternalTeamCapacityRequest implements IReturn<UpdateInternalTeamCapacityResponse>
{
    updates: InternalTeamCapacityUpdateDto[];
    createResponse() { return new UpdateInternalTeamCapacityResponse(); }
    getTypeName() { return "UpdateInternalTeamCapacityRequest"; }
}

// @Route("/resource-allocations/budget/epic", "POST")
export class AllocateEpicBudgetRequest implements IReturn<AllocateEpicBudgetResponse>
{
    timeboxId: number;
    budgetId: number;
    epicId: number;
    amount: number;
    description: string;
    createResponse() { return new AllocateEpicBudgetResponse(); }
    getTypeName() { return "AllocateEpicBudgetRequest"; }
}

// @Route("/resource-allocations/external-team", "POST")
export class AllocateExternalTeamRequest implements IReturn<AllocateExternalTeamResponse>
{
    timeboxId: number;
    featureId: number;
    externalTeamId: number;
    amount: number;
    description: string;
    createResponse() { return new AllocateExternalTeamResponse(); }
    getTypeName() { return "AllocateExternalTeamRequest"; }
}

// @Route("/resource-allocations/budget/feature", "POST")
export class AllocateFeatureBudgetRequest implements IReturn<AllocateFeatureBudgetResponse>
{
    timeboxId: number;
    budgetId: number;
    featureId: number;
    amount: number;
    description: string;
    createResponse() { return new AllocateFeatureBudgetResponse(); }
    getTypeName() { return "AllocateFeatureBudgetRequest"; }
}

// @Route("/resource-allocations/internal-team", "POST")
export class AllocateInternalTeamRequest implements IReturn<AllocateInternalTeamResponse>
{
    timeboxId: number;
    featureId: number;
    internalTeamId: number;
    amount: number;
    description: string;
    createResponse() { return new AllocateInternalTeamResponse(); }
    getTypeName() { return "AllocateInternalTeamRequest"; }
}

// @Route("/resource-allocations/budget/epic", "GET")
export class ShowEpicBudgetAllocationRequest implements IReturn<ShowEpicBudgetAllocationResponse>
{
    timeboxId: number;
    epicId: number;
    createResponse() { return new ShowEpicBudgetAllocationResponse(); }
    getTypeName() { return "ShowEpicBudgetAllocationRequest"; }
}

// @Route("/resource-allocations/external-team", "GET")
export class ShowExternalTeamAllocationRequest implements IReturn<ShowExternalTeamAllocationResponse>
{
    timeboxId: number;
    featureId: number;
    createResponse() { return new ShowExternalTeamAllocationResponse(); }
    getTypeName() { return "ShowExternalTeamAllocationRequest"; }
}

// @Route("/resource-allocations/budget/feature", "GET")
export class ShowFeatureBudgetAllocationRequest implements IReturn<ShowFeatureBudgetAllocationResponse>
{
    timeboxId: number;
    featureId: number;
    createResponse() { return new ShowFeatureBudgetAllocationResponse(); }
    getTypeName() { return "ShowFeatureBudgetAllocationRequest"; }
}

// @Route("/resource-allocations/internal-team", "GET")
export class ShowInternalTeamAllocationRequest implements IReturn<ShowInternalTeamAllocationResponse>
{
    timeboxId: number;
    featureId: number;
    createResponse() { return new ShowInternalTeamAllocationResponse(); }
    getTypeName() { return "ShowInternalTeamAllocationRequest"; }
}

// @Route("/organizations", "POST")
export class CreateOrganizationRequest implements IReturn<CreateOrganizationResponse>
{
    name: string;
    description: string;
    createResponse() { return new CreateOrganizationResponse(); }
    getTypeName() { return "CreateOrganizationRequest"; }
}

// @Route("/organizations/{Id}", "DELETE")
export class DeleteOrganizationRequest implements IReturn<DeleteOrganizationResponse>
{
    id: number;
    createResponse() { return new DeleteOrganizationResponse(); }
    getTypeName() { return "DeleteOrganizationRequest"; }
}

// @Route("/organizations", "GET")
export class ListOrganizationsRequest implements IReturn<ListOrganizationsResponse>
{
    createResponse() { return new ListOrganizationsResponse(); }
    getTypeName() { return "ListOrganizationsRequest"; }
}

// @Route("/organizations/{Id}", "GET")
export class ShowOrganizationRequest implements IReturn<ShowOrganizationResponse>
{
    id: number;
    createResponse() { return new ShowOrganizationResponse(); }
    getTypeName() { return "ShowOrganizationRequest"; }
}

// @Route("/organizations/{Id}", "PUT")
export class UpdateOrganizationRequest implements IReturn<UpdateOrganizationResponse>
{
    id: number;
    name: string;
    description: string;
    createResponse() { return new UpdateOrganizationResponse(); }
    getTypeName() { return "UpdateOrganizationRequest"; }
}

// @Route("/internal-teams", "POST")
export class CreateInternalTeamRequest implements IReturn<CreateInternalTeamResponse>
{
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new CreateInternalTeamResponse(); }
    getTypeName() { return "CreateInternalTeamRequest"; }
}

// @Route("/internal-teams/{Id}", "DELETE")
export class DeleteInternalTeamRequest implements IReturn<DeleteInternalTeamResponse>
{
    id: number;
    createResponse() { return new DeleteInternalTeamResponse(); }
    getTypeName() { return "DeleteInternalTeamRequest"; }
}

// @Route("/internal-teams", "GET")
export class ListInternalTeamsRequest implements IReturn<ListInternalTeamsResponse>
{
    createResponse() { return new ListInternalTeamsResponse(); }
    getTypeName() { return "ListInternalTeamsRequest"; }
}

// @Route("/internal-teams/{Id}", "GET")
export class ShowInternalTeamRequest implements IReturn<ShowInternalTeamResponse>
{
    id: number;
    createResponse() { return new ShowInternalTeamResponse(); }
    getTypeName() { return "ShowInternalTeamRequest"; }
}

// @Route("/internal-teams/{Id}", "PUT")
export class UpdateInternalTeamRequest implements IReturn<UpdateInternalTeamResponse>
{
    id: number;
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new UpdateInternalTeamResponse(); }
    getTypeName() { return "UpdateInternalTeamRequest"; }
}

// @Route("/features", "POST")
export class CreateFeatureRequest implements IReturn<CreateFeatureResponse>
{
    name: string;
    description: string;
    epicId: number;
    ownerId: number;
    typeId: number;
    costEstimate: number;
    sizeEstimate: number;
    completeness: number;
    link: string;
    workPackageId: number;
    createResponse() { return new CreateFeatureResponse(); }
    getTypeName() { return "CreateFeatureRequest"; }
}

// @Route("/features/{Id}", "DELETE")
export class DeleteFeatureRequest implements IReturn<DeleteFeatureResponse>
{
    id: number;
    createResponse() { return new DeleteFeatureResponse(); }
    getTypeName() { return "DeleteFeatureRequest"; }
}

// @Route("/features/lookup", "GET")
export class FeatureLookupRequest implements IReturn<FeatureLookupResponse>
{
    search: string;
    epicId: number;
    createResponse() { return new FeatureLookupResponse(); }
    getTypeName() { return "FeatureLookupRequest"; }
}

// @Route("/features", "GET")
export class ListFeaturesRequest implements IReturn<ListFeaturesResponse>
{
    createResponse() { return new ListFeaturesResponse(); }
    getTypeName() { return "ListFeaturesRequest"; }
}

// @Route("/features/{Id}/move", "PUT")
export class MoveFeatureRequest implements IReturn<MoveFeatureResponse>
{
    id: number;
    stateId: FeatureStateEnum;
    previousFeatureRank: number;
    followingFeatureRank: number;
    createResponse() { return new MoveFeatureResponse(); }
    getTypeName() { return "MoveFeatureRequest"; }
}

// @Route("/features/{Id}", "GET")
export class ShowFeatureRequest implements IReturn<ShowFeatureResponse>
{
    id: number;
    createResponse() { return new ShowFeatureResponse(); }
    getTypeName() { return "ShowFeatureRequest"; }
}

// @Route("/features/{Id}", "PUT")
export class UpdateFeatureRequest implements IReturn<UpdateFeatureResponse>
{
    id: number;
    name: string;
    description: string;
    epicId: number;
    ownerId: number;
    typeId: number;
    stateId: FeatureStateEnum;
    statusId: FeatureStatusEnum;
    costEstimate: number;
    sizeEstimate: number;
    completeness: number;
    link: string;
    workPackageId: number;
    createResponse() { return new UpdateFeatureResponse(); }
    getTypeName() { return "UpdateFeatureRequest"; }
}

// @Route("/feature-properties/types", "POST")
export class CreateFeatureTypeRequest implements IReturn<CreateFeatureTypeResponse>
{
    name: string;
    createResponse() { return new CreateFeatureTypeResponse(); }
    getTypeName() { return "CreateFeatureTypeRequest"; }
}

// @Route("/feature-properties/types/{id}", "DELETE")
export class DeleteFeatureTypeRequest implements IReturn<DeleteFeatureTypeResponse>
{
    id: number;
    createResponse() { return new DeleteFeatureTypeResponse(); }
    getTypeName() { return "DeleteFeatureTypeRequest"; }
}

// @Route("/feature-properties", "GET")
export class ListFeaturePropertiesRequest implements IReturn<ListFeaturePropertiesResponse>
{
    createResponse() { return new ListFeaturePropertiesResponse(); }
    getTypeName() { return "ListFeaturePropertiesRequest"; }
}

// @Route("/feature-properties", "PUT")
export class UpdateFeaturePropertiesRequest implements IReturn<UpdateFeaturePropertiesResponse>
{
    properties: FeaturePropertiesDto;
    createResponse() { return new UpdateFeaturePropertiesResponse(); }
    getTypeName() { return "UpdateFeaturePropertiesRequest"; }
}

// @Route("/external-teams", "POST")
export class CreateExternalTeamRequest implements IReturn<CreateExternalTeamResponse>
{
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new CreateExternalTeamResponse(); }
    getTypeName() { return "CreateExternalTeamRequest"; }
}

// @Route("/external-teams/{Id}", "DELETE")
export class DeleteExternalTeamRequest implements IReturn<DeleteExternalTeamResponse>
{
    id: number;
    createResponse() { return new DeleteExternalTeamResponse(); }
    getTypeName() { return "DeleteExternalTeamRequest"; }
}

// @Route("/external-teams", "GET")
export class ListExternalTeamsRequest implements IReturn<ListExternalTeamsResponse>
{
    createResponse() { return new ListExternalTeamsResponse(); }
    getTypeName() { return "ListExternalTeamsRequest"; }
}

// @Route("/external-teams/{Id}", "GET")
export class ShowExternalTeamRequest implements IReturn<ShowExternalTeamResponse>
{
    id: number;
    createResponse() { return new ShowExternalTeamResponse(); }
    getTypeName() { return "ShowExternalTeamRequest"; }
}

// @Route("/external-teams/{Id}", "PUT")
export class UpdateExternalTeamRequest implements IReturn<UpdateExternalTeamResponse>
{
    id: number;
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new UpdateExternalTeamResponse(); }
    getTypeName() { return "UpdateExternalTeamRequest"; }
}

// @Route("/epic-timeboxes", "GET")
export class ListEpicTimeboxesRequest implements IReturn<ListEpicTimeboxesResponse>
{
    from: string;
    createResponse() { return new ListEpicTimeboxesResponse(); }
    getTypeName() { return "ListEpicTimeboxesRequest"; }
}

// @Route("/epic-timeboxes/{Id}/lock", "PUT")
export class LockEpicTimeboxRequest implements IReturn<LockEpicTimeboxResponse>
{
    id: number;
    createResponse() { return new LockEpicTimeboxResponse(); }
    getTypeName() { return "LockEpicTimeboxRequest"; }
}

// @Route("/epic-timeboxes/move-epic", "PUT")
export class MoveEpicRequest implements IReturn<MoveEpicResponse>
{
    epicId: number;
    timeboxId: number;
    previousEpicRank: number;
    followingEpicRank: number;
    createResponse() { return new MoveEpicResponse(); }
    getTypeName() { return "MoveEpicRequest"; }
}

// @Route("/epic-timeboxes", "POST")
export class SeedEpicTimeboxesRequest implements IReturn<SeedEpicTimeboxesResponse>
{
    from: string;
    to: string;
    createResponse() { return new SeedEpicTimeboxesResponse(); }
    getTypeName() { return "SeedEpicTimeboxesRequest"; }
}

// @Route("/epic-timeboxes/backlog", "GET")
export class ShowEpicBacklogRequest implements IReturn<ShowEpicBacklogResponse>
{
    createResponse() { return new ShowEpicBacklogResponse(); }
    getTypeName() { return "ShowEpicBacklogRequest"; }
}

// @Route("/epic-timeboxes/settings", "GET")
export class ShowEpicTimeboxSettingsRequest implements IReturn<ShowEpicTimeboxSettingsResponse>
{
    createResponse() { return new ShowEpicTimeboxSettingsResponse(); }
    getTypeName() { return "ShowEpicTimeboxSettingsRequest"; }
}

// @Route("/epic-timeboxes/{Id}/unlock", "PUT")
export class UnlockEpicTimeboxRequest implements IReturn<UnlockEpicTimeboxResponse>
{
    id: number;
    createResponse() { return new UnlockEpicTimeboxResponse(); }
    getTypeName() { return "UnlockEpicTimeboxRequest"; }
}

// @Route("/epic-timeboxes/settings", "PUT")
export class UpdateEpicTimeboxSettingsRequest implements IReturn<UpdateEpicTimeboxSettingsResponse>
{
    length: number;
    sizeLimit: number;
    backlogSizeLimit: number;
    createResponse() { return new UpdateEpicTimeboxSettingsResponse(); }
    getTypeName() { return "UpdateEpicTimeboxSettingsRequest"; }
}

// @Route("/epics", "POST")
export class CreateEpicRequest implements IReturn<CreateEpicResponse>
{
    name: string;
    description: string;
    outcomes: string;
    strategicThemeId: number;
    typeId: number;
    effortId: EpicEffortEnum;
    realizedMonetaryBenefit: number;
    realizedBenefits: string;
    link: string;
    ownerId: number;
    valueEstimate: number;
    durationEstimate: number;
    completeness: number;
    createResponse() { return new CreateEpicResponse(); }
    getTypeName() { return "CreateEpicRequest"; }
}

// @Route("/epics/{Id}", "DELETE")
export class DeleteEpicRequest implements IReturn<DeleteEpicResponse>
{
    id: number;
    createResponse() { return new DeleteEpicResponse(); }
    getTypeName() { return "DeleteEpicRequest"; }
}

// @Route("/epics/lookup", "GET")
export class EpicLookupRequest implements IReturn<EpicLookupResponse>
{
    search: string;
    timeboxId: number;
    createResponse() { return new EpicLookupResponse(); }
    getTypeName() { return "EpicLookupRequest"; }
}

// @Route("/epics/{Id}/features", "GET")
export class ListEpicFeaturesRequest implements IReturn<ListEpicFeaturesResponse>
{
    id: number;
    createResponse() { return new ListEpicFeaturesResponse(); }
    getTypeName() { return "ListEpicFeaturesRequest"; }
}

// @Route("/epics", "GET")
export class ListEpicsRequest implements IReturn<ListEpicsResponse>
{
    createResponse() { return new ListEpicsResponse(); }
    getTypeName() { return "ListEpicsRequest"; }
}

// @Route("/epics/{Id}", "GET")
export class ShowEpicRequest implements IReturn<ShowEpicResponse>
{
    id: number;
    createResponse() { return new ShowEpicResponse(); }
    getTypeName() { return "ShowEpicRequest"; }
}

// @Route("/epics/{Id}", "PUT")
export class UpdateEpicRequest implements IReturn<UpdateEpicResponse>
{
    id: number;
    name: string;
    description: string;
    outcomes: string;
    strategicThemeId: number;
    typeId: number;
    stateId: EpicStateEnum;
    statusId: EpicStatusEnum;
    effortId: EpicEffortEnum;
    realizedMonetaryBenefit: number;
    realizedBenefits: string;
    link: string;
    ownerId: number;
    valueEstimate: number;
    durationEstimate: number;
    completeness: number;
    createResponse() { return new UpdateEpicResponse(); }
    getTypeName() { return "UpdateEpicRequest"; }
}

// @Route("/epic-properties/types", "POST")
export class CreateEpicTypeRequest implements IReturn<CreateEpicTypeResponse>
{
    name: string;
    createResponse() { return new CreateEpicTypeResponse(); }
    getTypeName() { return "CreateEpicTypeRequest"; }
}

// @Route("/epic-properties/types/{id}", "DELETE")
export class DeleteEpicTypeRequest implements IReturn<DeleteEpicTypeResponse>
{
    id: number;
    createResponse() { return new DeleteEpicTypeResponse(); }
    getTypeName() { return "DeleteEpicTypeRequest"; }
}

// @Route("/epic-properties", "GET")
export class ListEpicPropertiesRequest implements IReturn<ListEpicPropertiesResponse>
{
    createResponse() { return new ListEpicPropertiesResponse(); }
    getTypeName() { return "ListEpicPropertiesRequest"; }
}

// @Route("/epic-properties", "PUT")
export class UpdateEpicPropertiesRequest implements IReturn<UpdateEpicPropertiesResponse>
{
    properties: EpicPropertiesDto;
    createResponse() { return new UpdateEpicPropertiesResponse(); }
    getTypeName() { return "UpdateEpicPropertiesRequest"; }
}

// @Route("/epics/{EpicId}/businesscases", "POST")
export class CreateEpicBusinessCaseRequest implements IReturn<CreateEpicBusinessCaseResponse>
{
    epicId: number;
    costEstimate: number;
    monetaryBenefit: number;
    ownerId: number;
    analysisSummary: string;
    impactToStrategicGoals: string;
    benefitsAndFinancialImpact: string;
    riskAndReductions: string;
    createResponse() { return new CreateEpicBusinessCaseResponse(); }
    getTypeName() { return "CreateEpicBusinessCaseRequest"; }
}

// @Route("/epics/{EpicId}/businesscases", "GET")
export class ListEpicBusinessCasesRequest implements IReturn<ListEpicBusinessCasesResponse>
{
    epicId: number;
    createResponse() { return new ListEpicBusinessCasesResponse(); }
    getTypeName() { return "ListEpicBusinessCasesRequest"; }
}

// @Route("/epics/{EpicId}/businesscases/current", "GET")
export class ShowCurrentEpicBusinessCaseRequest implements IReturn<ShowCurrentEpicBusinessCaseResponse>
{
    epicId: number;
    createResponse() { return new ShowCurrentEpicBusinessCaseResponse(); }
    getTypeName() { return "ShowCurrentEpicBusinessCaseRequest"; }
}

// @Route("/custom-attributes", "POST")
export class CreateCustomAttributeRequest implements IReturn<CreateCustomAttributeResponse>
{
    name: string;
    description: string;
    createResponse() { return new CreateCustomAttributeResponse(); }
    getTypeName() { return "CreateCustomAttributeRequest"; }
}

// @Route("/custom-attributes/{Id}", "DELETE")
export class DeleteCustomAttributeRequest implements IReturn<DeleteCustomAttributeResponse>
{
    id: number;
    createResponse() { return new DeleteCustomAttributeResponse(); }
    getTypeName() { return "DeleteCustomAttributeRequest"; }
}

// @Route("/custom-attributes/{Id}", "GET")
export class ListCustomAttributesRequest implements IReturn<ListCustomAttributesResponse>
{
    id: number;
    createResponse() { return new ListCustomAttributesResponse(); }
    getTypeName() { return "ListCustomAttributesRequest"; }
}

// @Route("/custom-attributes/{Id}", "GET")
export class ShowCustomAttributeRequest implements IReturn<ShowCustomAttributeResponse>
{
    id: number;
    createResponse() { return new ShowCustomAttributeResponse(); }
    getTypeName() { return "ShowCustomAttributeRequest"; }
}

// @Route("/custom-attributes/{Id}", "PUT")
export class UpdateCustomAttributeRequest implements IReturn<UpdateCustomAttributeResponse>
{
    id: number;
    name: string;
    description: string;
    createResponse() { return new UpdateCustomAttributeResponse(); }
    getTypeName() { return "UpdateCustomAttributeRequest"; }
}

// @Route("/costcenters/lookup", "GET")
export class CostCenterLookupRequest implements IReturn<CostCenterLookupResponse>
{
    search: string;
    createResponse() { return new CostCenterLookupResponse(); }
    getTypeName() { return "CostCenterLookupRequest"; }
}

// @Route("/costcenters", "POST")
export class CreateCostCenterRequest implements IReturn<CreateCostCenterResponse>
{
    name: string;
    description: string;
    ownerId: number;
    createResponse() { return new CreateCostCenterResponse(); }
    getTypeName() { return "CreateCostCenterRequest"; }
}

// @Route("/costcenters/{Id}", "DELETE")
export class DeleteCostCenterRequest implements IReturn<DeleteCostCenterResponse>
{
    id: number;
    createResponse() { return new DeleteCostCenterResponse(); }
    getTypeName() { return "DeleteCostCenterRequest"; }
}

// @Route("/costcenters/{Id}/resources", "GET")
export class ListCostCenterResourcesRequest implements IReturn<ListCostCenterResourcesResponse>
{
    id: number;
    createResponse() { return new ListCostCenterResourcesResponse(); }
    getTypeName() { return "ListCostCenterResourcesRequest"; }
}

// @Route("/costcenters", "GET")
export class ListCostCentersRequest implements IReturn<ListCostCentersResponse>
{
    createResponse() { return new ListCostCentersResponse(); }
    getTypeName() { return "ListCostCentersRequest"; }
}

// @Route("/costcenters/{Id}", "GET")
export class ShowCostCenterRequest implements IReturn<ShowCostCenterResponse>
{
    id: number;
    createResponse() { return new ShowCostCenterResponse(); }
    getTypeName() { return "ShowCostCenterRequest"; }
}

// @Route("/costcenters/{Id}", "PUT")
export class UpdateCostCenterRequest implements IReturn<UpdateCostCenterResponse>
{
    id: number;
    name: string;
    description: string;
    ownerId: number;
    createResponse() { return new UpdateCostCenterResponse(); }
    getTypeName() { return "UpdateCostCenterRequest"; }
}

// @Route("/costcenter-budgets", "POST")
export class CreateCostCenterBudgetRequest implements IReturn<CreateCostCenterBudgetResponse>
{
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new CreateCostCenterBudgetResponse(); }
    getTypeName() { return "CreateCostCenterBudgetRequest"; }
}

// @Route("/costcenter-budgets/{Id}", "DELETE")
export class DeleteCostCenterBudgetRequest implements IReturn<DeleteCostCenterBudgetResponse>
{
    id: number;
    createResponse() { return new DeleteCostCenterBudgetResponse(); }
    getTypeName() { return "DeleteCostCenterBudgetRequest"; }
}

// @Route("/costcenter-budgets", "GET")
export class ListCostCenterBudgetsRequest implements IReturn<ListCostCenterBudgetsResponse>
{
    createResponse() { return new ListCostCenterBudgetsResponse(); }
    getTypeName() { return "ListCostCenterBudgetsRequest"; }
}

// @Route("/costcenter-budgets/{Id}", "GET")
export class ShowCostCenterBudgetRequest implements IReturn<ShowCostCenterBudgetResponse>
{
    id: number;
    createResponse() { return new ShowCostCenterBudgetResponse(); }
    getTypeName() { return "ShowCostCenterBudgetRequest"; }
}

// @Route("/costcenter-budgets/{Id}", "PUT")
export class UpdateCostCenterBudgetRequest implements IReturn<UpdateCostCenterBudgetResponse>
{
    id: number;
    name: string;
    costCenterId: number;
    function: string;
    ownerId: number;
    createResponse() { return new UpdateCostCenterBudgetResponse(); }
    getTypeName() { return "UpdateCostCenterBudgetRequest"; }
}

// @Route("/login", "POST")
export class LoginRequest implements IReturn<LoginResponse>, IPost
{
    userName: string;
    password: string;
    rememberMe: boolean;
    createResponse() { return new LoginResponse(); }
    getTypeName() { return "LoginRequest"; }
}

// @Route("/logout", "POST")
export class LogoutRequest implements IReturn<LogoutResponse>
{
    createResponse() { return new LogoutResponse(); }
    getTypeName() { return "LogoutRequest"; }
}
