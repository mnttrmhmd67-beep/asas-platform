import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>منصة أساس</h1>
        <p>بيع حديد التسليح ومواد البناء في العراق</p>
      </header>

      <section>
        <h2>اختر نوع المستخدم</h2>
        <Link href="/customer">
          <button>أنا عميل</button>
        </Link>
        <Link href="/supplier">
          <button>أنا مورد</button>
        </Link>
      </section>
    </main>
  );
}
