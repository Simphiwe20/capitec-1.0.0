// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import * as faceapi from 'face-api.js'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-take_pic',
  templateUrl: './take_pic.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class take_picComponent implements AfterViewInit {
  @ViewChild('video', { read: ElementRef })
  public video: any = null;
  @ViewChild('queryImage', { read: ElementRef })
  public queryImage: any = null;
  @ViewChild('canva')
  public canva: any = null;
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
      this.sd_eCZZUnlSMVwfMcyH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_eCZZUnlSMVwfMcyH(bh) {
    try {
      bh = this.sd_y4FhvWW38E7URPcN(bh);
      //appendnew_next_sd_eCZZUnlSMVwfMcyH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eCZZUnlSMVwfMcyH');
    }
  }

  onStart(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hL4iXR6BqCoSK9vG(bh);
      //appendnew_next_onStart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DsGnTWREu6BlJp2o');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_sY0xXmNWESxKr2bi(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HUS1fOtmgfDCv9Sr');
    }
  }

  fetchModels(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VMrmvza7EXXEHHti(bh);
      //appendnew_next_fetchModels
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QxYs965OkMcTzph2');
    }
  }

  detectFace(video: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { video };
      bh.local = {};
      bh = this.sd_kfXCcCwWyvzZWLFl(bh);
      //appendnew_next_detectFace
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ug0ZXT4p9mcslPvC');
    }
  }

  compareFaces(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { singleDetect: undefined, detectionDescriptor: undefined };
      bh = this.sd_76kbiWtvmvCzNpx6(bh);
      //appendnew_next_compareFaces
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ex6lfY9xGi7qDtvh');
    }
  }

  captureImage(captured: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { captured };
      bh.local = {};
      bh = this.sd_Kf4jme34CMv9Geiw(bh);
      //appendnew_next_captureImage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_32EsT2sQhBnYG5Rb');
    }
  }
  //appendnew_flow_take_picComponent_start

  sd_y4FhvWW38E7URPcN(bh) {
    try {
      this.page.platform = PLATFORM_ID;
      bh = this.sd_BILA5xRajUmYuJJn(bh);
      //appendnew_next_sd_y4FhvWW38E7URPcN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y4FhvWW38E7URPcN');
    }
  }

  sd_BILA5xRajUmYuJJn(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_6b86hSzuCJQ9MXHu(bh);
      //appendnew_next_sd_BILA5xRajUmYuJJn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BILA5xRajUmYuJJn');
    }
  }

  sd_6b86hSzuCJQ9MXHu(bh) {
    try {
      this.page.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_hK7Bc3ximLPCi0sF(bh);
      //appendnew_next_sd_6b86hSzuCJQ9MXHu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6b86hSzuCJQ9MXHu');
    }
  }

  sd_hK7Bc3ximLPCi0sF(bh) {
    try {
      bh.faceapi = faceapi;
      bh = this.sd_96fKaQJjKC3iVykX(bh);
      //appendnew_next_sd_hK7Bc3ximLPCi0sF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hK7Bc3ximLPCi0sF');
    }
  }

  sd_96fKaQJjKC3iVykX(bh) {
    try {
      this.page.canvas = undefined;
      this.page.displaySize = undefined;
      this.page.isDetected = undefined;
      this.page.isCorrect = undefined;
      this.page.detection = undefined;
      this.page.resizedDetections = undefined;
      this.page.similiarityNu = 0.5029092815091631;
      this.page.desctriptorDistance = undefined;
      this.page.intervalID = undefined;
      bh = this.sd_O16ctU6Zppzpt1L5(bh);
      //appendnew_next_sd_96fKaQJjKC3iVykX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_96fKaQJjKC3iVykX');
    }
  }

  sd_O16ctU6Zppzpt1L5(bh) {
    try {
      let outputVariables = this.fetchModels();

      this.sd_DORYlrRBmRqCKXWR(bh);
      //appendnew_next_sd_O16ctU6Zppzpt1L5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O16ctU6Zppzpt1L5');
    }
  }

  sd_DORYlrRBmRqCKXWR(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.faceapi);
      //appendnew_next_sd_DORYlrRBmRqCKXWR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DORYlrRBmRqCKXWR');
    }
  }

  sd_hL4iXR6BqCoSK9vG(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { video: this.video });
      bh = this.sd_GQWGg2zFLUO9NZNp(bh);
      //appendnew_next_sd_hL4iXR6BqCoSK9vG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hL4iXR6BqCoSK9vG');
    }
  }

  sd_GQWGg2zFLUO9NZNp(bh) {
    try {
      const page = this.page;
      bh.video = bh.pageViews.video.nativeElement;
      console.log(bh.video);
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((ms: MediaStream) => {
          const _video = bh.video;
          console.log(_video);
          _video.srcObject = ms;
          _video.play();
          console.log(_video);
        });
      bh = this.sd_pcm3vhG3lD7DSgqQ(bh);
      //appendnew_next_sd_GQWGg2zFLUO9NZNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GQWGg2zFLUO9NZNp');
    }
  }

  sd_pcm3vhG3lD7DSgqQ(bh) {
    try {
      let outputVariables = this.detectFace(bh.video);

      //appendnew_next_sd_pcm3vhG3lD7DSgqQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pcm3vhG3lD7DSgqQ');
    }
  }

  sd_sY0xXmNWESxKr2bi(bh) {
    try {
      let outputVariables = this.onStart();

      //appendnew_next_sd_sY0xXmNWESxKr2bi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sY0xXmNWESxKr2bi');
    }
  }

  async sd_VMrmvza7EXXEHHti(bh) {
    try {
      const page = this.page;
      console.log(bh);
      console.log(faceapi);

      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('../../../assets/models'),
        await faceapi.nets.faceLandmark68Net.loadFromUri(
          '../../../assets/models'
        ),
        await faceapi.nets.faceRecognitionNet.loadFromUri(
          '../../../assets/models'
        ),
        await faceapi.nets.faceExpressionNet.loadFromUri(
          '../../../assets/models'
        ),
        // await faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
        ,
      ]);
      //appendnew_next_sd_VMrmvza7EXXEHHti
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VMrmvza7EXXEHHti');
    }
  }

  async sd_kfXCcCwWyvzZWLFl(bh) {
    try {
      const page = this.page;
      console.log(faceapi);
      page.displaySize = {
        width: bh.input.video.width,
        height: bh.input.video.width,
      };
      console.log(page.displaySize);
      // faceapi.matchDimensions(page.canvas, page.displaySize);
      page.intervalID = setInterval(async () => {
        page.isDetected = false;
        page.detection = await faceapi
          .detectAllFaces(bh.input.video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptors();
        // page.resizedDetections = faceapi.resizeResults(
        //   page.detection,
        //   page.displaySize
        // );
        if (page.detection.length) page.isDetected = !page.isDetected;
        console.log(page.detection);
        this.compareFaces();
        // page.canvas.getContext('2d').clearRect(0, 0, page.canvas.width, page.canvas.height);
        // faceapi.draw.drawDetections(page.canvas, page.resizedDetections);
        // faceapi.draw.drawFaceLandmarks(page.canvas, page.resizedDetections);
        // faceapi.draw.drawFaceExpressions(page.canvas, page.resizedDetections);
      }, 100);

      console.log('Inside the face detect:', page.intervalID);
      bh = this.sd_Sda6NtePn0DKCPTN(bh);
      //appendnew_next_sd_kfXCcCwWyvzZWLFl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kfXCcCwWyvzZWLFl');
    }
  }

  sd_Sda6NtePn0DKCPTN(bh) {
    try {
      let outputVariables = this.compareFaces();

      //appendnew_next_sd_Sda6NtePn0DKCPTN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sda6NtePn0DKCPTN');
    }
  }

  sd_76kbiWtvmvCzNpx6(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        queryImage: this.queryImage,
      });
      bh = this.sd_7oKOX1IeFEoAPPjC(bh);
      //appendnew_next_sd_76kbiWtvmvCzNpx6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_76kbiWtvmvCzNpx6');
    }
  }

  async sd_7oKOX1IeFEoAPPjC(bh) {
    try {
      const page = this.page;
      console.log('Compare');
      console.log(this.queryImage);
      bh.local.singleDetect = await faceapi
        .detectSingleFace(
          this.queryImage.nativeElement,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      console.log('Single image', bh.local.singleDetect);
      bh = this.sd_n7wvG87rDSlZpwDR(bh);
      //appendnew_next_sd_7oKOX1IeFEoAPPjC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7oKOX1IeFEoAPPjC');
    }
  }

  async sd_n7wvG87rDSlZpwDR(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.singleDetect,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5hmJwF6uT4fTFq4u(bh);
      } else {
        bh = await this.sd_K1pkz6XwYqzzxyys(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n7wvG87rDSlZpwDR');
    }
  }

  async sd_K1pkz6XwYqzzxyys(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          this.page.detection,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_KAz0tdw3J2NhmbrD(bh);
      } else {
        bh = await this.sd_pN4Tv5lsQzB8ExBT(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K1pkz6XwYqzzxyys');
    }
  }

  sd_pN4Tv5lsQzB8ExBT(bh) {
    try {
      const page = this.page;
      page.detection.forEach((detection: any) => {
        bh.local.detectionDescriptor = [detection.descriptor];
        let label = '';

        page.desctriptorDistance = faceapi.euclideanDistance(
          detection.descriptor,
          bh.local.singleDetect.descriptor
        );
        if (page.desctriptorDistance <= page.similiarityNu) {
          page.isCorrect = !page.isCorrect;
          label = 'Simphiwe';
          console.log('You are Simphiwe');
          this.captureImage();
          return new faceapi.LabeledFaceDescriptors(
            label,
            bh.local.detectionDescriptor
          );
        } else {
          page.isCorrect = false;
          label = 'Not Simphiwe';
          console.log('You are not Simphiwe');
          page.router.navigation(['/unable_to_capture']);
          return new faceapi.LabeledFaceDescriptors(
            'You are not Simphiwe',
            bh.local.detectionDescriptor
          );
        }
      });
      //appendnew_next_sd_pN4Tv5lsQzB8ExBT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pN4Tv5lsQzB8ExBT');
    }
  }

  sd_KAz0tdw3J2NhmbrD(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'detection is empty');
      //appendnew_next_sd_KAz0tdw3J2NhmbrD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KAz0tdw3J2NhmbrD');
    }
  }

  sd_5hmJwF6uT4fTFq4u(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'Single detection is empty');
      //appendnew_next_sd_5hmJwF6uT4fTFq4u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5hmJwF6uT4fTFq4u');
    }
  }

  sd_Kf4jme34CMv9Geiw(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        canva: this.canva,
        video: this.video,
      });
      bh = this.sd_GyyDI8yMgC72VzdC(bh);
      //appendnew_next_sd_Kf4jme34CMv9Geiw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kf4jme34CMv9Geiw');
    }
  }

  sd_GyyDI8yMgC72VzdC(bh) {
    try {
      const page = this.page;
      page.canvas = bh.pageViews.canva;
      page.video = bh.pageViews.video.nativeElement;
      const context = page.canvas.nativeElement.getContext('2d');
      console.log('Canvas', page.canvas);
      console.log('Context', context);
      console.log('bh videoInput', page.video);

      page.canvas.nativeElement.width = 100;
      page.canvas.nativeElement.height = 100;
      context.drawImage(page.video, 0, 0, 100, 100);

      page.capturedImage = page.canvas.nativeElement.toDataURL('image/png');
      page.capturedImage = page.capturedImage;
      bh.data = { data: page.capturedImage };
      console.log(page.capturedImage);
      // page.router.navigate(['/test'], {queryParams: {image: page.capturedImage}})
      bh = this.sd_AbgviUGdZjNQ9tHM(bh);
      //appendnew_next_sd_GyyDI8yMgC72VzdC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GyyDI8yMgC72VzdC');
    }
  }

  sd_AbgviUGdZjNQ9tHM(bh) {
    try {
      const page = this.page;
      let video = bh.pageViews.video.nativeElement;
      // Get streams
      let streams = video.srcObject;
      // Get all tracks
      let tracks = streams.getTracks();
      // Closing each track
      tracks.forEach((track) => {
        track.stop();
      });
      console.log('Interval ID: ', page.intervalID);
      clearInterval(page.intervalID);

      bh = this.sd_Rtr284XTllf0kkPT(bh);
      //appendnew_next_sd_AbgviUGdZjNQ9tHM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AbgviUGdZjNQ9tHM');
    }
  }

  async sd_Rtr284XTllf0kkPT(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/confirm_pic');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.data),
        });
      //appendnew_next_sd_Rtr284XTllf0kkPT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rtr284XTllf0kkPT');
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
  //appendnew_flow_take_picComponent_Catch
}
