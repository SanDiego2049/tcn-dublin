// ---------------------------------------------------------------
// CONFIG — single source of truth for editable values.
// Update a link/detail here once; every element that uses it
// (nav, hero, footer, etc.) updates automatically.
// ---------------------------------------------------------------
const CONFIG = {
  instagramUrl: "https://instagram.com/tcndublin",
  googleFormUrl: "https://forms.gle/dZXHLzFQzVsiQcaDA",
};

// ---------------------------------------------------------------
// SCHEDULE — one place to add/remove/edit weekly schedule cards.
// The grid below renders straight from this list instead of
// repeating near-identical markup in the HTML.
// ---------------------------------------------------------------
// const SCHEDULE = [
//   {
//     day: "Wed",
//     time: "06:45pm",
//     title: "Mid-week Service",
//     blurb: "Diving deeper into the word of God with Pastor 'Poju Oyemade.",
//   },
//   {
//     day: "Thur",
//     time: "08:15pm",
//     title: "Thursday Family Prayers",
//     blurb: "A time to intercede for our family and friends.",
//   },
//   {
//     day: "Sat",
//     time: "06:00am",
//     title: "Early Morning Prayers",
//     blurb: "We meet virtually to worship and pray to our Shepherd.",
//   },
//   {
//     day: "Sun",
//     time: "10:00am",
//     title: "Sunday Service",
//     blurb: "Come enjoy the Lord's presence and let's worship HIM together.",
//   },
// ];

function applyConfigLinks() {
  // querySelectorAll grabs every matching element, so adding a new
  // .js-cta-link button anywhere in the HTML (e.g. the new "Plan a
  // Visit" button) is automatically wired up — no JS changes needed.
  document.querySelectorAll(".js-instagram-link").forEach((el) => {
    el.href = CONFIG.instagramUrl;
  });
  document.querySelectorAll(".js-cta-link").forEach((el) => {
    el.href = CONFIG.googleFormUrl;
  });
}

// function renderSchedule() {
//   const grid = document.querySelector(".js-schedule-grid");
//   if (!grid) return;

//   grid.innerHTML = SCHEDULE.map(
//     (item) => `
//     <div class="schedule-card">
//       <div class="schedule-day">
//         <span class="badge">${item.day}</span>
//         <span class="time"><i data-lucide="clock"></i> ${item.time}</span>
//       </div>
//       <h3>${item.title}</h3>
//       <p>${item.blurb}</p>
//     </div>
//   `,
//   ).join("");
// }

document.addEventListener("DOMContentLoaded", () => {
  applyConfigLinks();
  renderSchedule();
  lucide.createIcons();
});
