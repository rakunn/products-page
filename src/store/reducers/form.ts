import { FormAction, FormActionNames } from '../actions/form';

export type ParsedCSV = Array<{ data: string[] }>;

export interface FormState {
  name: string;
  gender: string;
  age: string;
  email: string;
  country: string;
  city: string;
  data: ParsedCSV;
}

const initialState: FormState = {
  name: '',
  gender: 'Unspecified',
  age: '',
  email: '',
  country: '',
  city: '',
  data: [],
};

export const formReducer = (state = initialState, action: FormAction) => {
  switch (action.type) {
    case FormActionNames.SUBMIT_FORM_ACTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
