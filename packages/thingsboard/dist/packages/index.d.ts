import "reflect-metadata";
import { AdminService as AdminServiceInternal } from "./core/http/admin.service";
import { OAuth2Service as OAuth2ServiceInternal } from "./core/http/oauth2.service";
import { OtaPackageService as OtaPackageServiceInternal } from "./core/http/ota-package.service";
import { QueueService as QueueServiceInternal } from "./core/http/queue.service";
import { AlarmService as AlarmServiceInternal, AssetService as AssetServiceInternal, AttributeService as AttributeServiceInternal, AuditLogService as AuditLogServiceInternal, CustomerService as CustomerServiceInternal, DeviceService as DeviceServiceInternal, EntityRelationService as EntityRelationServiceInternal, EntityService as EntityServiceInternal, EntityViewService as EntityViewServiceInternal, EventService as EventServiceInternal, TenantService as TenantServiceInternal, UserService as UserServiceInternal } from "./core/http/public-api";
import { AuthService as AuthServiceInternal } from "./core/auth/auth.service";
import { TenantProfileService as TenantProfileServiceInternal } from "./core/http/tenant-profile.service";
import { DataSubscriptionService as DataSubscriptionServiceInternal } from "./core/api/data-subscription.service";
import { DeviceProfileService as DataDeviceProfileService } from "./core/http/device-profile.service";
import { AssetProfileService as DataAssetProfileService } from "./core/http/asset-profile.service";
import { EntityGroupService as DataEntityGroupService } from "./core/http/entity-group.service";
import { SchedulerService as SchedulerServiceInternal } from "./core/http/scheduler.service";
import { ImageService as ImageServiceInternal } from "./core/http/image.service";
import { NotificationService as NotificationServiceInternal } from "./core/http/notification.service";
import { HttpClient } from "./angular-http";
import { NotificationWebsocketService as NotificationWebsocketServiceInternal } from "./core/ws/notification-websocket.service";
declare const AdminService: AdminServiceInternal;
declare const OAuth2Service: OAuth2ServiceInternal;
declare const OtaPackageService: OtaPackageServiceInternal;
declare const QueueService: QueueServiceInternal;
declare const TenantProfileService: TenantProfileServiceInternal;
declare const TenantService: TenantServiceInternal;
declare const UserService: UserServiceInternal;
declare const AlarmService: AlarmServiceInternal;
declare const AssetService: AssetServiceInternal;
declare const AttributeService: AttributeServiceInternal;
declare const AuditLogService: AuditLogServiceInternal;
declare const CustomerService: CustomerServiceInternal;
declare const DeviceService: DeviceServiceInternal;
declare const EntityRelationService: EntityRelationServiceInternal;
declare const EntityViewService: EntityViewServiceInternal;
declare const EntityService: EntityServiceInternal;
declare const EventService: EventServiceInternal;
declare const AuthService: AuthServiceInternal;
declare const DeviceProfileService: DataDeviceProfileService;
declare const AssetProfileService: DataAssetProfileService;
declare const DataSubscriptionService: DataSubscriptionServiceInternal;
declare const EntityGroupService: DataEntityGroupService;
declare const SchedulerService: SchedulerServiceInternal;
declare const ImageService: ImageServiceInternal;
declare const NotificationService: NotificationServiceInternal;
declare const NotificationWebsocketService: NotificationWebsocketServiceInternal;
declare const HttpService: HttpClient;
export { AuthService, AdminService, OAuth2Service, QueueService, OtaPackageService, TenantProfileService, TenantService, UserService, AlarmService, AssetService, AttributeService, AuditLogService, CustomerService, DeviceService, EntityRelationService, EntityViewService, EntityService, EventService, DataSubscriptionService, DeviceProfileService, AssetProfileService, EntityGroupService, SchedulerService, ImageService, NotificationService, NotificationWebsocketService, HttpService };
export * from "./shared/models/public-api";
export * from "./core/public-api";
export * from "./angular-http";
export * from "./inversify";
export * from "./inversify/interface";
