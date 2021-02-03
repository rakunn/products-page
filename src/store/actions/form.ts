import { FormState } from '../reducers/form';

export enum FormActionNames {
  SUBMIT_FORM_ACTION = 'SUBMIT_FORM',
}

export type SubmitFormAction = {
  type: FormActionNames.SUBMIT_FORM_ACTION;
  payload: FormState;
};

export type FormAction = SubmitFormAction;

export const submitFormActionCreator = (
  payload: FormState
): SubmitFormAction => {
  return {
    type: FormActionNames.SUBMIT_FORM_ACTION,
    payload,
  };
};
