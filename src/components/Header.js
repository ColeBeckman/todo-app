import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <h1>Todo App</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
    </header>
  );
}
