import { EventEmitter } from "@angular/core";
export declare type AlertType = "success" | "danger" | "warning" | "info";
export declare class AlertComponent {
    type: AlertType;
    showIcon: boolean;
    closeable: boolean;
    closeEvent: EventEmitter<boolean>;
    hide: boolean;
    constructor();
    close(): void;
}
