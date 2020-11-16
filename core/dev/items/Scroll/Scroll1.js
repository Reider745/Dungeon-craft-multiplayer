IDRegistry.genItemID("Scroll1"); 
Item.createItem("Scroll1", "Scroll of the day", {name: "Scroll", meta: 1}, {stack: 1});

Translation.addTranslation("Scroll of the day", {ru: "свиток дня"});

Item.registerUseFunction("Scroll1", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWorldTime(1000);
ManaCore.set(player, mana);
}
}
);













