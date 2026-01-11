/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useLazyQuery, gql } from "@apollo/client";

const Account_DataDoc = gql(`
query Account_Data {
  me {
    id
    name
  }
}
`);

export const AccountDataComponent = () => {
  useLazyQuery(Account_DataDoc);
  return 'AccountData';
};
