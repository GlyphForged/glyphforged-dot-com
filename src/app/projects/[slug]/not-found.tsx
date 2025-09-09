import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <h2>Project not found</h2>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
    </>
  );
}
