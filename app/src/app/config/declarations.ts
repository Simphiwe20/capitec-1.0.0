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
//CORE_REFERENCE_IMPORT-pay_ben_electricComponent
import { pay_ben_electricComponent } from '../components/transact/pay_ben_electric.component';
//CORE_REFERENCE_IMPORT-electricityComponent
import { electricityComponent } from '../components/transact/electricity.component';
//CORE_REFERENCE_IMPORT-pay_userComponent
import { pay_userComponent } from '../components/transact/pay_user.component';
//CORE_REFERENCE_IMPORT-get_estimateComponent
import { get_estimateComponent } from '../components/explore/get_estimate.component';
//CORE_REFERENCE_IMPORT-loanComponent
import { loanComponent } from '../components/explore/loan.component';
//CORE_REFERENCE_IMPORT-creditComponent
import { creditComponent } from '../components/explore/credit.component';
//CORE_REFERENCE_IMPORT-buy_prepaid_mobileComponent
import { buy_prepaid_mobileComponent } from '../components/transact/buy_prepaid_mobile.component';
//CORE_REFERENCE_IMPORT-add_electricity_benComponent
import { add_electricity_benComponent } from '../components/transact/add_electricity_ben.component';
//CORE_REFERENCE_IMPORT-choose_banksComponent
import { choose_banksComponent } from '../components/transact/choose_banks.component';
//CORE_REFERENCE_IMPORT-bank_accountComponent
import { bank_accountComponent } from '../components/transact/bank_account.component';
//CORE_REFERENCE_IMPORT-payment_notifcationComponent
import { payment_notifcationComponent } from '../components/transact/payment_notifcation.component';
//CORE_REFERENCE_IMPORT-cellphoneComponent
import { cellphoneComponent } from '../components/transact/cellphone.component';
//CORE_REFERENCE_IMPORT-add_beneficiaryComponent
import { add_beneficiaryComponent } from '../components/transact/add_beneficiary.component';
//CORE_REFERENCE_IMPORT-transact_landingComponent
import { transact_landingComponent } from '../components/transact/transact_landing.component';
//CORE_REFERENCE_IMPORT-infoComponent
import { infoComponent } from '../components/auth/sign_in/info.component';
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
//CORE_REFERENCE_IMPORT-facial_recognitionComponent
import { facial_recognitionComponent } from '../components/shared/facial_recognition.component';
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
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_ben_electricComponent
  pay_ben_electricComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-electricityComponent
  electricityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pay_userComponent
  pay_userComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-get_estimateComponent
  get_estimateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loanComponent
  loanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-creditComponent
  creditComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_prepaid_mobileComponent
  buy_prepaid_mobileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_electricity_benComponent
  add_electricity_benComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-choose_banksComponent
  choose_banksComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bank_accountComponent
  bank_accountComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-payment_notifcationComponent
  payment_notifcationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cellphoneComponent
  cellphoneComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_beneficiaryComponent
  add_beneficiaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transact_landingComponent
  transact_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-infoComponent
  infoComponent,
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
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-facial_recognitionComponent
  facial_recognitionComponent,
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
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
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
  { path: 'info', component: infoComponent },
  { path: 'landing', component: landingComponent },
  { path: 'transact-landing', component: transact_landingComponent },
  { path: 'pay-beneficiary', component: pay_beneficiaryComponent },
  { path: 'add-beneficiary', component: add_beneficiaryComponent },
  { path: 'cellphone', component: cellphoneComponent },
  { path: 'payment-notification', component: payment_notifcationComponent },
  { path: 'bank-account', component: bank_accountComponent },
  { path: 'choose-banks', component: choose_banksComponent },
  {
    path: 'buy-electricity',
    component: buy_electricityComponent,
    children: [
      { path: 'ele', component: electricityComponent },
      { path: 'pay-ben-electric', component: pay_ben_electricComponent },
    ],
  },
  { path: 'buy-prepaid', component: buy_prepaidComponent },
  { path: 'add-electricity-ben', component: add_electricity_benComponent },
  { path: 'buy-prepaid-mobile', component: buy_prepaid_mobileComponent },
  { path: 'send-cash', component: send_cashComponent },
  { path: 'transfer-money', component: transfer_moneyComponent },
  { path: 'messages', component: messagesComponent },
  { path: 'explore', component: exploreComponent },
  { path: 'credit', component: creditComponent },
  { path: 'loan', component: loanComponent },
  { path: 'get-estimate', component: get_estimateComponent },
  { path: 'pay-user', component: pay_userComponent },
  { path: 'saving', component: savingsComponent },
  { path: 'electricity', component: electricityComponent },
  { path: '', redirectTo: '/savings-account', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
