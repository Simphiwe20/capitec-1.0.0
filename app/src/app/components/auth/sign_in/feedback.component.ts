// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-feedback',
  templateUrl: './feedback.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class feedbackComponent implements AfterViewInit {
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
      this.sd_56T8cQN6SbsueGCa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_56T8cQN6SbsueGCa(bh) {
    try {
      bh = this.sd_fcSQ6diiSXazBP8Q(bh);
      //appendnew_next_sd_56T8cQN6SbsueGCa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_56T8cQN6SbsueGCa');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_rD3pRYlsYdPPyrb4(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLS5QS8kKGK8zZUi');
    }
  }

  //appendnew_flow_feedbackComponent_start

  sd_fcSQ6diiSXazBP8Q(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_VunbYKs9L21TSgvj(bh);
      //appendnew_next_sd_fcSQ6diiSXazBP8Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fcSQ6diiSXazBP8Q');
    }
  }

  sd_VunbYKs9L21TSgvj(bh) {
    try {
      //appendnew_next_sd_VunbYKs9L21TSgvj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VunbYKs9L21TSgvj');
    }
  }

  sd_rD3pRYlsYdPPyrb4(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        console.log(page.router);
        page.router.navigate(['/home']);
      }, 3000);
      //appendnew_next_sd_rD3pRYlsYdPPyrb4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rD3pRYlsYdPPyrb4');
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
  //appendnew_flow_feedbackComponent_Catch
}
