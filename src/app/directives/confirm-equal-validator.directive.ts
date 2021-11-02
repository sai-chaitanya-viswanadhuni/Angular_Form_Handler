import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true }]
})
export class ConfirmEqualValidatorDirective implements Validator {

  @Input('appConfirmEqualValidator') MatchPassword: string[] = [];

  constructor(private customValidator: CustomValidationService) { }

  validate(formGroup: FormGroup): any {
    return this.customValidator.matchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }
}
