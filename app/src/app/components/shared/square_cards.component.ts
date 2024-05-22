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
  selector: 'bh-square_cards',
  templateUrl: './square_cards.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class square_cardsComponent {
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
      this.sd_XVRqdmiBFV84fA50(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XVRqdmiBFV84fA50(bh) {
    try {
      bh = this.sd_A0JXkA2wHsUNhPze(bh);
      //appendnew_next_sd_XVRqdmiBFV84fA50
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XVRqdmiBFV84fA50');
    }
  }

  //appendnew_flow_square_cardsComponent_start

  sd_A0JXkA2wHsUNhPze(bh) {
    try {
      this.page.fav = [];
      bh = this.sd_NogDlS2CboSiXvpY(bh);
      //appendnew_next_sd_A0JXkA2wHsUNhPze
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A0JXkA2wHsUNhPze');
    }
  }

  sd_NogDlS2CboSiXvpY(bh) {
    try {
      this.page.fav = JSON.parse(localStorage.getItem('fav'));
      this.sd_XpZWgOcxtnKIs8Ub(bh);
      //appendnew_next_sd_NogDlS2CboSiXvpY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NogDlS2CboSiXvpY');
    }
  }

  sd_XpZWgOcxtnKIs8Ub(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.fav);
      //appendnew_next_sd_XpZWgOcxtnKIs8Ub
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XpZWgOcxtnKIs8Ub');
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
  //appendnew_flow_square_cardsComponent_Catch
}
