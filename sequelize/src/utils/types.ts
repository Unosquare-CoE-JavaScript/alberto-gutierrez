export type alphanumeric = string | number;
export type dictionary = { [key: string]: any };

//https://stackoverflow.com/questions/12802317/passing-class-as-parameter-causes-is-not-newable-error
export type Newable<T> = { new (...args: any[]): T };
