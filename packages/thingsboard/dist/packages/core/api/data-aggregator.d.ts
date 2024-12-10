import { AggKey, IndexedSubscriptionData } from '../../shared/models/telemetry/telemetry.models';
import { SubscriptionTimewindow } from '../../shared/models/time/time.models';
import { UtilsService } from '../../core/services/utils.service';
import { IndexedData } from '../../shared/models/widget.models';
export declare type onAggregatedData = (data: IndexedData, detectChanges: boolean) => void;
export declare class DataAggregator {
    private onDataCb;
    private tsKeys;
    private isLatestDataAgg;
    private subsTw;
    private utils;
    private ignoreDataUpdateOnIntervalTick;
    constructor(onDataCb: onAggregatedData, tsKeys: AggKey[], isLatestDataAgg: boolean, subsTw: SubscriptionTimewindow, utils: UtilsService, ignoreDataUpdateOnIntervalTick: boolean);
    private dataBuffer;
    private data;
    private readonly lastPrevKvPairData;
    private aggregationMap;
    private dataReceived;
    private resetPending;
    private updatedData;
    private aggregationTimeout;
    private intervalTimeoutHandle;
    private intervalScheduledTime;
    private startTs;
    private endTs;
    private elapsed;
    private static convertValue;
    private static getAggFunction;
    updateOnDataCb(newOnDataCb: onAggregatedData): onAggregatedData;
    reset(subsTw: SubscriptionTimewindow): void;
    destroy(): void;
    onData(data: IndexedSubscriptionData, update: boolean, history: boolean, detectChanges: boolean): void;
    private calculateStartEndTs;
    private onInterval;
    private updateData;
    private updateStateBounds;
    private processAggregatedData;
    private updateAggregatedData;
    private updateLastInterval;
    private aggKeyById;
}