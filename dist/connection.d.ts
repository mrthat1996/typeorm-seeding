import { Connection as TypeORMConnection, ConnectionOptions as TypeORMConnectionOptions } from 'typeorm';
interface SeedingOptions {
    factories: string[];
    seeds: string[];
}
export declare type ConnectionOptions = TypeORMConnectionOptions & SeedingOptions;
export interface ConfigureOption {
    root?: string;
    configName?: string;
    connection?: string;
}
export declare const configureConnection: (option?: ConfigureOption) => void;
export declare const setConnectionOptions: (options: Partial<TypeORMConnectionOptions>) => void;
export declare const getConnectionOptions: () => Promise<ConnectionOptions>;
export declare const createConnection: (option?: TypeORMConnectionOptions) => Promise<TypeORMConnection>;
export {};
