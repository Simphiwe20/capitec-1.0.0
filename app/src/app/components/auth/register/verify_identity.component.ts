// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_identity',
  templateUrl: './verify_identity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_identityComponent implements AfterViewInit {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_lZDyEpfnThvl8PcC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_lZDyEpfnThvl8PcC(bh) {
    try {
      bh = this.sd_ovlJrf4RFzxVqSXu(bh);
      //appendnew_next_sd_lZDyEpfnThvl8PcC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lZDyEpfnThvl8PcC');
    }
  }

  submitForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.console(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_upq3ammtCsx9w18p');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_jfe0bdfgpN36Rsnp(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7bo8mH5cnWlMA1CP');
    }
  }

  onInputChange(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_4K8i3KHHjhBnVO93(bh);
      //appendnew_next_onInputChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OXjrVlhLaDux3k28');
    }
  }

  fileUpload(event: any = undefined, n: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event, n };
      bh.local = {};
      //appendnew_next_fileUpload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NgGlP9VLuMUKg8f');
    }
  }
  //appendnew_flow_verify_identityComponent_start

  sd_ovlJrf4RFzxVqSXu(bh) {
    try {
      this.page.registerForm = FormGroup;
      bh = this.sd_Nts7LXLNkF4cXfIp(bh);
      //appendnew_next_sd_ovlJrf4RFzxVqSXu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovlJrf4RFzxVqSXu');
    }
  }

  sd_Nts7LXLNkF4cXfIp(bh) {
    try {
      this.page.registerForm = [[]];
      this.page.fileElement = undefined;
      this.page.fileElement1 = undefined;
      bh = this.sd_lzR62Q4QLHBX9c5F(bh);
      //appendnew_next_sd_Nts7LXLNkF4cXfIp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nts7LXLNkF4cXfIp');
    }
  }

  sd_lzR62Q4QLHBX9c5F(bh) {
    try {
      const page = this.page;
      page.registerForm = new FormGroup({
        fullName: new FormControl('', Validators.required),
        ID: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\d{13}$/),
          Validators.max(13),
        ]),
        contact: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
        pin: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
        PasswordConfirm: new FormControl('', Validators.required),
        balance: new FormControl(50),
        accountNumber: new FormControl(null),
        status: new FormControl('pending'),
      });

      //appendnew_next_sd_lzR62Q4QLHBX9c5F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzR62Q4QLHBX9c5F');
    }
  }

  console(bh) {
    try {
      const page = this.page;
      console.log('fullname', page.registerForm.value);
      //appendnew_next_console
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zmJxJSdl2zewMabG');
    }
  }

  sd_jfe0bdfgpN36Rsnp(bh) {
    try {
      const page = this.page;
      page.fileElement = document.getElementById('file');
      page.fileElement1 = document.getElementById('file1');
      //appendnew_next_sd_jfe0bdfgpN36Rsnp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jfe0bdfgpN36Rsnp');
    }
  }

  sd_4K8i3KHHjhBnVO93(bh) {
    try {
      const page = this.page; // Get the input value from the event
      let inputText;
      let inputValue: string = bh.input.event.target.value;
      // Replace all characters except digits using a regular expression
      inputValue = inputValue.replace(/[^\d]/g, '');
      // Update the input field value with the modified value
      bh.input.event.target.value = inputValue;
      // Update the inputText property with the modified value
      inputText = inputValue;
      //appendnew_next_sd_4K8i3KHHjhBnVO93
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4K8i3KHHjhBnVO93');
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
  //appendnew_flow_verify_identityComponent_Catch
}
