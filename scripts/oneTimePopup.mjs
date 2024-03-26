function registerSettings() {
  game.settings.register("world", "battlezooDragonsAnnouncement", {
    name: "Kickstarter Announcement",
    scope: "world",
    config: false,
    type: Boolean,
    default: true
  })
};

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once('ready', async function() {
  if (game.user.isGM) {
    if (game.settings.get("world", "battlezooDragonsAnnouncement")) {
      if (game.system.id == "pf2e") {
        const journal = await fromUuid("Compendium.battlezoo-ancestries-fusions.journals-pf2e.JournalEntry.MQugSJwlfTwvusjh")
        journal.sheet.render(true)
      } else {
        const journal = await fromUuid("Compendium.battlezoo-ancestries-fusions.journals-dnd5e.JournalEntry.SxmXPxQ79eQHPt8t")
        journal.sheet.render(true)
      } 
      await game.settings.set("world", "battlezooDragonsAnnouncement", false)
    }
  }
})