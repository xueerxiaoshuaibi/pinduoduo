import { ElementRef, OnInit } from "@angular/core";
export declare class AutoTextareaComponent implements OnInit {
    textarea: ElementRef;
    value: any;
    isCount: any;
    maxlength: any;
    placeHolder: string;
    private _maxlength;
    constructor();
    ngOnInit(): void;
    onModelChange(): void;
    onBlur(): void;
    getLength(): void;
}
