/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useLazyQuery, gql } from "@apollo/client";

const Account_dataDoc = gql(`
query Account_data {
  me {
    id
    name
  }
}
`);

export const AccountDataComponent = () => {
  useLazyQuery(Account_dataDoc);
  return 'AccountData';
};
