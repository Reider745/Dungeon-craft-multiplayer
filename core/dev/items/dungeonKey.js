IDRegistry.genItemID("keyDungeon"); 
Item.createItem("keyDungeon", "key Dungeon", {name: "keyDungeon", meta: 0}, {stack: 1});

Translation.addTranslation("key Dungeon", {ru: "золотой ключ"});

Item.setGlint(ItemID.keyDungeon, true);

Item.registerUseFunction("keyDungeon", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey){
if (b.getBlock(coords.x, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x-1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x+1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y-1, coords.z).id == BlockID.brick3){


b.setBlock(coords.x, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x, coords.y, coords.z, 0, 0);
b.setBlock(coords.x, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x-1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x+1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y-1, coords.z, 0, 0);
Entity.setCarriedItem(player, 0, 0, 0);

}
}
}

}
}
}

} 
} 

} 
});


IDRegistry.genItemID("keyDungeon2"); 
Item.createItem("keyDungeon2", "update key", {name: "key", meta: 2}, {stack: 1});

Translation.addTranslation("update key", {ru: "огненный ключ"});

Item.setGlint(ItemID.keyDungeon2, true);

Item.addCreativeGroup("keyDungeon", Translation.translate("Key"), [
	ItemID.keyDungeon,
	ItemID.keyDungeon2,
]);

Item.registerUseFunction("keyDungeon2", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey){
if (b.getBlock(coords.x, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x-1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x+1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y-1, coords.z).id == BlockID.brick3){


b.setBlock(coords.x, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x, coords.y, coords.z, 0, 0);
b.setBlock(coords.x, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x-1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x+1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y-1, coords.z, 0, 0);
Entity.setCarriedItem(player, 0, 0, 0);

}
}
}

}
}
}

} 
} 

} 
});


