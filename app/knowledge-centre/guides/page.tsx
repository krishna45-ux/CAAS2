import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <main className="page-main wrap" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '120px' }}>
      <span className="eyebrow eyebrow--cyan">Coming Soon</span>
      <h1 className="h-section" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '24px' }}>We are working on<br />something <span className="u-cyan">special.</span></h1>
      <p style={{ color: 'var(--muted)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '40px' }}>
        Our team is busy crafting expert guides and resources for you. Check back soon!
      </p>
      <Link href="/" className="btn btn--primary btn--lg">
        Return Home &rarr;
      </Link>
    </main>
  );
}
