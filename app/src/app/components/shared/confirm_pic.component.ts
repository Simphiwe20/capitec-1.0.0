// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_pic',
  templateUrl: './confirm_pic.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_picComponent {
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
      this.sd_bYTRyaOwIR2Vf6Wb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bYTRyaOwIR2Vf6Wb(bh) {
    try {
      bh = this.sd_f5M7f0i1GQp4Sdw6(bh);
      //appendnew_next_sd_bYTRyaOwIR2Vf6Wb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bYTRyaOwIR2Vf6Wb');
    }
  }

  //appendnew_flow_confirm_picComponent_start

  sd_f5M7f0i1GQp4Sdw6(bh) {
    try {
      this.page.routes = ActivatedRoute;
      bh = this.sd_uZ7bm8ChFogAfddq(bh);
      //appendnew_next_sd_f5M7f0i1GQp4Sdw6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f5M7f0i1GQp4Sdw6');
    }
  }

  sd_uZ7bm8ChFogAfddq(bh) {
    try {
      this.page.capturedImage = undefined;
      bh = this.sd_i5yMde6qQ3VkFHDt(bh);
      //appendnew_next_sd_uZ7bm8ChFogAfddq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZ7bm8ChFogAfddq');
    }
  }

  sd_i5yMde6qQ3VkFHDt(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.capturedImage = route.snapshot.queryParams;
      bh = this.sd_jsOnwtlnYKniVsCn(bh);
      //appendnew_next_sd_i5yMde6qQ3VkFHDt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i5yMde6qQ3VkFHDt');
    }
  }

  sd_jsOnwtlnYKniVsCn(bh) {
    try {
      const page = this.page;
      page.capturedImage = page.capturedImage['data'];

      //appendnew_next_sd_jsOnwtlnYKniVsCn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jsOnwtlnYKniVsCn');
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
  //appendnew_flow_confirm_picComponent_Catch
}
