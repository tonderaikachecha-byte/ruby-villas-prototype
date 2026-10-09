# Ruby Villas | Concept Website Prototype

Premium mobile-responsive static prototype commissioned for creative demonstration under Rivonia.

## Pages
- `/` immersive homepage
- `/stay/` accommodation narrative
- `/experiences/` dining, boat cruise, quad biking and celebrations
- `/story/` founder narrative draft
- `/enquire/` client-side-only demo enquiry journey

## Running locally
```bash
python3 -m http.server 8000
```
Visit `http://localhost:8000`. No dependencies or build step are needed.

## IMPORTANT: concept imagery and accuracy
All six images under `assets/images/` were generated as **illustrative concepts** inspired by the client's original photographs and public website, not verified documentary photography of current facilities. The page carries a persistent concept notice. These images must never be used in real guest acquisition campaigns or on a live hotel booking site as if they are authentic photographs. Some scenes include suggested styling, landscaped elements, lanterns, passengers and other details that require verification.

Founder story is a draft to be reviewed by Enock. Stay capacity, rates, guest amenities, exclusive-use promises, exact activities, safety/availability and event services must be verified before live launch.

No live booking system is connected. Form data is neither stored nor transmitted, and the form clearly discloses that. The official external WhatsApp link originates from Ruby Villas' published site.

This prototype has `noindex,nofollow` and blocks robots via `robots.txt`.

## Deploying to GitHub + Vercel
1. Create a new GitHub repository, e.g. `ruby-villas-prototype`.
2. Upload the contents of this folder to its default `main` branch (not the folder itself).
3. In Vercel, import the GitHub repository and select `Other` framework (static site).
4. Leave build command and output directory blank.
5. Deploy and verify every route on mobile and desktop.

Internal prototype, not for public reservation operations.
