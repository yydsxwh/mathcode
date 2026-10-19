import Link from "next/link";
export async function StudioNav(_props:{current?:string;area?:string}) { return <nav className="container py-4 flex gap-4"><Link href="/products/mathcode">MathCode</Link><Link href="/products/mathcode">管理</Link></nav>; }
