// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-email',
  templateUrl: './email.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emailComponent {
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
      this.sd_i28NbvH7GQGAx3zH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_i28NbvH7GQGAx3zH(bh) {
    try {
      bh = this.sd_flX5UJ6XJe7G0Pgl(bh);
      //appendnew_next_sd_i28NbvH7GQGAx3zH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i28NbvH7GQGAx3zH');
    }
  }

  //appendnew_flow_emailComponent_start

  sd_flX5UJ6XJe7G0Pgl(bh) {
    try {
      this.page.email = undefined;
      bh = this.sd_vrmKfUAJSGr9emAy(bh);
      //appendnew_next_sd_flX5UJ6XJe7G0Pgl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_flX5UJ6XJe7G0Pgl');
    }
  }

  sd_vrmKfUAJSGr9emAy(bh) {
    try {
      const page = this.page;
      page.email = 'angel@gmail.com';
      //appendnew_next_sd_vrmKfUAJSGr9emAy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vrmKfUAJSGr9emAy');
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
  //appendnew_flow_emailComponent_Catch
}
