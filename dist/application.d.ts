import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const Json2CsvApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/core").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding<any>[];
    component(component: import("@loopback/core").Constructor<{}>): void;
    mountComponentBooters(component: import("@loopback/core").Constructor<{}>): void;
}) & typeof RestApplication;
export declare class Json2CsvApplication extends Json2CsvApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
