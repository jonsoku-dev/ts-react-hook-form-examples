export type DoubleNestedWithValidationFormValues = {
  name: string;
  depthOne: DepthOneValues[];
};

export type DepthOneValues = {
  title: string;
  desc: string;
  depthTwo: DepthTwoValues[];
};

export type DepthTwoValues = {
  language: string;
  text: string;
};
