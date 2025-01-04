/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from './API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createURL = /* GraphQL */ `mutation CreateURL(
  $input: CreateURLInput!
  $condition: ModelURLConditionInput
) {
  createURL(input: $input, condition: $condition) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateURLMutationVariables,
  APITypes.CreateURLMutation
>;
export const updateURL = /* GraphQL */ `mutation UpdateURL(
  $input: UpdateURLInput!
  $condition: ModelURLConditionInput
) {
  updateURL(input: $input, condition: $condition) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateURLMutationVariables,
  APITypes.UpdateURLMutation
>;
export const deleteURL = /* GraphQL */ `mutation DeleteURL(
  $input: DeleteURLInput!
  $condition: ModelURLConditionInput
) {
  deleteURL(input: $input, condition: $condition) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteURLMutationVariables,
  APITypes.DeleteURLMutation
>;
