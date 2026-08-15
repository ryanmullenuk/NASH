import MotionSystem, { ParticleField } from "./MotionSystem";

const services = [
  { number: "01", title: "The Nash Cut", copy: "A considered consultation, precise cut and finished style. Classic or current, built around your hair." },
  { number: "02", title: "Skin Fade", copy: "A clean, controlled fade with careful graduation, sharp edges and a finish that holds its shape." },
  { number: "03", title: "Cut & Beard", copy: "Haircut and beard work shaped together for balance, proportion and a properly connected finish." },
  { number: "04", title: "Beard & Hot Towel", copy: "Line-up, shape and detail work, finished with the calm ritual of a hot towel." },
];

const reviews = [
  { name: "James", location: "Lymington", copy: "Exactly the cut I asked for. The fade was clean, the detail was sharp and nothing felt rushed." },
  { name: "Callum", location: "Lymington", copy: "A proper local barber experience. Friendly, precise and easily the best finish I have had in a long time." },
  { name: "Oliver", location: "Lymington", copy: "Really careful work on both the haircut and beard. Everything was balanced and finished properly." },
  { name: "Daniel", location: "Lymington", copy: "The consultation made the difference. The cut works with my hair and still looks sharp between visits." },
  { name: "Rhys", location: "Lymington", copy: "Relaxed atmosphere, excellent attention to detail and a consistently clean result." },
];

const googleReviewUrl = "https://www.google.com/maps/search/?api=1&query=NASH+Barber+Lymington+Hampshire";

export default function Home() {
  return (
    <main>
      <MotionSystem />
      <header className="nav" data-reveal data-delay="2">
        <a className="wordmark" href="#top" aria-label="Nash Barber home">
          <span className="wordmark-main">NASH</span>
          <span className="wordmark-sub">BARBER · LYMINGTON</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#heritage">Heritage</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="button button-small desktop-book" href="#book">Book a chair</a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#story">Our craft</a>
            <a href="#heritage">Heritage</a>
            <a href="#work">Our work</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <ParticleField className="hero-particles" />
        <div className="hero-copy">
          <p className="eyebrow" data-reveal data-delay="1">Kurdish craft · New Forest style</p>
          <h1 data-reveal-title>Cut with<br /><em>precision.</em></h1>
          <p className="hero-intro" data-reveal data-delay="2">
            Modern barbering shaped by Kurdish technique. Clean fades, considered scissor work and sharp beard lines, finished properly in the heart of Lymington.
          </p>
          <div className="hero-actions" data-reveal data-delay="3">
            <a className="button" href="#book">Book an appointment</a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Barber creating a precision haircut" data-reveal="image" data-delay="2">
          <div className="hero-frame" aria-hidden="true" />
          <div className="hero-stamp"><span>N</span><small>Lymington<br />Hampshire</small></div>
          <p className="vertical-note">CUT · CRAFT · CHARACTER</p>
        </div>
      </section>

      <section className="service-ticker" aria-label="Featured services">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-set" aria-hidden={copy === 1 ? "true" : undefined} key={copy}>
              <span>Skin fades</span><i>◆</i><span>Scissor cuts</span><i>◆</i><span>Beard craft</span><i>◆</i><span>Hot towel</span><i>◆</i>
            </div>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div data-reveal>
            <p className="eyebrow dark">Services</p>
            <h2 data-reveal-title>One chair.<br /><em>Every detail.</em></h2>
          </div>
          <p className="section-lead" data-reveal data-delay="2">No rushed finishes. Every service is approached with the same steady hand, close attention and respect for the craft.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.number} data-reveal data-delay={String(index + 1)}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#book" aria-label={`Enquire about ${service.title}`}>Enquire <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="content-note" data-reveal>Service list, prices and timings can be added once confirmed.</p>
      </section>

      <section className="story" id="story">
        <div className="story-image" role="img" aria-label="Barber working carefully with scissors" data-reveal="image">
          <span className="image-label">The hands behind the cut</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow" data-reveal>The Nash way</p>
          <h2 data-reveal-title>Kurdish roots.<br /><em>Modern edge.</em></h2>
          <p className="story-lead" data-reveal data-delay="1">Kurdish barbering is known for its control, precision and complete approach to grooming.</p>
          <p data-reveal data-delay="2">At NASH, that discipline meets modern British style. We take time to understand how your hair grows, how you wear it and how the cut needs to work between visits. The result is clean, balanced and unmistakably yours.</p>
          <div className="principles">
            <div data-reveal data-delay="1"><span>01</span><strong>Listen first</strong><small>A proper consultation before the first cut.</small></div>
            <div data-reveal data-delay="2"><span>02</span><strong>Work precisely</strong><small>Clean sections, controlled fades, sharp detail.</small></div>
            <div data-reveal data-delay="3"><span>03</span><strong>Finish fully</strong><small>No shortcuts and no unfinished edges.</small></div>
          </div>
        </div>
      </section>

      <section className="heritage section" id="heritage">
        <div className="heritage-heading">
          <div data-reveal>
            <p className="eyebrow dark">Kurdish barbering</p>
            <h2 data-reveal-title>A craft carried<br /><em>forward.</em></h2>
          </div>
          <div className="heritage-intro" data-reveal data-delay="2">
            <p>There is no single, separate written history of Kurdish barbering. Its roots sit within the wider grooming culture of the Middle East and the Ottoman world, where barbering developed as a skilled trade built on apprenticeship, steady technique and trust between barber and client.</p>
            <p>Rather than using the familiar “Turkish barber” label, NASH chooses to name its identity clearly: Kurdish craft, practised with pride in Lymington.</p>
          </div>
        </div>

        <div className="heritage-grid">
          <article data-reveal data-delay="1">
            <span>01</span>
            <h3>Master the craft</h3>
            <p>Trades across Ottoman cities were shaped by organised guild cultures and master-apprentice learning. Barbering demanded control of tools, close observation and years of practical development.</p>
          </article>
          <article data-reveal data-delay="2">
            <span>02</span>
            <h3>Serve the community</h3>
            <p>The barbershop became more than a place to cut hair. It was a familiar social space where conversation, loyalty and personal care mattered alongside shaving, beard work and finishing rituals.</p>
          </article>
          <article data-reveal data-delay="3">
            <span>03</span>
            <h3>Bring it forward</h3>
            <p>Today, Kurdish barbers are building a more visible identity in Britain, combining inherited regional discipline with modern fades, texture and contemporary men&apos;s style.</p>
          </article>
        </div>

        <div className="heritage-statement" data-reveal>
          <span aria-hidden="true">◆</span>
          <p>For NASH, tradition is not about copying the past. It means keeping the patience, precision and hospitality that made the craft worth passing on.</p>
        </div>

        <p className="history-sources" data-reveal>
          Background reading: <a href="https://akgroomingroom.co.uk/history/" target="_blank" rel="noreferrer">AK Grooming Room</a>, <a href="https://www.cambridge.org/core/journals/international-review-of-social-history/article/ottoman-guilds-in-the-early-modern-era/DBB9453C3BE34AEE2D4F8D3C9E390BAA" target="_blank" rel="noreferrer">Ottoman guild history</a> and <a href="https://modernbarber.co.uk/zanear-ali" target="_blank" rel="noreferrer">Modern Barber&apos;s Kurdish industry profile</a>.
        </p>
      </section>

      <section className="work section" id="work">
        <div className="section-heading work-heading">
          <div data-reveal>
            <p className="eyebrow">Selected work</p>
            <h2 data-reveal-title>Sharp from<br /><em>every angle.</em></h2>
          </div>
          <p className="section-lead" data-reveal data-delay="2">Fades, texture, beard work and classic cuts. The gallery is ready for NASH&apos;s own work when the photography is available.</p>
        </div>
        <div className="gallery">
          <div className="gallery-image gallery-one" role="img" aria-label="Barber detailing a modern haircut" data-reveal="image"><span>Precision</span></div>
          <div className="gallery-image gallery-two" role="img" aria-label="Close-up of a finished haircut" data-reveal="image" data-delay="1"><span>Shape</span></div>
          <div className="gallery-image gallery-three" role="img" aria-label="Barber tools ready for use" data-reveal="image" data-delay="2"><span>Detail</span></div>
        </div>
        <p className="photo-credit" data-reveal>Draft photography via Unsplash. Replace with original NASH work before final launch.</p>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-heading reviews-heading">
          <div data-reveal>
            <p className="eyebrow dark">Local reputation</p>
            <h2 data-reveal-title>Made sharp.<br /><em>Remembered.</em></h2>
          </div>
          <div className="reviews-intro" data-reveal data-delay="2">
            <p>The review layout is ready for verified comments from NASH customers.</p>
            <a className="button review-button" href={googleReviewUrl} target="_blank" rel="noreferrer">Leave a Google review <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="review-notice" data-reveal>
          <strong>Draft content</strong>
          <span>These five comments and names are sample layout copy, not genuine customer testimonials. Replace them with verified reviews before public launch.</span>
        </div>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={review.name} data-reveal data-delay={String((index % 4) + 1)}>
              <div className="stars" aria-label="Five stars">★★★★★</div>
              <blockquote>“{review.copy}”</blockquote>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.location} · Sample review</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="review-cta" data-reveal>
          <p>Already visited NASH?</p>
          <a className="text-link dark-link" href={googleReviewUrl} target="_blank" rel="noreferrer">Share your experience on Google <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-mark" aria-hidden="true" data-reveal="scale">
          <span className="motif">◆</span>
          <strong>N</strong>
          <small>BARBER</small>
        </div>
        <div className="visit-copy" data-reveal>
          <p className="eyebrow dark">Find us</p>
          <h2 data-reveal-title>Your local chair<br />in <em>Lymington.</em></h2>
          <p>NASH Barber is based in Lymington, Hampshire, serving the town and the wider New Forest community.</p>
          <a className="text-link dark-link" href="https://www.google.com/maps/search/?api=1&query=NASH+Barber+Lymington+Hampshire" target="_blank" rel="noreferrer">Open map search <span aria-hidden="true">↗</span></a>
        </div>
        <div className="details-card" data-reveal data-delay="2">
          <div><small>Address</small><strong>Lymington, Hampshire</strong><span>Full address to be added</span></div>
          <div><small>Opening hours</small><strong>Hours to be confirmed</strong><span>Add weekday and weekend hours</span></div>
          <div><small>Contact</small><strong>Phone & social details</strong><span>To be added before launch</span></div>
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking-pattern" aria-hidden="true" />
        <ParticleField className="booking-particles" />
        <p className="eyebrow" data-reveal>Your next cut</p>
        <h2 data-reveal-title>Ready to look<br /><em>properly sharp?</em></h2>
        <p data-reveal data-delay="1">Online booking, telephone and walk-in details can be connected here once the preferred booking route is confirmed.</p>
        <span className="button button-muted" aria-disabled="true" data-reveal data-delay="2">Booking link to be added</span>
      </section>

      <footer className="site-footer" data-reveal>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          <span className="wordmark-main">NASH</span>
          <span className="wordmark-sub">BARBER · LYMINGTON</span>
        </a>
        <p>Kurdish precision. Lymington character.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#heritage">Heritage</a><a href="#reviews">Reviews</a><a href={googleReviewUrl} target="_blank" rel="noreferrer">Google review</a></div>
        <small>© {new Date().getFullYear()} NASH Barber. Website concept.</small>
      </footer>
    </main>
  );
}
