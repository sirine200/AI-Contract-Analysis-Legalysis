// pages/auth/callback.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Force cookie attachment
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/current-user`, {
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) router.push('/dashboard');
      else router.push('/login?error=auth_failed');
    })
    .catch(() => router.push('/login?error=connection_failed'));
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin" />
      <p className="ml-2 text-lg">Finalizing authentication...</p>
    </div>
  );
}