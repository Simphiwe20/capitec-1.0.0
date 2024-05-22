// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_7H7Z1QnaqaCSKJsM from 'app/sd-services/shared'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_7H7Z1QnaqaCSKJsM: sd_7H7Z1QnaqaCSKJsM.shared) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
