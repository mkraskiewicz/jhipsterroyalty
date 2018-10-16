import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterroyaltyRfbLocationModule } from './rfb-location/rfb-location.module';
import { JhipsterroyaltyRfbEventModule } from './rfb-event/rfb-event.module';
import { JhipsterroyaltyRfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { JhipsterroyaltyRfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterroyaltyRfbLocationModule,
        JhipsterroyaltyRfbEventModule,
        JhipsterroyaltyRfbEventAttendanceModule,
        JhipsterroyaltyRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterroyaltyEntityModule {}
