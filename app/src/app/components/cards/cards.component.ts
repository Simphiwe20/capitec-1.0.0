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
  selector: 'bh-cards',
  templateUrl: './cards.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cardsComponent {
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
      this.sd_bynL4DIJ5OApo6HN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bynL4DIJ5OApo6HN(bh) {
    try {
      bh = this.sd_OX76W0QT5DjQXNYF(bh);
      //appendnew_next_sd_bynL4DIJ5OApo6HN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bynL4DIJ5OApo6HN');
    }
  }

  //appendnew_flow_cardsComponent_start

  sd_OX76W0QT5DjQXNYF(bh) {
    try {
      //appendnew_next_sd_OX76W0QT5DjQXNYF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OX76W0QT5DjQXNYF');
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
  //appendnew_flow_cardsComponent_Catch
}
