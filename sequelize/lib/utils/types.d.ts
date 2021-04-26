export declare type alphanumeric = string | number;
export declare type dictionary = {
    [key: string]: any;
};
export declare type Newable<T> = {
    new (...args: any[]): T;
};
