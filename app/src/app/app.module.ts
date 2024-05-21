import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
LOAD_WASM().subscribe();

@NgModule({
  declarations: [...appDeclarations
  ],
  imports: [...appImportModules,
    NgxScannerQrcodeModule,
    MatBottomSheetModule
  ],
  providers: [...appProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
