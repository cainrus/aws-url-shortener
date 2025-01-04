/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateURLInput = {
  id?: string | null,
  short: string,
  long: string,
};

export type ModelURLConditionInput = {
  short?: ModelStringInput | null,
  long?: ModelStringInput | null,
  and?: Array< ModelURLConditionInput | null > | null,
  or?: Array< ModelURLConditionInput | null > | null,
  not?: ModelURLConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type URL = {
  __typename: "URL",
  id: string,
  short: string,
  long: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateURLInput = {
  id: string,
  short?: string | null,
  long?: string | null,
};

export type DeleteURLInput = {
  id: string,
};

export type ModelURLFilterInput = {
  id?: ModelIDInput | null,
  short?: ModelStringInput | null,
  long?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelURLFilterInput | null > | null,
  or?: Array< ModelURLFilterInput | null > | null,
  not?: ModelURLFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelURLConnection = {
  __typename: "ModelURLConnection",
  items:  Array<URL | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionURLFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  short?: ModelSubscriptionStringInput | null,
  long?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionURLFilterInput | null > | null,
  or?: Array< ModelSubscriptionURLFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateURLMutationVariables = {
  input: CreateURLInput,
  condition?: ModelURLConditionInput | null,
};

export type CreateURLMutation = {
  createURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateURLMutationVariables = {
  input: UpdateURLInput,
  condition?: ModelURLConditionInput | null,
};

export type UpdateURLMutation = {
  updateURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteURLMutationVariables = {
  input: DeleteURLInput,
  condition?: ModelURLConditionInput | null,
};

export type DeleteURLMutation = {
  deleteURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetURLQueryVariables = {
  id: string,
};

export type GetURLQuery = {
  getURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListURLSQueryVariables = {
  filter?: ModelURLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListURLSQuery = {
  listURLS?:  {
    __typename: "ModelURLConnection",
    items:  Array< {
      __typename: "URL",
      id: string,
      short: string,
      long: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateURLSubscriptionVariables = {
  filter?: ModelSubscriptionURLFilterInput | null,
};

export type OnCreateURLSubscription = {
  onCreateURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateURLSubscriptionVariables = {
  filter?: ModelSubscriptionURLFilterInput | null,
};

export type OnUpdateURLSubscription = {
  onUpdateURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteURLSubscriptionVariables = {
  filter?: ModelSubscriptionURLFilterInput | null,
};

export type OnDeleteURLSubscription = {
  onDeleteURL?:  {
    __typename: "URL",
    id: string,
    short: string,
    long: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
