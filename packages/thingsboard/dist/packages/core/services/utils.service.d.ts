import { ExceptionData } from '../../shared/models/error.models';
import { TranslateService } from '../../inversify/interface';
import { DataKey, Datasource, KeyInfo } from '../../shared/models/widget.models';
import { DataKeyType } from '../../shared/models/telemetry/telemetry.models';
export declare class UtilsService {
    private window;
    private translate;
    iframeMode: boolean;
    widgetEditMode: boolean;
    defaultDataKey: DataKey;
    defaultDatasource: Datasource;
    defaultAlarmDataKeys: Array<DataKey>;
    constructor(window: Window, translate: TranslateService);
    getPredefinedFunctionsList(): Array<string>;
    getPredefinedFunctionBody(func: string): string;
    private initDefaultAlarmDataKeys;
    getDefaultAlarmDataKeys(): Array<DataKey>;
    defaultAlarmFieldContent(key: DataKey | {
        name: string;
    }, value: any): string;
    processWidgetException(exception: any): ExceptionData;
    parseException(exception: any, lineOffset?: number): ExceptionData;
    customTranslation(translationValue: string, defaultValue: string): string;
    private doTranslate;
    guid(): string;
    validateAndUpdateDatasources(datasources?: Datasource[]): Datasource[];
    getMaterialColor(index: number): string;
    createKey(keyInfo: KeyInfo, type: DataKeyType, index?: number): DataKey;
    createLabelFromDatasource(datasource: Datasource, pattern: string): string;
    generateColors(datasources: Array<Datasource>): void;
    stringToHslColor(str: string, saturationPercentage: number, lightnessPercentage: number): string;
    currentPerfTime(): number;
    getQueryParam(name: string, url?: string): string;
    removeQueryParams(keys: Array<string>): void;
    updateQueryParam(name: string, value: string | null): void;
    private updateUrlQueryString;
    baseUrl(): string;
    deepClone<T>(target: T, ignoreFields?: string[]): T;
    isUndefined(value: any): boolean;
    isDefined(value: any): boolean;
    defaultValue(value: any, defaultValue: any): any;
    private getEntityIdFromDatasource;
    objToBase64(obj: any): string;
    base64toString(b64Encoded: string): string;
    objToBase64URI(obj: any): string;
    base64toObj(b64Encoded: string): any;
}