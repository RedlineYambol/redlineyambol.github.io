# Google SEO plan — Redline Performance Yambol

Goal: show up in the top 3 on Google Maps and on page 1 for searches like
**"чип тунинг Ямбол"**, **"DPF Ямбол"**, **"EGR Ямбол"**, **"AdBlue Ямбол"**, **"автосервиз Ямбол"**, **"компютърна диагностика Ямбол"**.

For a local garage, most new clients come from the **Google Maps listing** (the "map pack"), not the website itself.
The website's job is to back that listing up. So steps 3 and 4 matter most.

## Already done in the website

- Title and description written for the main searches (what Google shows in results).
- Business details for Google (name, address, map pin, phone, hours, services, social profiles) in a hidden structured-data block.
- Bulgarian text written into the HTML, so Google reads it without running scripts.
- `sitemap.xml`, `robots.txt`, favicon, share image for Facebook/Viber.
- Fast on phones; free HTTPS from GitHub Pages.

## 1. Go live (day 1)

The site runs free on GitHub Pages at **https://redlineyambol.github.io/** (HTTPS included).
Open it on the phone and check it loads.

## 2. Google Search Console (day 1, ~10 min)

1. Open **search.google.com/search-console** with the Gmail you'll keep for the business.
2. **Add property → URL prefix** → `https://redlineyambol.github.io/`
   (the "Domain" option needs your own domain, so use URL prefix).
3. Choose **HTML tag** → copy the `<meta name="google-site-verification" content="…">` line → send it to Claude
   (or paste it in `index.html` right under `<meta charset="utf-8">` on github.com). Wait ~1 min, click **Verify**.
4. **Sitemaps** → enter `sitemap.xml` → Submit.
5. **URL inspection** → paste the homepage URL → **Request indexing**.

Expect the site in Google within 3–14 days. Check **Performance** after 2–4 weeks to see which searches bring clicks.
Do the same in **Bing Webmaster Tools** (bing.com/webmasters) — it can import straight from Search Console in one click.

## 3. Google Business Profile — the most important step (day 1–3)

The listing already exists: **"RedLinePerformance Yambol"**, ул. Търговска 101, 1 review (4.0).

1. Search the name on Google Maps → **Own this business?** → claim it (or open it at **business.google.com** if the owner already manages it).
2. Fix the details:
   - **Name:** `Redline Performance Yambol` — exactly the real name. Don't add keywords like "Чип тунинг Ямбол" to the name; Google can suspend the listing for that.
   - **Primary category:** Auto repair shop (Автосервиз). **Extra categories:** Auto tune up service, Diesel engine repair service, Auto electrical service, Welder — pick the Bulgarian versions that come up.
   - **Website:** `https://redlineyambol.github.io/`. **Phone:** 087 621 2811.
   - **Hours:** right now Google shows Mon–Fri **9:30**–18:00, the site says **9:00**–18:00. Pick one and use it everywhere.
   - **Description** (750 characters): what they do, in plain Bulgarian, with "Ямбол", "чип тунинг", "DPF", "EGR", "AdBlue", "диагностика" naturally in it.
   - **Services:** add each one separately: Чип тунинг Stage 1 / 2 / 3, DPF, EGR, AdBlue, Pops & Bangs, Компютърна диагностика, Ремонт на двигатели, Ходова част, Спирачки, Заваряване.
3. **Photos:** 15+ real ones — the sign and gate (helps people find it inside the old ДАП yard), the shop, cars on the lift, laptop with tuning software, before/after logs. Add 2–3 new ones every week.
4. **Posts:** one short post a week (a finished car, an offer, a TikTok clip). Active profiles rank higher.

## 4. Reviews — the fastest ranking win

- Target: **20+ reviews in the first 2 months**, then a steady 2–4 per month.
- Get the short review link from Business Profile (**Ask for reviews**) and put it in `CFG.googleReviewUrl` in `index.html`.
- Print a **QR code** of that link at the counter; send it on Viber after every job: *"Мерси, че мина при нас! Ако си доволен, ще ни помогнеш много с един отзив: [линк]"*.
- Ask them to mention the car and the job ("Stage 1 на Golf 7", "DPF на камион") — those words help ranking.
- **Reply to every review**, good or bad, within a few days.

## 5. Same name, address and phone everywhere

Google cross-checks. Make these match the website exactly — **Redline Performance Yambol · ул. „Търговска“ 101, Ямбол · 087 621 2811**:

- **Facebook page:** address still says "Обходен път, Изток" → change it. Add the website link.
- **Instagram and TikTok bio:** add the website link.
- **Bing Places** (bingplaces.com) — import from Google in 2 clicks.
- **Apple Business Connect** — so iPhone Maps shows them too.
- Bulgarian listings and ads: e.g. Златни страници, alo.bg / bazar.bg service ads — always with the website link.

## 6. After the first month

- Search Console → **Performance**: see which searches show the site. If "DPF Ямбол" gets views but few clicks, sharpen that section.
- Business Profile → **Performance**: calls, direction requests, website clicks.
- A short own domain (e.g. `redlineyambol.com`, ~€10/year) looks better on a business card and in Google. Easy to add later — see README.
- Next growth step: separate pages per service (e.g. `/dpf-egr-adblue-yambol`, `/chip-tuning-yambol`) with real jobs and photos. Each page can rank on its own search.
- Nearby towns: when there are reviews from clients from Сливен, Елхово, Стралджа, mention those towns on the site.
