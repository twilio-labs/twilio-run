import * as twilio from 'twilio';
import { ServiceContext } from 'twilio/lib/rest/sync/v1/service';
import { SyncListListInstance } from 'twilio/lib/rest/sync/v1/service/syncList';
import { SyncMapListInstance } from 'twilio/lib/rest/sync/v1/service/syncMap';
import { TwilioClientOptions } from 'twilio/lib/rest/Twilio';

export type EnvironmentVariables = {
  [key: string]: string | undefined;
};

export type ResourceMap = {
  [name: string]: {
    path: string;
  };
};

export type AssetResourceMap = {
  [name: string]: {
    path: string;
    open(): string;
  };
};

export interface TwilioResponse {
  setStatusCode(code: number): void;
  setBody(body: string | object): void;
  appendHeader(key: string, value: string): void;
  setHeaders(headers: { [key: string]: string }): void;
}

export type RuntimeSyncClientOptions = TwilioClientOptions & {
  serviceName?: string;
};

export type RuntimeSyncServiceContext = ServiceContext & {
  maps: SyncMapListInstance;
  lists: SyncListListInstance;
};

export type RuntimeInstance = {
  getAssets(): AssetResourceMap;
  getFunctions(): ResourceMap;
  getSync(options?: RuntimeSyncClientOptions): RuntimeSyncServiceContext;
};

export type Context<T = {}> = {
  getTwilioClient(options?: TwilioClientOptions): twilio.Twilio;
  DOMAIN_NAME: string;
  PATH: string;
  SERVICE_SID: string | undefined;
  ENVIRONMENT_SID: string | undefined;
} & T;

export type ServerlessCallback = (
  error: null | Error | string | object,
  payload?: object | string | number | boolean
) => void;

export type ServerlessFunctionSignature<
  T extends EnvironmentVariables = {},
  U extends {} = {}
> = (
  context: Context<T>,
  event: U,
  callback: ServerlessCallback
) => void | Promise<void>;

export type ResponseConstructor = new (...args: any[]) => TwilioResponse;
export type GlobalTwilio = Omit<typeof twilio, 'default'> & {
  Response: ResponseConstructor;
};

export { ServiceContext } from 'twilio/lib/rest/sync/v1/service';
export { SyncListListInstance } from 'twilio/lib/rest/sync/v1/service/syncList';
export { SyncMapListInstance } from 'twilio/lib/rest/sync/v1/service/syncMap';
export { TwilioClientOptions } from 'twilio/lib/rest/Twilio';
export type TwilioClient = twilio.Twilio;
export type TwilioPackage = typeof twilio;
