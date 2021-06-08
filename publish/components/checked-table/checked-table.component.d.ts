import { OnInit } from "@angular/core";
export declare class CheckedTableComponent implements OnInit {
    checked: boolean;
    dataSet: {
        name: string;
        age: string;
        address: string;
        intreset: string;
        checked: boolean;
    }[];
    isAllChecked: boolean;
    constructor();
    ngOnInit(): void;
    onAllChecked(e?: any): void;
    onItemChecked(item: any): void;
    setNull(): void;
    inverseChecked(): void;
    getIsAllChecked(): void;
}
