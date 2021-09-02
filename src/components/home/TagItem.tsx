import Image from 'next/image';
import Link from 'next/link';
// --------------- function ---------------
export default function TagItem({ name }: { name: string }) {
  return (
    <li>
      <Link href={`/tags/${name}`}>
        <a>{name}</a>
      </Link>
      <Link href={`/tags/${name}`}>
        <a></a>
      </Link>
    </li>
  );
}
