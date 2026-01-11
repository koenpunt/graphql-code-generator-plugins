/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useQuery, gql } from "@apollo/client";

const Account_dataDoc = gql(`
query Account_data {
  me {
    id
    name
  }
}
`);

export const AccountDataLowercaseComponent = () => {
  useQuery(Account_dataDoc);
  return 'AccountDataLowercase';
};
