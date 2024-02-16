import { AuthenticationResult, PopupConfigOptions } from './global';
export declare const parseQueryResult: (queryString: string) => AuthenticationResult;
export declare const runIframe: (authorizeUrl: string, eventOrigin: string, timeoutInSeconds?: number) => Promise<AuthenticationResult>;
export declare const openPopup: (url: string) => Window;
export declare const runPopup: (config: PopupConfigOptions) => Promise<AuthenticationResult>;
export declare const getCrypto: () => Crypto;
export declare const getCryptoSubtle: () => any;
export declare const createRandomString: () => string;
export declare const encode: (value: string) => string;
export declare const decode: (value: string) => string;
export declare const createQueryParams: (params: any) => string;
export declare const sha256: (s: string) => Promise<any>;
export declare const urlDecodeB64: (input: string) => string;
export declare const bufferToBase64UrlEncoded: (input: number[] | Uint8Array) => string;
export declare const validateCrypto: () => void;
/**
 * Returns an empty string when value is falsy, or when it's value is included in the exclude argument.
 * @param value The value to check
 * @param exclude An array of values that should result in an empty string.
 * @returns The value, or an empty string when falsy or included in the exclude argument.
 */
export declare function valueOrEmptyString(value: string, exclude?: string[]): string;
