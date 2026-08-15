import MotionSystem, { ParticleField } from "./MotionSystem";
import EnquiryForm from "./EnquiryForm";

const services = [
  { number: "01", icon: "scissors", iconLabel: "Scissors", title: "The Nash Cut", copy: "A considered consultation, precise cut and finished style. Classic or current, built around your hair." },
  { number: "02", icon: "clippers", iconLabel: "Clippers", title: "Skin Fade", copy: "A clean, controlled fade with careful graduation, sharp edges and a finish that holds its shape." },
  { number: "03", icon: "beard", iconLabel: "Clippers shaping a beard", title: "Cut & Beard", copy: "Haircut and beard work shaped together for balance, proportion and a properly connected finish." },
  { number: "04", icon: "hot-towel", iconLabel: "Cutthroat razor and hot towel", title: "Beard & Hot Towel", copy: "Line-up, shape and detail work, finished with the calm ritual of a hot towel." },
];

const priceGroups = [
  { title: "Haircut & Styling", items: [["Gents Haircut", "£15"], ["Skin Fade", "£16–£18"], ["Clipper Cut All Over", "£12"], ["Kid's Haircut (Under 10)", "£12"], ["OAP's Haircut", "£12"], ["Hair Wash & Dry", "£5"]] },
  { title: "Shaving & Beard Care", items: [["Hot Towel Wet Shave", "£16–£18"], ["Beard Trim & Razor Line-Up", "£16–£18"], ["Haircut & Shave Combo", "£30"]] },
  { title: "Additional Grooming", items: [["Cotton Threading (Eyebrows/Face)", "£7"], ["Nose Wax", "£4"], ["Full Service Package", "£40"]], note: "Haircut, shave, hot towel, nose wax and massage." },
];

const reviews = [
  { name: "Ryan Cameron", copy: "Welcoming and professional on every visit, with a consistently clean shop and a strong result." },
  { name: "Noel Elikem Nicodemus", copy: "Listens properly, takes his time and gets the cut right every time." },
  { name: "Graham M", copy: "Careful service for both father and son, taking time to understand the style requested." },
  { name: "Maciej Kasprzak", copy: "Consistent attention to detail, with a polite and friendly welcome." },
  { name: "Sean Douglas", copy: "A friendly welcome with a brilliant cut and shave." },
];

const address = "3 Queen Street, Lymington SO41 9NH";
const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=NASH+Barber+3+Queen+Street+Lymington+SO41+9NH";
const googleProfileUrl = "https://www.google.com/maps?cid=5288438106884590690";
const googleReviewUrl = googleProfileUrl;

const openingHours = [
  ["Monday", "9am–6pm"],
  ["Tuesday", "9am–6pm"],
  ["Wednesday", "9am–6pm"],
  ["Thursday", "9am–6pm"],
  ["Friday", "9am–6pm"],
  ["Saturday", "8am–6pm"],
  ["Sunday", "10am–4pm"],
];

function RazorN({ className = "" }: { className?: string }) {
  return <span className={`razor-n ${className}`} aria-hidden="true"><b>N</b><i /></span>;
}

export default function Home() {
  return (
    <main>
      <MotionSystem />
      <header className="nav" data-reveal data-delay="2">
        <a className="wordmark" href="#top" aria-label="Nash Barber home">
          <RazorN className="brand-n" />
          <span className="wordmark-copy"><span className="wordmark-main">NASH</span><span className="wordmark-sub">BARBER · LYMINGTON</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#prices">Prices</a>
          <a href="#heritage">Heritage</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="button button-small desktop-book" href="#book">Book a chair</a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#prices">Prices</a>
            <a href="#story">Our craft</a>
            <a href="#heritage">Heritage</a>
            <a href="#work">Our work</a>
            <a href="#reviews">Reviews</a>
            <a href="#enquiry">Contact</a>
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
            <a className="text-link" href="#services">Explore services</a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="The interior of NASH Barber in Lymington" data-reveal="image" data-delay="2">
          <div className="hero-frame" aria-hidden="true" />
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
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className={`service-icon icon-${service.icon}`} role="img" aria-label={service.iconLabel}>
                  {service.icon === "scissors" && <span aria-hidden="true">✂</span>}
                  {service.icon === "clippers" && <i aria-hidden="true" />}
                  {service.icon === "beard" && <span className="beard-icon" aria-hidden="true"><i /><b /></span>}
                  {service.icon === "hot-towel" && <img src="/icons/hot-towel.png" alt="" />}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#enquiry" aria-label={`Enquire about ${service.title}`}>Enquire</a>
            </article>
          ))}
        </div>
        <p className="content-note" data-reveal>Walk-ins welcome. Prices shown below.</p>
      </section>

      <section className="prices section" id="prices">
        <div className="section-heading price-heading">
          <div data-reveal><p className="eyebrow">Price list</p><h2 data-reveal-title>Clear prices.<br /><em>Proper service.</em></h2></div>
          <p className="section-lead" data-reveal data-delay="2">Straightforward grooming with every detail finished properly.</p>
        </div>
        <div className="price-groups">
          {priceGroups.map((group, index) => <article key={group.title} data-reveal data-delay={String(index + 1)}><h3>{group.title}</h3><dl>{group.items.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>{group.note && <p>{group.note}</p>}</article>)}
        </div>
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
            <p>Kurdish barbering belongs to the wider grooming culture of the Middle East and the former Ottoman world. Across Kurdish communities in the regions now within Turkey, Iraq, Iran and Syria, the craft was passed from experienced barbers to apprentices through close observation, repetition and practical discipline.</p>
            <p>Many Kurdish barbers in Britain are described commercially as “Turkish barbers”. NASH chooses to name its identity more clearly: Kurdish craft, practised with pride in Lymington.</p>
          </div>
        </div>

        <div className="heritage-grid">
          <article data-reveal data-delay="1">
            <span>01</span>
            <h3>Learn from a master</h3>
            <p>Barbering was learned through apprenticeship. Young barbers watched, prepared tools, practised technique and developed the steady hand needed for close work.</p>
          </article>
          <article data-reveal data-delay="2">
            <span>02</span>
            <h3>Respect the ritual</h3>
            <p>Hot towels, razor shaving, beard shaping and careful finishing turned grooming into a complete service rather than a rushed haircut.</p>
          </article>
          <article data-reveal data-delay="3">
            <span>03</span>
            <h3>Serve the community</h3>
            <p>The barbershop was a neighbourhood meeting place. Conversation, hospitality and trust mattered alongside the quality of the cut.</p>
          </article>
        </div>

        <div className="heritage-detail-grid">
          <article data-reveal data-delay="1">
            <p className="eyebrow dark">The modern chair</p>
            <h3>Heritage meets the modern chair.</h3>
            <p>Kurdish barbering continues to develop in Britain, where traditional razor work and hospitality sit naturally beside skin fades, textured crops and current men&apos;s styling.</p>
          </article>
          <article data-reveal data-delay="2">
            <p className="eyebrow dark">Named with pride</p>
            <h3>Kurdish craft, clearly stated.</h3>
            <p>“Turkish barber” has become a familiar umbrella term in Britain, including for shops run by Kurdish, Iraqi and Syrian barbers. NASH respects the shared regional tradition while giving its own Kurdish identity proper visibility.</p>
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
          <p className="section-lead" data-reveal data-delay="2">Real NASH customers, real shop work. Clean fades, natural texture and considered details, shown in the chair where they were created.</p>
        </div>
        <div className="gallery">
          <div className="gallery-image gallery-one" role="img" aria-label="NASH customer with a clean graduated fade" data-reveal="image"><span>Precision fade</span></div>
          <div className="gallery-image gallery-two" role="img" aria-label="NASH customer with bleached textured hair and a clean fade" data-reveal="image" data-delay="1"><span>Texture</span></div>
          <div className="gallery-image gallery-three" role="img" aria-label="Young NASH customer with a shaved line design" data-reveal="image" data-delay="2"><span>Detail work</span></div>
        </div>
        <div className="hot-towel-feature" role="img" aria-label="A customer receiving a hot towel treatment at NASH Barber" data-reveal="image">
          <div><p className="eyebrow">The finishing ritual</p><strong>Hot towel.<br />Time to reset.</strong></div>
          <span>Calm · Care · Craft</span>
        </div>
        <p className="photo-credit" data-reveal>Original NASH shop and customer photography, professionally reframed and enhanced.</p>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-heading reviews-heading">
          <div data-reveal>
            <p className="eyebrow dark">Local reputation</p>
            <h2 data-reveal-title>Made sharp.<br /><em>Remembered.</em></h2>
          </div>
          <div className="reviews-intro" data-reveal data-delay="2">
            <p>Customer experiences from the NASH Google profile.</p>
            <a className="button review-button" href={googleReviewUrl} target="_blank" rel="noreferrer">Read or leave a Google review</a>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={review.name} data-reveal data-delay={String((index % 4) + 1)}>
              <div className="stars" aria-label="Five stars">★★★★★</div>
              <blockquote>“{review.copy}”</blockquote>
              <footer>
                <strong>{review.name}</strong>
                <span>Google review · Paraphrased for length</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="review-cta" data-reveal>
          <p>Already visited NASH?</p>
          <a className="text-link dark-link" href={googleReviewUrl} target="_blank" rel="noreferrer">Share your experience on Google</a>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-mark" aria-hidden="true" data-reveal="scale">
          <RazorN className="findus-n" />
          <small>NASH BARBER</small>
        </div>
        <div className="visit-copy" data-reveal>
          <p className="eyebrow dark">Find us</p>
          <h2 data-reveal-title>Your local chair<br />in <em>Lymington.</em></h2>
          <p>NASH Barber is at {address}, serving Lymington and the wider New Forest community.</p>
          <a className="text-link dark-link" href={googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
        <div className="details-card" data-reveal data-delay="2">
          <div><small>Address</small><strong>3 Queen Street</strong><span>Lymington SO41 9NH</span></div>
          <div className="hours-block">
            <small>Opening hours</small>
            <dl>{openingHours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl>
          </div>
          <div><small>WhatsApp</small><strong>07766 578745</strong><a href="https://wa.me/447766578745" target="_blank" rel="noreferrer">Open WhatsApp</a></div>
        </div>
      </section>

      <section className="map-section" aria-label="Map showing NASH Barber in Lymington" data-reveal>
        <iframe
          title="NASH Barber at 3 Queen Street, Lymington"
          src="https://www.google.com/maps?q=3+Queen+Street,+Lymington+SO41+9NH&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-card">
          <span className="barber-pole" aria-hidden="true" />
          <div><small>NASH BARBER</small><strong>3 Queen Street<br />Lymington SO41 9NH</strong></div>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">Directions</a>
        </div>
      </section>

      <section className="enquiry section" id="enquiry">
        <div className="enquiry-copy" data-reveal>
          <p className="eyebrow">Contact NASH</p>
          <h2 data-reveal-title>Ask about<br /><em>your next cut.</em></h2>
          <p>Send your preferred service and timing directly to NASH using WhatsApp.</p>
          <div className="contact-lines"><span>Visit</span><strong>3 Queen Street, Lymington SO41 9NH</strong><span>WhatsApp</span><a href="https://wa.me/447766578745" target="_blank" rel="noreferrer">07766 578745</a><span>Google</span><a href={googleProfileUrl} target="_blank" rel="noreferrer">NASH Barber business profile</a></div>
        </div>
        <EnquiryForm />
      </section>

      <section className="booking" id="book">
        <div className="booking-pattern" aria-hidden="true" />
        <ParticleField className="booking-particles" />
        <p className="eyebrow" data-reveal>Your next cut</p>
        <h2 data-reveal-title>Ready to look<br /><em>properly sharp?</em></h2>
        <p data-reveal data-delay="1">Walk in at 3 Queen Street or send your enquiry directly to NASH on WhatsApp.</p>
        <a className="button" href="#enquiry" data-reveal data-delay="2">Make an enquiry</a>
      </section>

      <footer className="site-footer" data-reveal>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          <RazorN className="brand-n" />
          <span className="wordmark-copy"><span className="wordmark-main">NASH</span><span className="wordmark-sub">BARBER · LYMINGTON</span></span>
        </a>
        <p>Kurdish precision. Lymington character.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#heritage">Heritage</a><a href="#reviews">Reviews</a><a href="#enquiry">Contact</a><a href={googleReviewUrl} target="_blank" rel="noreferrer">Google review</a></div>
        <small>© {new Date().getFullYear()} NASH Barber · 3 Queen Street, Lymington SO41 9NH · Website made by <a href="https://beeseen.uk" target="_blank" rel="noreferrer">BEESEEN.uk</a></small>
      </footer>
    </main>
  );
}
