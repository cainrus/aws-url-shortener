/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateURL = /* GraphQL */ `subscription OnCreateURL($filter: ModelSubscriptionURLFilterInput) {
  onCreateURL(filter: $filter) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateURLSubscriptionVariables,
  APITypes.OnCreateURLSubscription
>;
export const onUpdateURL = /* GraphQL */ `subscription OnUpdateURL($filter: ModelSubscriptionURLFilterInput) {
  onUpdateURL(filter: $filter) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateURLSubscriptionVariables,
  APITypes.OnUpdateURLSubscription
>;
export const onDeleteURL = /* GraphQL */ `subscription OnDeleteURL($filter: ModelSubscriptionURLFilterInput) {
  onDeleteURL(filter: $filter) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteURLSubscriptionVariables,
  APITypes.OnDeleteURLSubscription
>;
