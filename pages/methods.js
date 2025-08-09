import Link from 'next/link';

export default function Methods({ brightness, setBrightness }) {
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
          <h2 className="title">Methods</h2>

          <div className="links">
            <a
              className="link-card"
              href="https://app.splunk.gg/u/exmadeGG"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="ln">SPLUNK</div>
              <div className="sub">Open in new tab</div>
            </a>

            <a
              className="link-card"
              href="https://www.logged.tg/auth/exmade"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="ln">INJURIES</div>
              <div className="sub">Open in new tab</div>
            </a>
          </div>

          <div className="btn-row">
            <Link href="/">
              <a className="btn small">Go Back</a>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
