import React from 'react';

import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';
import { database } from '@/server/database';

export default async function Home() {
  const users = await database.user.findMany();

  return (
    <main className='flex h-full w-full items-center justify-center gap-x-5'>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/next-ts-shadcn-ui'
      />
      <Counter />

      <ul className='flex w-72 flex-col gap-y-2 rounded-md border-2 border-border p-2'>
        <h2 className='text-lg'>Users list</h2>
        {users?.map((user) => (
          <li key={user.id} className='rounded-md border border-border p-2'>
            {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
