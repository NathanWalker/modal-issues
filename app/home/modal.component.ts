import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
    selector: "modal-view",
    moduleId: module.id,
    templateUrl: "./modal.component.html"
})
export class ModalComponent implements OnInit {

    constructor(
        private _params: ModalDialogParams,
    ) {
        // Use the component constructor to inject providers.
    }

    public close() {
        this._params.closeCallback();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
