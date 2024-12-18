import { HttpClient } from '../../angular-http';
import { PageLink } from '../../shared/models/page/page-link';
import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { PageData } from '../../shared/models/page/page-data';
import { DeviceProfile, DeviceProfileInfo, DeviceTransportType } from '../../shared/models/device.models';
import { SortOrder } from '../../shared/models/page/sort-order';
import { Lwm2mSecurityType } from '../../shared/models/lwm2m-security-config.models';
import { EntityInfoData } from '../../shared/models/entity.models';
export declare class DeviceProfileService {
    private http;
    private lwm2mBootstrapSecurityInfoInMemoryCache;
    constructor(http: HttpClient);
    getDeviceProfiles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<DeviceProfile>>;
    getDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    exportDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    getLwm2mObjects(sortOrder: SortOrder, objectIds?: string[], searchText?: string, config?: RequestConfig): Observable<Array<any>>;
    getLwm2mBootstrapSecurityInfo(isBootstrapServer: boolean, config?: RequestConfig): Observable<any>;
    getLwm2mBootstrapSecurityInfoBySecurityType(isBootstrapServer: boolean, securityMode?: Lwm2mSecurityType, config?: RequestConfig): Observable<any>;
    getLwm2mObjectsPage(pageLink: PageLink, config?: RequestConfig): Observable<Array<any>>;
    saveDeviceProfile(deviceProfile: DeviceProfile, config?: RequestConfig): Observable<DeviceProfile>;
    deleteDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<Object>;
    setDefaultDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    getDefaultDeviceProfileInfo(config?: RequestConfig): Observable<DeviceProfileInfo>;
    getDeviceProfileInfo(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfileInfo>;
    getDeviceProfileInfos(pageLink: PageLink, transportType?: DeviceTransportType, config?: RequestConfig): Observable<PageData<DeviceProfileInfo>>;
    getDeviceProfileDevicesAttributesKeys(deviceProfileId?: string, config?: RequestConfig): Observable<Array<string>>;
    getDeviceProfileDevicesTimeseriesKeys(deviceProfileId?: string, config?: RequestConfig): Observable<Array<string>>;
    getDeviceProfileNames(activeOnly?: boolean, config?: RequestConfig): Observable<Array<EntityInfoData>>;
}
