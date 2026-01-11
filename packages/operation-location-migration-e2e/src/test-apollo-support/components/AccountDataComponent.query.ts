/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useQuery, gql } from "@apollo/client";

const Account_DataDoc = gql(`
query Account_Data {
  me {
    id
    name
  }
}
`);

export const AccountDataComponent = () => {
  useQuery(Account_DataDoc);
  return 'AccountData';
};
