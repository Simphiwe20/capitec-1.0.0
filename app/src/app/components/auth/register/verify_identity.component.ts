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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
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

  submitForm(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_mBpyQPCNbmwxVVEG(bh);
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
      bh = this.sd_g734ED0TcU933Is5(bh);
      //appendnew_next_fileUpload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NgGlP9VLuMUKg8f');
    }
  }

  upload(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zGcjKxFS01JESUKa(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0uReLtAnwlsBtha4');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_xAM57wjKSoxl8P2L(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FtdKWsV86pUKlJ8H');
    }
  }

  fileUpload1(event: any = undefined, n: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event, n };
      bh.local = {};
      bh = this.sd_FRbAcr44aV0h07X3(bh);
      //appendnew_next_fileUpload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HmDGSya3qea8OH9M');
    }
  }

  upload2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SuONHM4MqYANzdwR(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FJIFP824XDj0CnmA');
    }
  }

  fileUpload2(event: any = undefined, n: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event, n };
      bh.local = {};
      bh = this.sd_sO0HyFAAQXULsJrf(bh);
      //appendnew_next_fileUpload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RAwOtEG6kCUXeJaj');
    }
  }

  upload1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_QdlQxPKdmmEjzRaS(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q7eSP8bXhrlStCYi');
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
      this.page.registerForm = undefined;
      this.page.fileElement = undefined;
      this.page.fileElement1 = undefined;
      this.page.result = undefined;
      this.page.uploadedFile = new FormData();
      this.page.uploadedFile1 = new FormData();
      this.page.email = this.page.email;
      this.page.uploadedFile2 = new FormData();
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
      console.log(page.uploadedFile);
      page.registerForm = new FormGroup({
        fullName: new FormControl('', Validators.required),
        ID: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\d{13}$/),
          Validators.maxLength(13),
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
      });

      //appendnew_next_sd_lzR62Q4QLHBX9c5F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzR62Q4QLHBX9c5F');
    }
  }

  sd_mBpyQPCNbmwxVVEG(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RtoAuMq5sKHQiI91(bh);
      } else if (
        this.sdService.operators['false'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_R0wft9WSvAKm6gg1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mBpyQPCNbmwxVVEG');
    }
  }

  sd_RtoAuMq5sKHQiI91(bh) {
    try {
      const page = this.page;
      console.log('true');
      delete bh.input.form.value.PasswordConfirm;
      console.log('formvalue', bh.input.form.value);

      bh = this.sd_RZXvQUtibvY2WoUz(bh);
      //appendnew_next_sd_RtoAuMq5sKHQiI91
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RtoAuMq5sKHQiI91');
    }
  }

  sd_RZXvQUtibvY2WoUz(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_0k9CeRuSzDAQudOX(bh);
      //appendnew_next_sd_RZXvQUtibvY2WoUz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RZXvQUtibvY2WoUz');
    }
  }

  sd_0k9CeRuSzDAQudOX(bh) {
    try {
      const page = this.page;
      bh.Url = page.ssdUrl + 'registration';
      bh = this.sd_bT9MibDTq7WQdm5h(bh);
      //appendnew_next_sd_0k9CeRuSzDAQudOX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0k9CeRuSzDAQudOX');
    }
  }

  async sd_bT9MibDTq7WQdm5h(bh) {
    try {
      let requestOptions = {
        url: bh.Url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form.value,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_lRUsFVNuA6spW7k5(bh);
      //appendnew_next_sd_bT9MibDTq7WQdm5h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bT9MibDTq7WQdm5h');
    }
  }

  sd_lRUsFVNuA6spW7k5(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('REGISTREATION IS SUCCESSFULLY AND AWAITING  APROVAL', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_lRUsFVNuA6spW7k5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lRUsFVNuA6spW7k5');
    }
  }

  sd_R0wft9WSvAKm6gg1(bh) {
    try {
      const page = this.page;
      console.log('false', page.registerForm);
      bh = this.sd_GeUOSC997fcZepP3(bh);
      //appendnew_next_sd_R0wft9WSvAKm6gg1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R0wft9WSvAKm6gg1');
    }
  }

  sd_GeUOSC997fcZepP3(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('FILL ALL NESSESARY FILLS', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_GeUOSC997fcZepP3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GeUOSC997fcZepP3');
    }
  }

  sd_jfe0bdfgpN36Rsnp(bh) {
    try {
      const page = this.page;
      page.fileElement = document.getElementById('file');
      page.fileElement1 = document.getElementById('file1');
      page.fileElement2 = document.getElementById('file2');
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

  sd_g734ED0TcU933Is5(bh) {
    try {
      const page = this.page; // page.uploadedfiles:file[][] = []
      // const files: FileList = event.target.files;
      //     console.log(files)
      //     const fileArray: File[] = [];
      //     for (let i = 0; i < files.length; i++) {
      //       fileArray.push(files[i]);
      //     }
      //     page.uploadedfiles[n] = fileArray;;

      const file: File | null = bh.input.event.target.files?.[0] || null;
      console.log(file);

      if (file) {
        // let email = {email: 'angel@gmail.com'}
        page.uploadedFile.append('ID', file);
        // page.uploadedFile = {'ID': file, body: {email: 'angel@gmail.com'}}
        // console.log(page.uploadedFile)
      } else {
        console.log('No file is uploaded');
        // Handle the case where no file is selected
      }

      // page.uploadedFile = {ID: page.uploadedFile}

      console.log(page.uploadedFile);
      //appendnew_next_sd_g734ED0TcU933Is5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g734ED0TcU933Is5');
    }
  }

  sd_zGcjKxFS01JESUKa(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_xC1l32Ni8TYb4ABh(bh);
      //appendnew_next_sd_zGcjKxFS01JESUKa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zGcjKxFS01JESUKa');
    }
  }

  sd_xC1l32Ni8TYb4ABh(bh) {
    try {
      const page = this.page;
      bh.urlUploadID = page.ssdUrl + 'upload-ID';

      console.log(page.uploadedFile);

      page.uploadedFile.email = page.registerForm.controls['email'].value;

      bh = this.sd_3GWywEXTrdJ4f8Wi(bh);
      //appendnew_next_sd_xC1l32Ni8TYb4ABh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xC1l32Ni8TYb4ABh');
    }
  }

  async sd_3GWywEXTrdJ4f8Wi(bh) {
    try {
      let requestOptions = {
        url: bh.urlUploadID,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_vIqg2qaG3HeBIiJM(bh);
      //appendnew_next_sd_3GWywEXTrdJ4f8Wi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3GWywEXTrdJ4f8Wi');
    }
  }

  sd_vIqg2qaG3HeBIiJM(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'DONE');
      //appendnew_next_sd_vIqg2qaG3HeBIiJM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vIqg2qaG3HeBIiJM');
    }
  }

  sd_xAM57wjKSoxl8P2L(bh) {
    try {
      let outputVariables = this.submitForm(bh.input.form);

      bh = this.sd_ca2JE1vIVw5eoMHN(bh);
      //appendnew_next_sd_xAM57wjKSoxl8P2L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xAM57wjKSoxl8P2L');
    }
  }

  sd_ca2JE1vIVw5eoMHN(bh) {
    try {
      let outputVariables = this.upload();

      bh = this.sd_XXsYLiFcwAIRcHlw(bh);
      //appendnew_next_sd_ca2JE1vIVw5eoMHN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ca2JE1vIVw5eoMHN');
    }
  }

  sd_XXsYLiFcwAIRcHlw(bh) {
    try {
      let outputVariables = this.upload1();

      bh = this.sd_jdXEm8eTIOGZVnrn(bh);
      //appendnew_next_sd_XXsYLiFcwAIRcHlw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXsYLiFcwAIRcHlw');
    }
  }

  sd_jdXEm8eTIOGZVnrn(bh) {
    try {
      let outputVariables = this.upload2();

      //appendnew_next_sd_jdXEm8eTIOGZVnrn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdXEm8eTIOGZVnrn');
    }
  }

  sd_FRbAcr44aV0h07X3(bh) {
    try {
      const page = this.page; // page.uploadedFile1uploadedfile1ss:file[][] = []
      // const files: FileList = event.target.files;
      //     console.log(files)
      //     const fileArray: File[] = [];
      //     for (let i = 0; i < files.length; i++) {
      //       fileArray.push(files[i]);
      //     }
      //     page.uploadedfiles[n] = fileArray;;

      const file: File | null = bh.input.event.target.files?.[0] || null;
      console.log(file);

      if (file) {
        // let email = {email: 'angel@gmail.com'}
        page.uploadedFile1.append('proof_of_residence', file);
        // page.uploadedFile1 = {'ID': file, body: {email: 'angel@gmail.com'}}
        // console.log(page.uploadedFile1)
      } else {
        console.log('No file is uploaded');
        // Handle the case where no file is selected
      }

      // page.uploadedFile1 = {ID: page.uploadedFile1}

      console.log(page.uploadedFile1);
      //appendnew_next_sd_FRbAcr44aV0h07X3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FRbAcr44aV0h07X3');
    }
  }

  sd_SuONHM4MqYANzdwR(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_HtdMNe9gY6F8Z4jJ(bh);
      //appendnew_next_sd_SuONHM4MqYANzdwR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SuONHM4MqYANzdwR');
    }
  }

  sd_HtdMNe9gY6F8Z4jJ(bh) {
    try {
      const page = this.page;
      bh.urlUploadpicture = page.ssdUrl + 'upload-picture';

      bh = this.sd_wszUtRW6yc43JuHX(bh);
      //appendnew_next_sd_HtdMNe9gY6F8Z4jJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HtdMNe9gY6F8Z4jJ');
    }
  }

  async sd_wszUtRW6yc43JuHX(bh) {
    try {
      let requestOptions = {
        url: bh.urlUploadpicture,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_yZSNWcQXp9qQaDtz(bh);
      //appendnew_next_sd_wszUtRW6yc43JuHX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wszUtRW6yc43JuHX');
    }
  }

  sd_yZSNWcQXp9qQaDtz(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'DONE picture');
      //appendnew_next_sd_yZSNWcQXp9qQaDtz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yZSNWcQXp9qQaDtz');
    }
  }

  sd_sO0HyFAAQXULsJrf(bh) {
    try {
      const page = this.page; // page.uploadedfile1uploadedfile1ss:file[][] = []
      // const files: FileList = event.target.files;
      //     console.log(files)
      //     const fileArray: File[] = [];
      //     for (let i = 0; i < files.length; i++) {
      //       fileArray.push(files[i]);
      //     }
      //     page.uploadedfiles[n] = fileArray;;

      const file: File | null = bh.input.event.target.files?.[0] || null;
      console.log(file);

      if (file) {
        // let email = {email: 'angel@gmail.com'}
        page.uploadedFile2.append('picture', file);
        // page.uploadedFile2 = {'ID': file, body: {email: 'angel@gmail.com'}}
        // console.log(page.uploadedFile2)
      } else {
        console.log('No file is uploaded');
        // Handle the case where no file is selected
      }

      // page.uploadedFile2 = {ID: page.uploadedfile1}

      console.log(page.uploadedFile2);
      //appendnew_next_sd_sO0HyFAAQXULsJrf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sO0HyFAAQXULsJrf');
    }
  }

  sd_QdlQxPKdmmEjzRaS(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_iTTsEWd34NASI5vG(bh);
      //appendnew_next_sd_QdlQxPKdmmEjzRaS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QdlQxPKdmmEjzRaS');
    }
  }

  sd_iTTsEWd34NASI5vG(bh) {
    try {
      const page = this.page;
      bh.urlUploadproof = page.ssdUrl + 'upload-proof';

      bh = this.sd_oxTtjACEyzMU6aDG(bh);
      //appendnew_next_sd_iTTsEWd34NASI5vG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iTTsEWd34NASI5vG');
    }
  }

  async sd_oxTtjACEyzMU6aDG(bh) {
    try {
      let requestOptions = {
        url: bh.urlUploadproof,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_oxTtjACEyzMU6aDG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oxTtjACEyzMU6aDG');
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
