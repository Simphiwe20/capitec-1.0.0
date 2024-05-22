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
  selector: 'bh-edit_cards',
  templateUrl: './edit_cards.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_cardsComponent {
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
      this.sd_suFSMtpZ6T4aYdVU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_suFSMtpZ6T4aYdVU(bh) {
    try {
      bh = this.sd_fh4NGwoseDfNTczZ(bh);
      //appendnew_next_sd_suFSMtpZ6T4aYdVU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_suFSMtpZ6T4aYdVU');
    }
  }

  click(fav: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fav };
      bh.local = {};
      this.sd_6wgQRQmHe8kv36nO(bh);
      bh = this.push(bh);
      //appendnew_next_click
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wF3Cvz0oGUmfG1YV');
    }
  }

  click2(fav: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fav };
      bh.local = {};
      bh = this.sd_minTwwUt402lawNz(bh);
      //appendnew_next_click2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5mFlxEa2FNerKc0X');
    }
  }
  //appendnew_flow_edit_cardsComponent_start

  sd_fh4NGwoseDfNTczZ(bh) {
    try {
      this.page.favourates = [
        {
          icon: 'group',
          text: 'Pay beneficiary',
          myfav: { icon: 'group', text: 'Pay beneficiary' },
        },
        {
          icon: 'database',
          text: 'Send cash',
          myfav: { icon: 'database', text: 'Send cash' },
        },
        {
          icon: 'bar_chart',
          text: 'Track money',
          myfav: { icon: 'bar_chart', text: 'Track money' },
        },
        {
          icon: 'sync_alt',
          text: 'Transefer money',
          myfav: { icon: 'sync_alt', text: 'Transefer money' },
        },
        {
          icon: 'emoji_objects',
          text: 'Buy electricity',
          myfav: { icon: 'emoji_objects', text: 'Buy electricity' },
        },
        {
          icon: 'qr_code_2_add',
          text: 'Scan to pay',
          myfav: { icon: 'qr_code_2_add', text: 'Scan to pay' },
        },
        {
          icon: 'qr_code',
          text: 'Pay me',
          myfav: { icon: 'qr_code', text: 'Pay me' },
        },
        {
          icon: 'phone_android',
          text: 'Buy prepaid mobile',
          myfav: { icon: 'phone_android', text: 'Buy prepaid mobile' },
        },
        {
          icon: 'poker_chip',
          text: 'Play lotto',
          myfav: { icon: 'poker_chip', text: 'Play lotto' },
        },
        {
          icon: 'request_quote',
          text: 'Pay bills',
          myfav: { icon: 'request_quote', text: 'Pay bills' },
        },
        {
          icon: 'redeem',
          text: 'Buy voucher',
          myfav: { icon: 'redeem', text: 'Buy voucher' },
        },
        {
          icon: 'garage',
          text: 'Renew licence disc',
          myfav: { icon: 'garage', text: 'Renew licence disc' },
        },
      ];
      this.page.myFavourite = [];
      //appendnew_next_sd_fh4NGwoseDfNTczZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fh4NGwoseDfNTczZ');
    }
  }

  sd_6wgQRQmHe8kv36nO(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.fav);
      //appendnew_next_sd_6wgQRQmHe8kv36nO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6wgQRQmHe8kv36nO');
    }
  }

  push(bh) {
    try {
      const page = this.page;
      let fav = page.favourates.splice(
        page.favourates.indexOf(bh.input.fav),
        1
      );
      // page.favourates =  page.favourates.filter((fav: any, indx: number) => indx !== page.favourates.indexOf(bh.input.fav))
      console.log(page.favourates);
      console.log('index of value:', fav);
      console.log('index of:', page.favourates.indexOf(bh.input.fav));

      page.myFavourite.push(bh.input.fav);
      this.sd_pzwA73JVgzrcEy50(bh);
      bh = this.sd_NugnVx0wS9M7ed2z(bh);
      //appendnew_next_push
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7hcsEus90i0F80hO');
    }
  }

  sd_pzwA73JVgzrcEy50(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.myFavourite);
      //appendnew_next_sd_pzwA73JVgzrcEy50
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pzwA73JVgzrcEy50');
    }
  }

  sd_NugnVx0wS9M7ed2z(bh) {
    try {
      localStorage.setItem('fav', JSON.stringify(this.page.myFavourite));
      //appendnew_next_sd_NugnVx0wS9M7ed2z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NugnVx0wS9M7ed2z');
    }
  }

  sd_minTwwUt402lawNz(bh) {
    try {
      const page = this.page;
      let fav = page.myFavourite.splice(
        page.myFavourite.indexOf(bh.input.fav),
        1
      );
      // page.myFavourite =  page.myFavourite.filter((fav: any, indx: number) => indx !== page.myFavourite.indexOf(bh.input.fav))
      console.log(page.myFavourite);
      console.log('index of value:', fav);
      console.log('index of:', page.myFavourite.indexOf(bh.input.fav));

      page.myFavourite.push(bh.input.fav);
      //appendnew_next_sd_minTwwUt402lawNz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_minTwwUt402lawNz');
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
  //appendnew_flow_edit_cardsComponent_Catch
}
