// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sign_in_stepper',
  templateUrl: './sign_in_stepper.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class sign_in_stepperComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_hzbVikE2Sz3QnUCk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hzbVikE2Sz3QnUCk(bh) {
    try {
      bh = this.sd_YtlSrEv5G3Inl4UY(bh);
      //appendnew_next_sd_hzbVikE2Sz3QnUCk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hzbVikE2Sz3QnUCk');
    }
  }

  //appendnew_flow_sign_in_stepperComponent_start

  sd_YtlSrEv5G3Inl4UY(bh) {
    try {
      //appendnew_next_sd_YtlSrEv5G3Inl4UY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YtlSrEv5G3Inl4UY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_sign_in_stepperComponent_Catch
}
