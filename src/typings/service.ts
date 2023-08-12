export interface IRouterParams {
  path?: Record<string, string>;
  query?: Record<string, string>;
  fragmentIdentifier?: string;
}

export interface IAppRoutes<T> {
  "@delivery-create-form": T;
  "@delivery-explained": T;
}

export declare interface INavigationService {
  navigateForward(
    url: string,
    urlParams: IRouterParams,
    target?: "_blank" | "_parent" | "_self" | "_top"
  ): Promise<boolean>;
  navigateBackward(url?: string): Promise<boolean>;
  generateUrl(url: string, params: IRouterParams): string;
}

export interface IAppClientConfiguration {
  baseUrl: string;
  baseSearchUrl: string;
  defaultApiVersion: string;
}

export enum LogLevel {
  Trace = 1,
  Debug = 2,
  Info = 3,
  Warn = 4,
  Error = 5,
}

export interface IAppFeatureFlags {
  uiNotificationPosition: "top" | "bottom" | "middle";
  appHasDelivery: boolean;
  appHasMicroCV: boolean;
  appHasSlamby: boolean;
  appWebsite: string;
  appBaseCategory: string;
  appBaseCategoryId: number;
  appDeliveryHideViewPdf: boolean;
}
