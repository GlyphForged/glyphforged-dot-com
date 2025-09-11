import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <h2>Game not found</h2>
      <p>
        <Link href="/games">Back to Games</Link>
      </p>
    </>
  );
}
