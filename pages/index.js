import Link from 'next/link';

export default function Home({ brightness, setBrightness }) {
  return (
    <main className="wrap">
      <div className="panel">
        <header className="hdr">
          <div className="logo">exmade</div>
          <div className="hdr-actions">
            <label htmlFor="brightness">Brightness</label>
            <input
              id="brightness"
              type="range"
              min="0.5"
              max="1.5"
              step="0.05"
              value={brightness}
              onChange={(e) => setBrightness(parseFloat(e.target.value))}
              aria-label="Brightness control"
            />
          </div>
        </header>

        <section className="content">
          <h2 className="title">Quick Links</h2>

          <div className="btn-row">
            <Link href="/methods">
              <a className="btn">Methods</a>
            </Link>
            <a
              className="btn discord"
              href="https://discord.gg/4tvp8V9pBJ"
              target="_blank"
              rel="noreferrer noopener"
            >
              Join our DISCORD
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
