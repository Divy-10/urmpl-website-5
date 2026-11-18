# URMPL-5 — Clean Corporate Website (Presentation Demo)

React + Vite website for **United Raw Material Pte. Ltd. (URMPL)**. It follows the supplied reference: a black utility bar, a white navigation bar, a photo hero, three service cards, a six-item reasons grid and a circular "experience" graphic.

> This is a presentation demo, not a production deployment. Pages are set to `noindex`, forms send nothing, and the site is not deployed anywhere.

## Run

```bash
npm install
npm run dev          # http://localhost:5175
npm run build        # production build → dist/
npm run preview      # serve dist/ at http://localhost:4175
npm run check-images # confirm every Unsplash photo URL responds (needs internet)
```

## Pages (13 routes)

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/products` | Products |
| `/products/textile-yarns` | Textile Yarns |
| `/products/petrochemicals` | Petrochemicals |
| `/industries` | Industries |
| `/how-we-work` | How We Work |
| `/insights` | Insights |
| `/contact` | Contact Us |
| `/enquiry` (`?type=callback`) | Request an Enquiry / Callback |
| `/privacy-policy` | Privacy Policy (placeholder) |
| `/terms` | Terms & Conditions (placeholder) |
| `*` | 404 |

## Structure

```
src/
  data/        company.js (verified facts + nav), content.js (copy), images.js (photo sources)
  components/  Header, Footer, Logo, PageHero, SectionHeading, ServiceCards, NumberedGrid,
               ExperienceGraphic, CtaBand, DemoForm, SmartImage, Reveal, ProductDetail, LegalPage, Icon
  pages/       one file per route (+ shared pages.css)
  styles/      global.css (design tokens, buttons, animations)
```

## Content rules

The site shows only verified company information: name, established 2006, UEN 200607763E, phone +65 6323 1721, address 33 Ubi Avenue 3, #05-32 Vertex, Singapore 408868, and the business areas. It has no email address, social links, clients, testimonials, certifications or statistics. Add any of these to `src/data/company.js` only after they are verified.

## Logo

No official URMPL logo file was available, so the header and footer show the company name as plain text. To use the official logo, put it at `public/brand/urmpl-logo.png` (or .svg) and set `BRAND.logoSrc` in `src/data/company.js`.

## Photography

The photos come from **Unsplash** under the free Unsplash License (https://unsplash.com/license). Before use, each one was checked on its Unsplash page as "Free to use", not Unsplash+. `src/data/images.js` lists each photo's source page and photographer. The photos load from the Unsplash CDN, so the site needs internet access. When offline, `SmartImage` shows a neutral panel in place of a broken image. None of the images are AI-generated, and they are illustrative only: they do not show URMPL's premises or staff.

## Forms

Contact, enquiry and callback forms check the fields but do **not** send, store or email anything. After a valid submit they say *"Not sent — demo only"* and give the company phone number. The site never shows a fake success message.
