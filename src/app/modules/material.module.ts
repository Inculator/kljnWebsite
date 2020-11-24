// Here you can import all Material modules

import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
    MatIconRegistry,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule
} from '@angular/material';


const modules = [
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule
];

@NgModule({
    imports: [modules],
    exports: [modules]
})
export class MaterialModule {

    icons: Map<string, string> = new Map([
        ['company-logo', 'assets/company-logo.svg']
    ]);

    constructor(
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer
    ) {
        this.icons.forEach((url: string, key: string) => {
            this.matIconRegistry.addSvgIcon(
                key,
                this.domSanitizer.bypassSecurityTrustResourceUrl(url));
        });
    }
 }
