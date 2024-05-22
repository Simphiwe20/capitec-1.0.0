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

  direction(type_: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { type_ };
      bh.local = { signIn: true };
      bh = this.sd_C81M3PULyXyTkONL(bh);
      //appendnew_next_direction
      return bh.local.signIn;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xhf9S7w9fRlcOK2F');
    }
  }

  nextstep(kind = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { kind };
      bh.local = {};
      bh = this.sd_jWmbmKLsThsn8B2i(bh);
      //appendnew_next_nextstep
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qi8BkQNRqs0sHLL3');
    }
  }
  //appendnew_flow_ft_landingComponent_start

  sd_17kdEIkYAyuJoKRP(bh) {
    try {
      this.page.show = false;
      this.page.business = false;
      this.page.startmyself = false;
      this.page.signIn = false;
      //appendnew_next_sd_17kdEIkYAyuJoKRP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_17kdEIkYAyuJoKRP');
    }
  }

  sd_C81M3PULyXyTkONL(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.type_,
          'signIn',
          undefined,
          undefined
        )
      ) {
        bh = this.signin(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.type_,
          'signUp',
          undefined,
          undefined
        )
      ) {
        bh = this.signup(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C81M3PULyXyTkONL');
    }
  }

  signin(bh) {
    try {
      const page = this.page;
      page.signIn = true;
      page.show = true;
      page.business = false;
      console.log('Sign In', bh.input);
      // return true
      this.sd_hS7QZwjSXQGlbakv(bh);
      //appendnew_next_signin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_akZL0ZNJxA4eGvh6');
    }
  }

  sd_hS7QZwjSXQGlbakv(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.type_);
      //appendnew_next_sd_hS7QZwjSXQGlbakv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hS7QZwjSXQGlbakv');
    }
  }

  signup(bh) {
    try {
      const page = this.page;
      page.signIn = false;
      page.show = true;
      page.business = false;
      console.log(bh.input);
      // return false
      //appendnew_next_signup
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WVmazcXvaX7lQSwT');
    }
  }

  sd_jWmbmKLsThsn8B2i(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.kind,
          'myself',
          undefined,
          undefined
        )
      ) {
        bh = this.fi(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.kind,
          'business',
          undefined,
          undefined
        )
      ) {
        bh = this.business(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jWmbmKLsThsn8B2i');
    }
  }

  fi(bh) {
    try {
      const page = this.page;
      page.startmyself = true;
      page.business = false;
      //appendnew_next_fi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WyxLMIPCBN0KTwG7');
    }
  }

  business(bh) {
    try {
      const page = this.page;
      page.startmyself = false;
      page.business = true;
      console.log(bh.input.kind);
      //appendnew_next_business
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UL0IEOvRtfQrWgUn');
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
