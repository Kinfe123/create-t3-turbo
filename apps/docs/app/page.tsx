import Link from "next/link";

const title = "create-t3-turbo";
const description = "This is a fork of create-t3-app modified to use Better Auth instead of NextAuth.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
