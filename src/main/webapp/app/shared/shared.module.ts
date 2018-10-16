import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { FIndRealEstateSharedLibsModule, FIndRealEstateSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [FIndRealEstateSharedLibsModule, FIndRealEstateSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [FIndRealEstateSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FIndRealEstateSharedModule {}
