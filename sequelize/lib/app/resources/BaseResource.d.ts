import { ModelCtor } from "sequelize/types";
import { alphanumeric, dictionary, Newable } from "../../utils/types";
export declare class BaseResource {
    protected resource: {
        [key: string]: any;
    };
    model: ModelCtor<any>;
    load(id: alphanumeric): Promise<this>;
    save(): void | Promise<any>;
    get(): {
        [key: string]: any;
    };
    killMe(): void;
    bulk(data: {
        [key: string]: any;
    }): this;
    private update;
    private create;
}
export declare class Collection<T> extends Array {
    resource: Newable<BaseResource>;
    constructor(resource: Newable<BaseResource>);
    push(content: dictionary): number;
}
