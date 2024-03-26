import CONFIG from "./module.mjs";

Hooks.on("renderJournalSheet", (app, html, data) => {
  const journal = app.document;
  if ( journal.getFlag(CONFIG.moduleId, CONFIG.journalFlag) ) html[0].classList.add(CONFIG.cssClass);
});

Hooks.on("renderJournalPageSheet", (app, html, data) => {
  const journal = app.document.parent;
  if ( journal.getFlag(CONFIG.moduleId, CONFIG.journalFlag) ) html[0].classList.add(CONFIG.cssClass);
});
