/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getURL = /* GraphQL */ `query GetURL($id: ID!) {
  getURL(id: $id) {
    id
    short
    long
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetURLQueryVariables, APITypes.GetURLQuery>;
export const listURLS = /* GraphQL */ `query ListURLS($filter: ModelURLFilterInput, $limit: Int, $nextToken: String) {
  listURLS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      short
      long
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListURLSQueryVariables, APITypes.ListURLSQuery>;
