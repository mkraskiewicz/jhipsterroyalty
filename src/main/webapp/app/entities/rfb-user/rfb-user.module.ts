import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterroyaltySharedModule } from 'app/shared';
import {
    RfbUserComponent,
    RfbUserDetailComponent,
    RfbUserUpdateComponent,
    RfbUserDeletePopupComponent,
    RfbUserDeleteDialogComponent,
    rfbUserRoute,
    rfbUserPopupRoute
} from './';

const ENTITY_STATES = [...rfbUserRoute, ...rfbUserPopupRoute];

@NgModule({
    imports: [JhipsterroyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbUserComponent,
        RfbUserDetailComponent,
        RfbUserUpdateComponent,
        RfbUserDeleteDialogComponent,
        RfbUserDeletePopupComponent
    ],
    entryComponents: [RfbUserComponent, RfbUserUpdateComponent, RfbUserDeleteDialogComponent, RfbUserDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterroyaltyRfbUserModule {}
