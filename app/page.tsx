const services = [
  { number: "01", title: "The Nash Cut", copy: "A considered consultation, precise cut and finished style. Classic or current, built around your hair." },
  { number: "02", title: "Skin Fade", copy: "A clean, controlled fade with careful graduation, sharp edges and a finish that holds its shape." },
  { number: "03", title: "Cut & Beard", copy: "Haircut and beard work shaped together for balance, proportion and a properly connected finish." },
  { number: "04", title: "Beard & Hot Towel", copy: "Line-up, shape and detail work, finished with the calm ritual of a hot towel." },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Nash Barber home">
          <span className="wordmark-main">NASH</span>
          <span className="wordmark-sub">BARBER · LYMINGTON</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#story">Our craft</a>
          <a href="#work">Our work</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="button button-small desktop-book" href="#book">Book a chair</a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#story">Our craft</a>
            <a href="#work">Our work</a>
            <a href="#visit">Visit</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Kurdish craft · New Forest style</p>
          <h1>Cut with<br /><em>precision.</em></h1>
          <p className="hero-intro">
            Modern barbering shaped by Kurdish technique. Clean fades, considered scissor work and sharp beard lines, finished properly in the heart of Lymington.
          </p>
          <div className="hero-actions">
            <a className="button" href="#book">Book an appointment</a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Barber creating a precision haircut">
          <div className="hero-frame" aria-hidden="true" />
          <div className="hero-stamp"><span>N</span><small>Lymington<br />Hampshire</small></div>
          <p className="vertical-note">CUT · CRAFT · CHARACTER</p>
        </div>
      </section>

      <section className="service-ticker" aria-label="Featured services">
        <span>Skin fades</span><i>◆</i><span>Scissor cuts</span><i>◆</i><span>Beard craft</span><i>◆</i><span>Hot towel</span>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Services</p>
            <h2>One chair.<br /><em>Every detail.</em></h2>
          </div>
          <p className="section-lead">No rushed finishes. Every service is approached with the same steady hand, close attention and respect for the craft.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#book" aria-label={`Enquire about ${service.title}`}>Enquire <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="content-note">Service list, prices and timings can be added once confirmed.</p>
      </section>

      <section className="story" id="story">
        <div className="story-image" role="img" aria-label="Barber working carefully with scissors">
          <span className="image-label">The hands behind the cut</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The Nash way</p>
          <h2>Kurdish roots.<br /><em>Modern edge.</em></h2>
          <p className="story-lead">Kurdish barbering is known for its control, precision and complete approach to grooming.</p>
          <p>At NASH, that discipline meets modern British style. We take time to understand how your hair grows, how you wear it and how the cut needs to work between visits. The result is clean, balanced and unmistakably yours.</p>
          <div className="principles">
            <div><span>01</span><strong>Listen first</strong><small>A proper consultation before the first cut.</small></div>
            <div><span>02</span><strong>Work precisely</strong><small>Clean sections, controlled fades, sharp detail.</small></div>
            <div><span>03</span><strong>Finish fully</strong><small>No shortcuts and no unfinished edges.</small></div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Sharp from<br /><em>every angle.</em></h2>
          </div>
          <p className="section-lead">Fades, texture, beard work and classic cuts. The gallery is ready for NASH&apos;s own work when the photography is available.</p>
        </div>
        <div className="gallery">
          <div className="gallery-image gallery-one" role="img" aria-label="Barber detailing a modern haircut"><span>Precision</span></div>
          <div className="gallery-image gallery-two" role="img" aria-label="Close-up of a finished haircut"><span>Shape</span></div>
          <div className="gallery-image gallery-three" role="img" aria-label="Barber tools ready for use"><span>Detail</span></div>
        </div>
        <p className="photo-credit">Draft photography via Unsplash. Replace with original NASH work before final launch.</p>
      </section>

      <section className="visit" id="visit">
        <div className="visit-mark" aria-hidden="true">
          <span className="motif">◆</span>
          <strong>N</strong>
          <small>BARBER</small>
        </div>
        <div className="visit-copy">
          <p className="eyebrow dark">Find us</p>
          <h2>Your local chair<br />in <em>Lymington.</em></h2>
          <p>NASH Barber is based in Lymington, Hampshire, serving the town and the wider New Forest community.</p>
          <a className="text-link dark-link" href="https://www.google.com/maps/search/?api=1&query=NASH+Barber+Lymington+Hampshire" target="_blank" rel="noreferrer">Open map search <span aria-hidden="true">↗</span></a>
        </div>
        <div className="details-card">
          <div><small>Address</small><strong>Lymington, Hampshire</strong><span>Full address to be added</span></div>
          <div><small>Opening hours</small><strong>Hours to be confirmed</strong><span>Add weekday and weekend hours</span></div>
          <div><small>Contact</small><strong>Phone & social details</strong><span>To be added before launch</span></div>
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking-pattern" aria-hidden="true" />
        <p className="eyebrow">Your next cut</p>
        <h2>Ready to look<br /><em>properly sharp?</em></h2>
        <p>Online booking, telephone and walk-in details can be connected here once the preferred booking route is confirmed.</p>
        <span className="button button-muted" aria-disabled="true">Booking link to be added</span>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          <span className="wordmark-main">NASH</span>
          <span className="wordmark-sub">BARBER · LYMINGTON</span>
        </a>
        <p>Kurdish precision. Lymington character.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#story">Our craft</a><a href="#visit">Visit</a></div>
        <small>© {new Date().getFullYear()} NASH Barber. Website concept.</small>
      </footer>
    </main>
  );
}
