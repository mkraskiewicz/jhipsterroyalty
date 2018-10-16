import { NgModule } from '@angular/core';

import { JhipsterroyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterroyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterroyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterroyaltySharedCommonModule {}
