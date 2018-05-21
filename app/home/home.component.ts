import { Component, OnInit, ViewContainerRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { ModalComponent } from './modal.component';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        private _modal: ModalDialogService,
        private _vcRef: ViewContainerRef,
    ) {
        // Use the component constructor to inject providers.
    }

    public openModal() {
        this._modal.showModal(ModalComponent, {
            viewContainerRef: this._vcRef,
        })
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
