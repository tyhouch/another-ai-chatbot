// components/auth-form.tsx
import * as React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function AuthForm({
  action,
  children,
  defaultUsername = '',
}: {
  action: (formData: FormData) => void | Promise<void>;
  children: React.ReactNode;
  defaultUsername?: string;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    action(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 px-4 sm:px-16"
    >
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="username"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Username
        </Label>

        <Input
          id="username"
          name="username"
          className="bg-muted text-md md:text-sm"
          type="text"
          placeholder="username"
          autoComplete="username"
          required
          autoFocus
          defaultValue={defaultUsername}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
        
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Password
        </Label>

        <Input
          id="password"
          name="password"
          placeholder="password"
          className="bg-muted text-md md:text-sm"
          type="password"
          required
        />
      </div>

      {children}
    </form>
  );
}