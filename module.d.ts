declare module 'moat-display-loader' {
    export function loadMoatTag(partnerCode: string): Promise<any>;
    export function startTracking(adElement: HTMLElement, adIdentifiers: object): number;
    export function stopTracking(adNum: number);
    export function stopTrackingAllAds();
}
