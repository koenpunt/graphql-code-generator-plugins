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

export const AccountDataMultilineComponent = () => {
  const { loading, error, data, fetchMore, networkStatus } =
    useQuery(Account_dataDoc, {
      variables: {
        inTimeline: true,
      },
      fetchPolicy: 'cache-and-network',
    });
  
  return 'AccountData';
};
