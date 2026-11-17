/**
 * A password field with an eye button that shows what was typed, so a wrong
 * password is easy to spot. Takes the same props as the UI kit's Input.
 */
import * as React from 'react';
import { Input } from '@bloomneo/uikit';
import { Eye, EyeOff } from 'lucide-react';

type Props = Omit<React.ComponentProps<typeof Input>, 'type'>;

export function PasswordInput({ className, ...props }: Props) {
  const [shown, setShown] = React.useState(false);
  return (
    <div className="relative">
      <Input {...props} type={shown ? 'text' : 'password'} className={`pr-10 ${className ?? ''}`} />
      <button
        type="button"
        onClick={() => setShown((s) => !s)}
        aria-label={shown ? 'Hide password' : 'Show password'}
        aria-pressed={shown}
        tabIndex={-1}
        className="absolute inset-y-0 right-0 grid w-10 cursor-pointer place-items-center text-muted-foreground transition-colors hover:text-foreground"
      >
        {shown ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
}
