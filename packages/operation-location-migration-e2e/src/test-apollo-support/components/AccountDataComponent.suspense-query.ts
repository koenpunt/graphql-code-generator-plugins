/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery, gql } from "@apollo/client";

const Account_dataDoc = gql(`
query Account_data {
  me {
    id
    name
  }
}
`);

export const AccountDataComponent = () => {
  useSuspenseQuery(Account_dataDoc);
  return 'AccountData';
};
