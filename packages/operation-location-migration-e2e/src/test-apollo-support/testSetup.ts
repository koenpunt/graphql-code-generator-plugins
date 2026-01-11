import { createTestSetup } from '@workspace/testing';

createTestSetup({
  baseDir: __dirname,
  files: [
    {
      file: 'components/MeComponent.lazy-query.ts',
      content: `import { useMeLazyQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeLazyQuery();
  return 'Me';
};\n`,
    },
    {
      file: 'components/MeComponent.query.ts',
      content: `import { useMeQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeQuery({ skip: true });
  return 'Me';
};\n`,
    },
    {
      file: 'components/MeComponent.suspense-query.ts',
      content: `import { useMeSuspenseQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeSuspenseQuery();
  return 'Me';
};\n`,
    },
    {
      file: 'components/UserComponent.ts',
      content: `import { useMeQuery, useMeLazyQuery, useMeSuspenseQuery, useUpdateUserMutation } from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery({ onCompleted: () => {} });
  const res = useMeSuspenseQuery();
  useUpdateUserMutation();
  return 'User';
};\n`,
    },
    {
      file: 'components/UserSubscription.ts',
      content: `import { useUserChangesSubscription } from '../generated/hooks.generated';

export const UserSubscription = () => {
  useUserChangesSubscription({});
};\n`,
    },
    {
      file: 'components/AccountDataComponent.query.ts',
      content: `import { useAccount_DataQuery } from '../generated/hooks.generated';

export const AccountDataComponent = () => {
  useAccount_DataQuery();
  return 'AccountData';
};\n`,
    },
    {
      file: 'components/AccountDataComponent.lazy-query.ts',
      content: `import { useAccount_DataLazyQuery } from '../generated/hooks.generated';

export const AccountDataComponent = () => {
  useAccount_DataLazyQuery();
  return 'AccountData';
};\n`,
    },
    {
      file: 'components/AccountDataComponent.suspense-query.ts',
      content: `import { useAccount_DataSuspenseQuery } from '../generated/hooks.generated';

export const AccountDataComponent = () => {
  useAccount_DataSuspenseQuery();
  return 'AccountData';
};\n`,
    },
    {
      file: 'components/AccountDataComponent.multiline.ts',
      content: `import { useAccount_DataQuery } from '../generated/hooks.generated';

export const AccountDataMultilineComponent = () => {
  const { loading, error, data, fetchMore, networkStatus } =
    useAccount_DataQuery({
      variables: {
        inTimeline: true,
      },
      fetchPolicy: 'cache-and-network',
    });
  
  return 'AccountData';
};\n`,
    },
  ],
});
