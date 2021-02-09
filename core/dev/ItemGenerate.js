ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const ItemGenerate = api.ItemGenerate;
    ItemGenerate.addItem(ItemID.manysript2, 5, {max: 1});
    ItemGenerate.addItem(ItemID.manysript1, 10, {max: 1});
});
let Item2 = new ItemGenerate();
Item2.addItem(264, 0.2, {max: 2});
Item2.addItem(266, 1, {max:4});
Item2.addItem(265, 0.5, {max:6});
Item2.addItem(283, 0.4, {max:1});
Item2.addItem(381, 0.2, {max:6});
Item2.addItem(399, 0.01, {max:1});
Item2.addItem(384, 0.2, {max:16});
Item2.addItem(322, 0.1, {max:1});
Item2.addItem(ItemID.Gem, 0.3, {max:1});
Item2.addItem(ItemID.Gem2, 0.08, {max:1});
Item2.addItem(ItemID.manysript1, 0.05, {max:1});


var date = new Date();
if(date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10){


    let biome = [12, 13, 26, 30, 31, 34, 140, 158];
    let ng = new ItemGenerate();
    ng.addItem(264, 0.3, {max:3});
    ng.addItem(266, 0.5, {max:5});
    ng.addItem(265, 1, {max:10});
    ng.addItem(80, 1, {max:10});
    ng.addItem(ItemID.koin_0, 0.2, {max:1});
    ng.addItem(ItemID.koin_1, 0.1, {max:1});

    Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
for(let i in biome){
if (Math.random()*100 <= 0.4){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]){

(new DungeonAPI("нг1.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

ng.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
}
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
for(let i in biome){
if (Math.random()*100 <= 0.3){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]){

(new DungeonAPI("нг2.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

ng.fillChest(coords.x, coords.y+1, coords.z+1, 0, id);
ng.fillChest(coords.x, coords.y+1, coords.z+2, 0, id);
}
}
}
});

    
    IDRegistry.genItemID("present"); 
Item.createItem("present", "present", {name: "present", meta: 0}, {stack: 1});
    Translation.addTranslation("present", {ru: "подарок"});
        Item2.addItem(ItemID.present, 0.1, {max:1});
        ng.addItem(ItemID.present, 0.3, {max:1});
        ng.registerRecipeViewer("Generate6", "генерация предметов");
    let arrPresent = [];
    let Present = {
        add: function (obj){
            arrPresent.push(obj);
        }
    };
    Present.add({
        id: 264,
        date: 0,
        min: 1,
        max: 3
    });
    Present.add({
        id: ItemID.clitok,
        date: 0,
        min: 1,
        max: 3
    });
    Present.add({
        id: ItemID.koin_0,
        date: 0,
        min: 1,
        max: 2
    });
    Present.add({
        id: ItemID.koin_1,
        date: 0,
        min: 1,
        max: 1
    });
    Item.registerUseFunction("present", function(coords, item, block, player){
        let bs = BlockSource.getDefaultForActor(player);
        let r = Math.round(Math.random() * (arrPresent.length - 1));
        bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, arrPresent[r].id, Math.floor(Math.random()*(arrPresent[r].max))+arrPresent[r].min, arrPresent[r].date, null);
        delItem(player, item);
    });
}
Item2.registerRecipeViewer("Generate2", "генерация предметов");
Item2.setPrototype({
    setFunction: function (slot, x, y, z, random, id, data, count, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        let container = World.getContainer(x, y, z, blockSource);
        if(id == 283){
            let extra = ItemGenerateAPI.enchantAdd("sword", 3);
            container.setSlot(slot, id, count, data, extra);
        }
    }
});

let Item3 = new ItemGenerate();
Item3.addItem(264, 0.3, {max:5});
Item3.addItem(265, 1, {max:3});
Item3.addItem(ItemID.koin_0, 0.1, {max:2});
Item3.addItem(ItemID.koin_1, 0.01, {max:1});
Item3.addItem(ItemID.bookxp, 0.01, {max: 2})
//железо
Item3.addItem(306, 0.15, {max:1});
Item3.addItem(307, 0.08, {max:1});
Item3.addItem(308, 0.08, {max:1});
Item3.addItem(309, 0.15, {max:1});
//алмазы
Item3.addItem(310, 0.02, {max:1});
Item3.addItem(311, 0.01, {max:1});
Item3.addItem(312, 0.03, {max:1});
Item3.addItem(313, 0.02, {max:1});
//кожа
Item3.addItem(298, 0.4, {max:1});
Item3.addItem(299, 0.1, {max:1});
Item3.addItem(300, 0.2, {max:1});
Item3.addItem(301, 0.4, {max:1});

//кольчуга
Item3.addItem(302, 0.2, {max:1});
Item3.addItem(303, 0.1, {max:1});
Item3.addItem(304, 0.1, {max:1});
Item3.addItem(305, 0.2, {max:1});
Item3.registerRecipeViewer("Generate3", "генерация предметов");

let Item5 = new ItemGenerate();
Item5.addItem(264, 0.3, {max:3});
Item5.addItem(266, 0.5, {max:5});
Item5.addItem(265, 1, {max:10});
Item5.addItem(372, 0.10, {max:5});
Item5.addItem(384, 0.10, {max:11});
Item5.addItem(399, 0.01, {max:1});
Item5.addItem(ItemID.glas, 0.4, {max:1});
Item5.registerRecipeViewer("Generate5", "генерация предметов");

let Item6 = new ItemGenerate();
Item6.addItem(264, 0.1, {max:5});
Item6.addItem(266, 0.4, {max:7});
Item6.addItem(295, 0.8, {max:20});
Item6.addItem(291, 0.9, {max:1});
Item6.addItem(261, 0.8, {max:1});
Item6.addItem(262, 0.4, {max:20});
Item6.addItem(297, 0.8, {max:6});
Item6.addItem(322, 0.05, {max:10});
Item6.addItem(ItemID.sorcererStaff, 0.1, {max: 1});
Item6.addItem(ItemID.idal, 0.05, {max:10});
Item6.registerRecipeViewer("Generate6", "генерация предметов");
