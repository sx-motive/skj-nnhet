import instagram from '/icons/logo-instagram.svg';
import facebook from '/icons/logo-facebook.svg';

const page = `
<section class="welcome" data-scroll-section>
<div class="container">
  <div class="caption">
    <h1 data-title data-intro data-scroll-repeat data-intro-element>
      Treat your skin every season
    </h1>
    <button>shop now</button>
  </div>
</div>
<div class="wrap-img">
  <img
    src="/content/10.webp"
    alt="skincare"
    data-scroll
    data-img-welcome
  />
</div>
</section>

<section
class="about"
data-scroll-section
data-scroll
data-scroll-id="postwelcome"
>
<div class="container">
  <div class="col">
    <img
      class="img-1"
      src="/content/12.webp"
      alt="skincare"
      data-scroll
      data-scroll-speed="1"
    />
    <img
      class="img-2"
      src="/content/11.webp"
      alt="skincare"
      data-scroll
      data-scroll-speed="-2"
    />
  </div>
  <div class="col">
    <div class="caption">
      <p
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        Responsibility
      </p>
      <h2
        data-scroll
        data-scroll-call="caption"
        data-title
        data-scroll-repeat
      >
        With a better future in mind
      </h2>
      <p
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        We are constantly striving to keep our environmental footprint
        as small as possible. Our entire product packaging is
        recyclable. We use glass produced in Europe, FSC-certified
        recycled paper and focus on a regional value chain.
      </p>
    </div>
  </div>
  <div class="col">
    <img
      class="img-3"
      src="/content/6.webp"
      alt="skincare"
      data-scroll
      data-scroll-speed="2"
    />
    <img
      class="img-4"
      src="/content/7.webp"
      alt="skincare"
      data-scroll
      data-scroll-speed="0"
    />
  </div>
</div>
</section>

<section class="video-present" data-scroll-section>
  <img src="/content/14.webp" />
</section>

<section class="highlight" data-scroll-section>
<div class="container">
  <h3
    data-scroll
    data-scroll-call="caption"
    data-title
    data-scroll-repeat
  >
    Your skin reacts differently according to every season, in the
    months of September, October, and November your skin tends to start
    drying a bit easier, so we offer a selection of essential skincare
    products for your morning and night routines to keep your skin
    perfect.
  </h3>
</div>
</section>

<section class="gallery" data-scroll-section >
<div class="container" data-scroll data-scroll-id="gallery">
  <div class="col">
    <img
      src="/content/3.webp"
      data-scroll
      data-image-left
      data-scroll-repeat
    />
  </div>
  <div class="col">
    <div class="text-wrap">
      <h4
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        We are climate partner carbon neutral
      </h4>
      <p
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        We are certified as climate neutral by Climate Partner. We
        offset unavoidable carbon emissions through various climate
        protection projects that meet the highest international
        standards and make an important contribution to the UN
        Sustainable Development Goals (SDGs)
      </p>
    </div>
  </div>
</div>
<div class="container">
  <div class="col">
    <div class="text-wrap">
      <h4
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        Plastic Bank Plastic neutral
      </h4>
      <p
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        We are certified plastic neutral by Plastic Bank. In general, we
        try to avoid the use of plastic and reduce it to an absolute
        minimum. What cannot be avoided, we compensate for. For every
        gram of plastic we put on the market, one gram of plastic is
        collected from nature and the oceans and recycled.
      </p>
    </div>
  </div>
  <div class="col">
    <img
    class="right-one"
      src="/content/4.webp"
      data-scroll
      data-image-left
      data-scroll-repeat
    />
  </div>
</div>
<div class="container">
  <div class="col">
    <img
    
      src="/content/5.webp"
      data-scroll
      data-image-left
      data-scroll-repeat
    />
  </div>
  <div class="col">
    <div class="text-wrap">
      <h4
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        Making business a force for good
      </h4>
      <p
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
      >
        B Corp is an international certification that recognizes
        companies for their social and environmental impact. As a
        “Benefit Corporation,” we are committed to operating not only
        for profit, but also for the benefit of the planet and the
        community.
      </p>
    </div>
  </div>
</div>
</section>

<section class="essentials" data-scroll-section data-follow-wrap>
<div class="container">
  <p
    data-scroll
    data-scroll-call="caption"
    data-text
    data-scroll-repeat
  >
    essentials
  </p>
  <ul class="essentials-list">
    <li data-link="1">
      <a
        href="/shop"
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
        data-caption="Facial Moisturizer"
        >Facial Moisturizer</a
      >
    </li>
    <li data-link="2">
      <a
        href="/shop"
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
        data-caption="Hydrating Mask"
        >Hydrating Mask</a
      >
    </li>
    <li data-link="3">
      <a
        href="/shop"
        data-scroll
        data-scroll-call="caption"
        data-text
        data-scroll-repeat
        data-caption="Exfoliant Paste"
        >Exfoliant Paste</a
      >
    </li>
  </ul>
  <button>Shop all</button>
</div>
<div class="image-wrap" data-follow-img>
  <img
    src="/products/product-1.webp"
    alt="essential product"
    data-img="1"
  />
  <img
    src="/products/product-2.webp"
    alt="essential product"
    data-img="2"
  />
  <img
    src="/products/product-3.webp"
    alt="essential product"
    data-img="3"
  />
</div>
</section>

<section class="news" data-scroll-section data-prefooter>
<div class="container">
  <div class="news-wrap">
    <div class="news-col">
      <div class="img-wrap">
        <img src="/content/1.webp" alt="news" />
      </div>
      <h5 data-text>The ultimate peeling guide</h5>
      <p data-text>
        Our uppermost skin layer has a cycle of 28 days. That means it
        renews itself approximately every...
      </p>
    </div>
    <div class="news-col">
      <div class="img-wrap">
        <img src="/content/14.webp" alt="news" />
      </div>
      <h5 data-text>Our signature treatments as in-home facials</h5>
      <p data-text>
        Who says you need a special occasion for a facial treatment? We
        show you how to recreate our signature treatments in the comfort
        of your home...
      </p>
    </div>
    <div class="news-col">
      <div class="img-wrap">
        <img src="/content/17.webp" alt="news" />
      </div>
      <h5 data-text>Natural sun care for healthy skin</h5>
      <p data-text>
        Our body needs the sun’s high-energy UV light to produce healthy
        vitamin D. Find out how you can...
      </p>
    </div>
    <div class="news-col">
      <div class="img-wrap">
        <img src="/content/15.webp" alt="news" />
      </div>
      <h5 data-text>Myth: Night care</h5>
      <p data-text>
        Many myths surround the time of darkness between evening and
        morning. And so it is also the case in skincare.
      </p>
    </div>
  </div>
</div>
</section>
`;

const header = `
<header class="header">
  <a class="logo" href="/" data-text data-intro data-intro-element>Skjønnhet</a>
  <span class="menu-btn" id="menu-btn" data-text data-intro data-intro-element>menu</span>
</header>
`;

const footer = `
<footer
class="footer"
data-scroll-section
data-scroll
data-scroll-id="footer"
>
<div class="container" data-scroll data-scroll-speed="-6">
  <div class="footer-box">
    <a
      class="logo"
      href="/"
      data-text
      data-scroll
      data-scroll-repeat
      data-scroll-call="caption"
      >Skjønnhet</a
    >
  </div>
  <div class="footer-box">
    <ul class="footer-nav">
      <li>
        <a
          data-text
          data-scroll
          data-scroll-call="caption"
          data-scroll-repeat
          href="/"
          >Shop</a
        >
      </li>
      <li>
        <a
          data-text
          data-scroll
          data-scroll-call="caption"
          data-scroll-repeat
          href="/"
          >Lookbook</a
        >
      </li>
      <li>
        <a
          data-text
          data-scroll
          data-scroll-call="caption"
          data-scroll-repeat
          href="/"
          >About</a
        >
      </li>
      <li>
        <a
          data-text
          data-scroll
          data-scroll-call="caption"
          data-scroll-repeat
          href="/"
          >Legal</a
        >
      </li>
      <li>
        <a data-text data-scroll data-scroll-call="caption" href="/"
          >Contact</a
        >
      </li>
    </ul>
  </div>
  <div class="footer-box">
    <p
      data-text
      data-scroll
      data-scroll-call="caption"
      data-scroll-repeat
      class="subscribe"
    >
      Subscribe for news
    </p>
    <input type="text" placeholder="enter email" />
  </div>
  <div class="footer-box">
    <p
      data-text
      data-scroll
      data-scroll-call="caption"
      class="credits"
      data-scroll-repeat
    >
      Data protection. All media rights belong to third parties and are used on this site for educational purposes only. If you encounter copyright infringement, please report it to sx.motive@gmail.com. Media copyright https://www.teamdrjoseph.com/ https://www.teamdrjoseph.com/ VITALIS Dr. Joseph GmbH
    </p>
  </div>
  <div class="footer-box">
    <iframe
      src="https://iframe-motive.netlify.app"
      width="300"
      height="35"
      style="border: none"
    ></iframe>
  </div>
</div>
</footer>
`;

const menu = `
    <nav class="menu" id="menu">
      <ul class="primary-nav" id="primary-nav">
        <li><a data-intro data-caption data-text="Shop" href="/">Shop</a></li>
        <li><a data-intro data-caption data-text="Lookbook" href="/">Lookbook</a></li>
        <li><a data-intro data-caption data-text="About" href="/">About</a></li>
      </ul> 
      <div class="menu-footer">
        <img src="${instagram}" alt="instagram" />
        <img src="${facebook}" alt="facebook" />
      </div>
    </nav>
`;

export { page, footer, header, menu };
