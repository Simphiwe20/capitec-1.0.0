// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ft_landing',
  templateUrl: './ft_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ft_landingComponent {
  page: any = { dep: {} };
  constructor(
    
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService,
    private bottomSheetRef: MatBottomSheetRef<ft_landingComponent>
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    console.log("hey")

    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_5W6CdYlblZVEh4RY(bh);
    }

  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5W6CdYlblZVEh4RY(bh) {
    try {
      bh = this.sd_17kdEIkYAyuJoKRP(bh);
      //appendnew_next_sd_5W6CdYlblZVEh4RY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5W6CdYlblZVEh4RY');
    }
  }

  //appendnew_flow_ft_landingComponent_start

  sd_17kdEIkYAyuJoKRP(bh) {
    try {
      //appendnew_next_sd_17kdEIkYAyuJoKRP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_17kdEIkYAyuJoKRP');
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
  //appendnew_flow_ft_landingComponent_Catch
}
