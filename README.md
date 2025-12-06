<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Smartfx Option Trade — Clone (single-file)</title>
  <style>
    /* Simple single-file styling to mimic original layout */
    :root{--accent:#0a74ff;--muted:#666}
    body{font-family:Inter, system-ui, -apple-system, Arial, sans-serif; margin:0; color:#111}
    header{background:#f8fafc;border-bottom:1px solid #e6eef8;padding:18px 24px;display:flex;align-items:center;justify-content:space-between}
    .brand{font-weight:700;color:var(--accent)}
    nav a{margin-left:14px;text-decoration:none;color:var(--muted)}
    .hero{padding:48px 24px;text-align:left}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:22px}
    .card{background:#fff;border:1px solid #eef3fb;border-radius:10px;padding:18px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
    h1{margin:0 0 12px;font-size:28px}
    h3{margin:8px 0;font-size:18px}
    .cta{display:inline-block;background:var(--accent);color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none}
    .testimonials{background:#f3f7fb;padding:28px 24px}
    footer{padding:20px 24px;background:#0f1724;color:#cbd5e1;margin-top:18px}
    .footer-links a{color:inherit;text-decoration:none;margin-right:12px}
    .small{font-size:13px;color:var(--muted)}
    @media(min-width:900px){.hero{padding:70px 60px}}
  </style>
</head>
<body>
  <header>
    <div class="brand">Smartfx Option Trade</div>
    <nav>
      <a href="#open">Open account</a>
      <a href="#login">Login account</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Trade Stocks, Forex, Options and Crypto</h1>
      <p class="small">Join millions who have already discovered smarter investing in multiple types of assets. Choose an investment product to start with.</p>
      <p style="margin-top:16px"><a class="cta" href="#">Trade Now</a> <a style="margin-left:12px;text-decoration:none;color:var(--accent)" href="#">Practice Account</a></p>

      <div class="grid" style="margin-top:28px">
        <div class="card">
          <h3>Stocks &amp; ETFs</h3>
          <p class="small">20% commission means there’ll be markup on stocks &amp; ETFs – no matter how much you invest</p>
          <p style="margin-top:12px"><a href="#">Invest in Stocks</a></p>
        </div>
        <div class="card">
          <h3>Crypto</h3>
          <p class="small">Buy, sell and store Bitcoin and other leading cryptos with ease</p>
          <p style="margin-top:12px"><a href="#">Buy Crypto</a></p>
        </div>
        <div class="card">
          <h3>CFD Trading</h3>
          <p class="small">Go long or short on FX from just 1 pip. Trade commodities and indices with flexible leverage.</p>
          <p style="margin-top:12px"><a href="#">Trade Now</a></p>
        </div>
      </div>
    </section>

    <section style="padding:18px 24px">
      <h2>New to Trading?</h2>
      <p class="small">Discover AM Trading™: Get help from our carefully picked experts to help you manage your trading account till you become a good trader.</p>
      <p style="margin-top:12px"><a class="cta" href="#">AM Trading™</a></p>
    </section>

    <section style="padding:18px 24px">
      <h2>The global leader of profitable trading</h2>
      <p class="small">Discover why millions of users from over 140 countries choose to trade with Smartfx Option Trade</p>
      <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
        <div class="card" style="min-width:220px;flex:1">Regulated<br><span class="small">Our company is regulated by the FCA and CySec</span></div>
        <div class="card" style="min-width:220px;flex:1">Swift &amp; Reliable<br><span class="small">Our API and trading equipment are fast, reliable and easy to use across multiple platforms</span></div>
        <div class="card" style="min-width:220px;flex:1">Privacy<br><span class="small">We will never share your private data without your permission</span></div>
      </div>
    </section>

    <section class="testimonials">
      <h2>Meet Our Clients</h2>
      <p class="small">We are only as GOOD as our clients say WE ARE.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:12px">
        <div class="card">"Great platform for starting traders. Great selection and transparent fee system!"<br><strong>- Bryce C. Bailey</strong></div>
        <div class="card">"Easy, Fast And reliable. I got my profits immediately after trading."<br><strong>- David R. McNulty</strong></div>
        <div class="card">"Smartfx Option Trade has been making my trading experience enjoyable and secure.."<br><strong>- Shon L. Sexton</strong></div>
      </div>
    </section>

    <section style="padding:18px 24px">
      <h2>Having difficulty?</h2>
      <p class="small">Our award winning support team is on ground to help you out within few minutes. We can be reached through the following medium.</p>
      <ul class="small">
        <li>24/7 Live Chat — Click the chat button to start a conversation</li>
        <li>Support Email: support@smartfxoptiontrade.com</li>
      </ul>
    </section>
  </main>

  <footer>
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center">
      <div>
        <div>© 2022 Smartfx Option Trade - ALL RIGHTS RESERVED.</div>
        <div class="small">Smartfx Option Trade Ltd, 8 Copthall, Roseau Valley 00152, The Commonwealth of Dominica.</div>
      </div>
      <div class="footer-links small">
        <a href="#about">About Us</a>
        <a href="#aml">AML Policy</a>
        <a href="#cookie">Cookie Policy</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms &amp; Conditions</a>
      </div>
    </div>
  </footer>
</body>
</html>