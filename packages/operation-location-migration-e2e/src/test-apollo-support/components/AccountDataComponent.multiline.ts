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

export const AccountDataMultilineComponent = () => {
  const { loading, error, data, fetchMore, networkStatus } =
    useQuery(Account_DataDoc, {
      variables: {
        inTimeline: true,
      },
      fetchPolicy: 'cache-and-network',
    });
  
  return 'AccountData';
};
