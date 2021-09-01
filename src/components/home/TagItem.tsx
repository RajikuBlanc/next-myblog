import Link from 'next/link';
// --------------- function ---------------
export default function TagItem({ name }: { name: string }) {
  return (
    <li>
      <Link href={`/tags/${name}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
}
