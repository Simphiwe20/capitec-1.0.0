// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-emailComponent
import { emailComponent } from '../components/more/email.component';
//CORE_REFERENCE_IMPORT-My_tax_detailsComponent
import { My_tax_detailsComponent } from '../components/more/My_tax_details.component';
//CORE_REFERENCE_IMPORT-Our_privacy_centerComponent
import { Our_privacy_centerComponent } from '../components/more/Our_privacy_center.component';
//CORE_REFERENCE_IMPORT-shared
import { shared } from '../sd-services/shared';
//CORE_REFERENCE_IMPORT-shared_cardsService
import { shared_cardsService } from '../services/shared_cards/shared_cards.service';
//CORE_REFERENCE_IMPORT-edit_cardsComponent
import { edit_cardsComponent } from '../components/more/edit_cards.component';
//CORE_REFERENCE_IMPORT-square_cardsComponent
import { square_cardsComponent } from '../components/shared/square_cards.component';
//CORE_REFERENCE_IMPORT-unable_to_captureComponent
import { unable_to_captureComponent } from '../components/shared/unable_to_capture.component';
//CORE_REFERENCE_IMPORT-confirm_picComponent
import { confirm_picComponent } from '../components/shared/confirm_pic.component';
//CORE_REFERENCE_IMPORT-update_permanent_limitsComponent
import { update_permanent_limitsComponent } from '../components/cards/update_permanent_limits.component';
//CORE_REFERENCE_IMPORT-set_temporary_limitsComponent
import { set_temporary_limitsComponent } from '../components/cards/set_temporary_limits.component';
//CORE_REFERENCE_IMPORT-stop_cardComponent
import { stop_cardComponent } from '../components/cards/stop_card.component';
//CORE_REFERENCE_IMPORT-tap_to_payComponent
import { tap_to_payComponent } from '../components/cards/tap_to_pay.component';
//CORE_REFERENCE_IMPORT-enter_remote_pinComponent
import { enter_remote_pinComponent } from '../components/auth/sign_in/enter_remote_pin.component';
//CORE_REFERENCE_IMPORT-footer_homeComponent
import { footer_homeComponent } from '../components/home/footer_home.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home/home.component';
//CORE_REFERENCE_IMPORT-verify_identityComponent
import { verify_identityComponent } from '../components/auth/register/verify_identity.component';
//CORE_REFERENCE_IMPORT-sign_up_stepperComponent
import { sign_up_stepperComponent } from '../components/auth/register/sign_up_stepper.component';
//CORE_REFERENCE_IMPORT-prepare_for_selfieComponent
import { prepare_for_selfieComponent } from '../components/auth/register/prepare_for_selfie.component';
//CORE_REFERENCE_IMPORT-instructionsComponent
import { instructionsComponent } from '../components/auth/register/instructions.component';
//CORE_REFERENCE_IMPORT-sign_in_stepperComponent
import { sign_in_stepperComponent } from '../components/auth/sign_in/sign_in_stepper.component';
//CORE_REFERENCE_IMPORT-saving_accountComponent
import { saving_accountComponent } from '../components/auth/sign_in/saving_account.component';
//CORE_REFERENCE_IMPORT-remote_app_pinComponent
import { remote_app_pinComponent } from '../components/auth/sign_in/remote_app_pin.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/auth/sign_in/footer.component';
//CORE_REFERENCE_IMPORT-feedbackComponent
import { feedbackComponent } from '../components/auth/sign_in/feedback.component';
//CORE_REFERENCE_IMPORT-create_remote_pinComponent
import { create_remote_pinComponent } from '../components/auth/sign_in/create_remote_pin.component';
//CORE_REFERENCE_IMPORT-confirm_app_activationComponent
import { confirm_app_activationComponent } from '../components/auth/sign_in/confirm_app_activation.component';
//CORE_REFERENCE_IMPORT-activation_instructionsComponent
import { activation_instructionsComponent } from '../components/auth/sign_in/activation_instructions.component';
//CORE_REFERENCE_IMPORT-take_picComponent
import { take_picComponent } from '../components/shared/take_pic.component';
//CORE_REFERENCE_IMPORT-ft_landingComponent
import { ft_landingComponent } from '../components/landing/ft_landing.component';
//CORE_REFERENCE_IMPORT-cardsComponent
import { cardsComponent } from '../components/cards/cards.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landing/landing.component';
//CORE_REFERENCE_IMPORT-ft_log_inComponent
import { ft_log_inComponent } from '../components/forms/ft_log_in.component';
//CORE_REFERENCE_IMPORT-messagesComponent
import { messagesComponent } from '../components/notifications/messages.component';
//CORE_REFERENCE_IMPORT-exploreComponent
import { exploreComponent } from '../components/explore/explore.component';
//CORE_REFERENCE_IMPORT-aboutComponent
import { aboutComponent } from '../components/more/about.component';
//CORE_REFERENCE_IMPORT-scan_to_payComponent
import { scan_to_payComponent } from '../components/more/scan_to_pay.component';
//CORE_REFERENCE_IMPORT-settingsComponent
import { settingsComponent } from '../components/more/settings.component';
//CORE_REFERENCE_IMPORT-savingsComponent
import { savingsComponent } from '../components/savings/savings.component';
//CORE_REFERENCE_IMPORT-transfer_moneyComponent
import { transfer_moneyComponent } from '../components/transact/transfer_money.component';
//CORE_REFERENCE_IMPORT-buy_electricityComponent
import { buy_electricityComponent } from '../components/transact/buy_electricity.component';
//CORE_REFERENCE_IMPORT-buy_prepaidComponent
import { buy_prepaidComponent } from '../components/transact/buy_prepaid.component';
//CORE_REFERENCE_IMPORT-send_cashComponent
import { send_cashComponent } from '../components/transact/send_cash.component';
//CORE_REFERENCE_IMPORT-pay_beneficiaryComponent
import { pay_beneficiaryComponent } from '../components/transact/pay_beneficiary.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/forms/profile.component';
//CORE_REFERENCE_IMPORT-forgot_passwordComponent
import { forgot_passwordComponent } from '../components/forms/forgot_password.component';
//CORE_REFERENCE_IMPORT-sign_upComponent
import { sign_upComponent } from '../components/forms/sign_up.component';
//CORE_REFERENCE_IMPORT-log_inComponent
import { log_inComponent } from '../components/forms/log_in.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailComponent
  emailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-My_tax_detailsComponent
  My_tax_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Our_privacy_centerComponent
  Our_privacy_centerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-edit_cardsComponent
  edit_cardsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-square_cardsComponent
  square_cardsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-unable_to_captureComponent
  unable_to_captureComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_picComponent
  confirm_picComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-update_permanent_limitsComponent
  update_permanent_limitsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-set_temporary_limitsComponent
  set_temporary_limitsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stop_cardComponent
  stop_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tap_to_payComponent
  tap_to_payComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-enter_remote_pinComponent
  enter_remote_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footer_homeComponent
  footer_homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verify_identityComponent
  verify_identityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_up_stepperComponent
  sign_up_stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-prepare_for_selfieComponent
  prepare_for_selfieComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-instructionsComponent
  instructionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_in_stepperComponent
  sign_in_stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-saving_accountComponent
  saving_accountComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-remote_app_pinComponent
  remote_app_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedbackComponent
  feedbackComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-create_remote_pinComponent
  create_remote_pinComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_app_activationComponent
  confirm_app_activationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-activation_instructionsComponent
  activation_instructionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-take_picComponent
  take_picComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ft_landingComponent
  ft_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cardsComponent
  cardsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ft_log_inComponent
  ft_log_inComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-messagesComponent
  messagesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-exploreComponent
  exploreComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-aboutComponent
  aboutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-scan_to_payComponent
  scan_to_payComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-settingsComponent
  settingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-savingsComponent
  savingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transfer_moneyComponent
  transfer_moneyComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_electricityComponent
  buy_electricityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_prepaidComponent
  buy_prepaidComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-send_cashComponent
  send_cashComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_beneficiaryComponent
  pay_beneficiaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
  profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgot_passwordComponent
  forgot_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sign_upComponent
  sign_upComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-log_inComponent
  log_inComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-shared
  shared,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-shared_cardsService
  shared_cardsService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'ftlanding', component: ft_landingComponent },
  {
    path: 'activation-instruction',
    component: activation_instructionsComponent,
  },
  { path: 'instruction', component: instructionsComponent },
  { path: 'identity', component: verify_identityComponent },
  { path: 'confirm_pic', component: confirm_picComponent },
  { path: 'take-selfie', component: take_picComponent },
  { path: 'unable_to_capture', component: unable_to_captureComponent },
  { path: 'savings-account', component: saving_accountComponent },
  { path: 'remote-app-pin', component: remote_app_pinComponent },
  { path: 'feedback', component: feedbackComponent },
  { path: 'activate-new-app', component: confirm_app_activationComponent },
  {
    path: 'activation-instructions',
    component: activation_instructionsComponent,
  },
  { path: 'create-remote-pin', component: create_remote_pinComponent },
  { path: 'enter-remote-pin', component: enter_remote_pinComponent },
  { path: 'sign-in-stepper', component: sign_in_stepperComponent },
  { path: 'cards', component: cardsComponent },
  { path: 'tap-to-pay', component: tap_to_payComponent },
  { path: 'stop-card', component: stop_cardComponent },
  { path: 'set-temporary-limits', component: set_temporary_limitsComponent },
  {
    path: 'update-permanent-limits',
    component: update_permanent_limitsComponent,
  },
  { path: 'home', component: homeComponent },
  { path: 'footer', component: footer_homeComponent },
  { path: 'prepare-selfie', component: prepare_for_selfieComponent },
  { path: 'edit-cards', component: edit_cardsComponent },
  { path: 'profile', component: profileComponent },
  { path: 'privacy', component: Our_privacy_centerComponent },
  { path: 'tax', component: My_tax_detailsComponent },
  { path: 'email', component: emailComponent },
  { path: 'my-details', component: sign_upComponent },
  { path: 'buy_electricity', component: buy_electricityComponent },
  { path: '', redirectTo: 'ftlanding', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
