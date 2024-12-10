import { Observable } from 'rxjs';
import { HttpClient } from '../../angular-http';
import { PageLink } from '../../shared/models/page/page-link';
import { AliasEntityType, EntityType } from '../../shared/models/entity-type.models';
import { BaseData, HasId } from '../../shared/models/base-data';
import { EntityId } from '../../shared/models/id/entity-id';
import { DeviceService } from '../../core/http/device.service';
import { TenantService } from '../../core/http/tenant.service';
import { CustomerService } from '../../core/http/customer.service';
import { UserService } from './user.service';
import { PageData } from '../../shared/models/page/page-data';
import { AssetService } from '../../core/http/asset.service';
import { EntityViewService } from '../../core/http/entity-view.service';
import { AttributeScope, DataKeyType } from '../../shared/models/telemetry/telemetry.models';
import { RequestConfig } from '../../core/http/http-utils';
import { AliasInfo, StateParams, SubscriptionInfo } from '../../core/api/widget-api.models';
import { DataKey, Datasource } from '../../shared/models/widget.models';
import { UtilsService } from '../../core/services/utils.service';
import { EntityAlias, EntityAliasFilter, EntityAliasFilterResult } from '../../shared/models/alias.models';
import { EntitiesKeysByQuery, EntityInfo, ImportEntitiesResultInfo, ImportEntityData } from '../../shared/models/entity.models';
import { AttributeService } from '../../core/http/attribute.service';
import { AlarmData, AlarmDataQuery, AlarmFilter, AlarmFilterConfig, EntityData, EntityDataQuery, EntityFilter } from '../../shared/models/query/query.models';
import { EdgeEvent } from '../../shared/models/edge.models';
import { DeviceProfileService } from '../../core/http/device-profile.service';
import { QueueService } from '../../core/http/queue.service';
import { AssetProfileService } from '../../core/http/asset-profile.service';
import { NotificationService } from '../../core/http/notification.service';
import { TenantProfileService } from '../../core/http/tenant-profile.service';
import { AlarmService } from '../../core/http/alarm.service';
import { ResourceService } from '../../core/http/resource.service';
export declare class EntityService {
    private http;
    private deviceService;
    private assetService;
    private entityViewService;
    private tenantService;
    private customerService;
    private userService;
    private attributeService;
    private deviceProfileService;
    private tenantProfileService;
    private assetProfileService;
    private utils;
    private queueService;
    private alarmService;
    private notificationService;
    private resourceService;
    store: any;
    constructor(http: HttpClient, deviceService: DeviceService, assetService: AssetService, entityViewService: EntityViewService, tenantService: TenantService, customerService: CustomerService, userService: UserService, attributeService: AttributeService, deviceProfileService: DeviceProfileService, tenantProfileService: TenantProfileService, assetProfileService: AssetProfileService, utils: UtilsService, queueService: QueueService, alarmService: AlarmService, notificationService: NotificationService, resourceService: ResourceService);
    private getEntityObservable;
    getEntity(entityType: EntityType, entityId: string, config?: RequestConfig): Observable<BaseData<EntityId>>;
    private getEntitiesByIdsObservable;
    private getEntitiesObservable;
    getEntities(entityType: EntityType, entityIds: Array<string>, config?: RequestConfig): Observable<Array<BaseData<EntityId>>>;
    private getSingleTenantByPageLinkObservable;
    private getSingleCustomerByPageLinkObservable;
    private getEntitiesByPageLinkObservable;
    private getEntitiesByPageLink;
    getEntitiesByNameFilter(entityType: EntityType, entityNameFilter: string, pageSize: number, subType?: string, config?: RequestConfig): Observable<Array<BaseData<EntityId>>>;
    findEntityDataByQuery(query: EntityDataQuery, config?: RequestConfig): Observable<PageData<EntityData>>;
    findEntityKeysByQuery(query: EntityDataQuery, attributes?: boolean, timeseries?: boolean, scope?: AttributeScope, config?: RequestConfig): Observable<EntitiesKeysByQuery>;
    findAlarmDataByQuery(query: AlarmDataQuery, config?: RequestConfig): Observable<PageData<AlarmData>>;
    findEntityInfosByFilterAndName(filter: EntityFilter, searchText: string, config?: RequestConfig): Observable<PageData<EntityInfo>>;
    findSingleEntityInfoByEntityFilter(filter: EntityFilter, config?: RequestConfig): Observable<EntityInfo>;
    filterAliasByEntityTypes(entityAlias: EntityAlias, entityTypes: Array<EntityType | AliasEntityType>): boolean;
    private filterAliasFilterTypeByEntityTypes;
    private filterAliasFilterTypeByEntityType;
    private getEntityFieldKeys;
    private getAlarmKeys;
    getEntityKeys(entityId: EntityId, query: string, type: DataKeyType, config?: RequestConfig): Observable<Array<string>>;
    getEntityKeysByEntityFilter(filter: EntityFilter, types: DataKeyType[], entityTypes?: EntityType[], config?: RequestConfig): Observable<Array<DataKey>>;
    getEntityKeysByEntityFilterAndScope(filter: EntityFilter, types: DataKeyType[], entityTypes?: EntityType[], scope?: AttributeScope, config?: RequestConfig): Observable<Array<DataKey>>;
    createDatasourcesFromSubscriptionsInfo(subscriptionsInfo: Array<SubscriptionInfo>): Array<Datasource>;
    createAlarmSourceFromSubscriptionInfo(subscriptionInfo: SubscriptionInfo): Datasource;
    resolveAlias(entityAlias: EntityAlias, stateParams: StateParams): Observable<AliasInfo>;
    resolveAliasFilter(filter: EntityAliasFilter, stateParams: StateParams): Observable<EntityAliasFilterResult>;
    checkEntityAlias(entityAlias: EntityAlias): Observable<boolean>;
    resolveAlarmFilter(alarmFilterConfig?: AlarmFilterConfig, searchPropagatedByDefault?: boolean): AlarmFilter;
    saveEntityParameters(entityType: EntityType, entityData: ImportEntityData, update: boolean, config?: RequestConfig): Observable<ImportEntitiesResultInfo>;
    private getSaveEntityObservable;
    private getUpdateEntityTasks;
    saveEntityData(entityId: EntityId, entityData: ImportEntityData, config?: RequestConfig): Observable<any>;
    private getStateEntityInfo;
    private resolveAliasEntityId;
    private createDatasourceFromSubscriptionInfo;
    private validateSubscriptionInfo;
    private prepareEntityFilterFromSubscriptionInfo;
    private createDatasourceKeys;
    getAssignedToEdgeEntitiesByType(edgeId: string, entityType: EntityType, pageLink: PageLink): Observable<PageData<any>>;
    getEdgeEventContent(entity: EdgeEvent): Observable<BaseData<HasId> | any | string>;
    getEntitySubtypesObservable(entityType: EntityType): Observable<Array<string>>;
}