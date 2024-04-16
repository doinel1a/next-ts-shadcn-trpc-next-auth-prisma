import React from 'react';

import Link from 'next/link';

import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';
import { Button } from '@/components/ui/button';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/server/trpc';

export default async function Home() {
  const session = await getServerAuthSession();
  const testUsers = await api.testUser.getAll();

  return (
    <main className='flex h-full w-full flex-col items-center justify-center '>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/next-ts-shadcn-ui'
      />

      {session && <h1 className='mb-5 text-3xl'>Welcome back, {session.user.name}</h1>}

      <div className='flex gap-x-5'>
        <Counter />

        {testUsers && testUsers.length > 0 && (
          <ul className='flex w-72 flex-col gap-y-2 rounded-md border-2 border-border p-2'>
            <h2 className='text-lg'>Users list</h2>
            {testUsers?.map((user) => (
              <li key={user.id} className='rounded-md border border-border p-2'>
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button variant={session ? 'destructive' : 'default'} className='mt-5' asChild>
        <Link href={session ? '/api/auth/signout' : '/api/auth/signin'}>
          {session ? 'Sign out' : 'Sign in'}
        </Link>
      </Button>
    </main>
  );
}
