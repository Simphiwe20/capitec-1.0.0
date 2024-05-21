import { Component, Injector } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SDPageCommonService } from 'app/n-services/sd-page-common.service';
import { SDBaseService } from 'app/n-services/SDBaseService';
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service';
import { ft_landingComponent } from '../landing/ft_landing.component';

@Component({
  selector: 'bh-about',
  templateUrl: './about.template.html',
  providers: []
})
export class aboutComponent {
  page: any = { dep: {} };

  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService,
    private bottomSheet: MatBottomSheet
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.sd_uiFE5JORe1WeyrNs(bh);
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
  }

  sd_uiFE5JORe1WeyrNs(bh) {
    try {
      bh = this.sd_Mfn92YfApsXtEeKE(bh);
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uiFE5JORe1WeyrNs');
    }
  }

  openSheet(): void {
    this.bottomSheet.open(ft_landingComponent);
  }

  sd_Mfn92YfApsXtEeKE(bh) {
    try {
      bh = this.sd_aZOVZgpuPms22aZ3(bh);
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mfn92YfApsXtEeKE');
    }
  }

  sd_aZOVZgpuPms22aZ3(bh) {
    try {
      this.page.bottomSheet = this.__page_injector__.get(MatBottomSheet);
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aZOVZgpuPms22aZ3');
    }
  }

  sd_phKnzEanbjgtpuDX(bh) {
    try {
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_phKnzEanbjgtpuDX');
    }
  }

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
}
