/*
BUILD INFO:
  dir: .core/dev
  target: .main.js
  files: 12
*/



// file: info.js

IMPORT("DungeonAPI");
Dungeon.setDir(".assets/.structure");




// file: structure.js

var ItemGenerate = new ItemGenerate();
ItemGenerate.setPrototype({
    isGenerate: function (slot, x, y, z, id, data, count){
        return true;
    }
});
ItemGenerate.addItem(ItemID.piece1, 0.05, {max: 1});
ItemGenerate.addItem(ItemID.piece2, 0.05, {max: 1});
ItemGenerate.addItem(ItemID.piece3, 0.05, {max: 1});
ItemGenerate.addItem(264, 0.1, {max: 3});
ItemGenerate.addItem(ItemID.loreClass1, 0.005, {max: 1});
ItemGenerate.addItem(ItemID.loreClass2, 0.005, {max: 1});
ItemGenerate.addItem(ItemID.loreClass3, 0.005, {max: 1});
ItemGenerate.addItem(265, 1, {max: 3});
ItemGenerate.addItem(322, 0.01, {max: 1});
ItemGenerate.addItem(266, 0.1, {max: 3});
ItemGenerate.addItem(ItemID.rune1, 0.5, {max: 1});
ItemGenerate.addItem(ItemID.rune2, 0.5, {max: 1});
ItemGenerate.addItem(ItemID.rune3, 0.5, {max: 1});
ItemGenerate.addItem(ItemID.rune4, 0.5, {max: 1});
let TowerOfEvil = new DungeonAPI("Tower_of_evil.json");
TowerOfEvil.setPrototype({
    isSetBlock: function(x, y, z, id, data, identifier){
        return true;
    }
});
let OrdinaryTemple = new DungeonAPI("Ordinary_temple.json");
OrdinaryTemple.setPrototype({
    isSetBlock: function(x, y, z, id, data, identifier){
        return true;
    }
});
let ToweraOfDarkness = new DungeonAPI("Tower_of_darkness.json");
ToweraOfDarkness.setPrototype({
    isSetBlock: function(x, y, z, id, data, identifier){
        return true;
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
    if(random.nextInt(100) < 1){
        let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
        TowerOfEvil.setStructure(coords.x, coords.y, coords.z, 0);
        ItemGenerate.fillChest(coords.x, coords.y+1, coords.z);
    } 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
    if(random.nextInt(100) < 1){
        let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));  
         OrdinaryTemple.setStructure(coords.x, coords.y, coords.z, 0);
         ItemGenerate.fillChest(coords.x, coords.y+2, coords.z-1);
         ItemGenerate.fillChest(coords.x, coords.y+2, coords.z);
         ItemGenerate.fillChest(coords.x+1, coords.y+2, coords.z);
         ItemGenerate.fillChest(coords.x+1, coords.y+2, coords.z-1);
    } 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
    if(random.nextInt(100) < 1){
        let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
        ToweraOfDarkness.setStructure(coords.x, coords.y, coords.z, 0);
        ItemGenerate.fillChest(coords.x, coords.y, coords.z-1);
        ItemGenerate.fillChest(coords.x, coords.y, coords.z+1);
        ItemGenerate.fillChest(coords.x+1, coords.y, coords.z);
        ItemGenerate.fillChest(coords.x-1, coords.y, coords.z);
    } 
});




// file: dimensions.js

var DeadForest = new Dimensions.CustomDimension("DeadForest", 589); 
DeadForest.setSkyColor(0, 128, 188);
DeadForest.setFogColor(0, 128, 188); 
 
DeadForest.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 68, 
            yConversion: [[0, 1], [1, -1]], 
            material: {base: 1, surface: {id:5, data: 0, width:4}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));
Callback.addCallback("NativeCommand", function(str){
  cmd = str.split(" ");
  if(cmd[0] == "/t"){
  if(cmd[1] == "d"){ 
   Dimensions.transfer(Player.get(), DeadForest.id);
   
} 
Game.prevent();
} 
});




// file: core/MagisCore.js

Network.addClientPacket("aw.classPlayer", function(packetData) {
    classPlayer[packetData.player] = Class[packetData.Class];
});
Network.addClientPacket("aw.parameterAdd", function(packetData) {
    MagicCore.piece(packetData.player, packetData.parameter);
});
var classPlayer = {};
const Class = {
    mage: {
        name: "mage", 
        magisMax: 100, 
        magis: 5,
        ProtectionMax: 40,
        Protection: 0,
        necromancerMax: 10,
        necromancer: 0,
        AspectsMax: 100000,
        AspectsNow: 5000,
        Aspects: 0
    }, 
    warrior: {
        name: "warrior", 
        magisMax: 10,
        magis: 0,
        ProtectionMax: 100,
        Protection: 10,
        necromancerMax: 5, 
        necromancer: 0,
        AspectsMax: 10000,
        AspectsNow: 100,
        Aspects: 0
    }, 
    necromancer: {
        name: "necromancer", 
        magisMax: 50,
        magis: 5,
        ProtectionMax: 30,
        Protection: 0,
        necromancerMax: 100,
        necromancer: 5,
        AspectsMax: 50000,
        AspectsNow: 5000,
        Aspects: 0
    }
};
Callback.addCallback("PlayerAttack", function(player){
    let c = MagicCore.getValue(player);
    if(classPlayer != false){
        let r = Math.floor(Math.random()*10)
        if(c.Aspects + r <= c.AspectsNow){
            classPlayer[player].Aspects += r;
        }else{
            classPlayer[player].Aspects = c.AspectsNow;
        }
        
    }
});
Saver.addSavesScope("BackpacksScope",
    function read(scope) {
        classPlayer = scope.classPlayer || {};
    },
    function save() {
        return {
            classPlayer: classPlayer,
        };
    }
);
var MagicCore = {
    setArmor: function (id, parameter, value){
        Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n требуется: " + parameter + " уровня " + value;
        });
        Armor.registerOnTakeOnListener(id, function(item, slot, player) {
            if(item.id == id){
                let ItemA = new PlayerActor(player);
                let coords = Entity.getPosition(player);
                let c = MagicCore.getValue(player);
                let b = BlockSource.getDefaultForActor(player);
                if(MagicCore.isClass(player)){
                    if(c[parameter] < value){
                        ItemA.setArmor(slot, 0, 0, 0, null);
                        b.spawnDroppedItem(coords.x, coords.y, coords.z, id, 1, item.data, item.extra);
                    }else{
                        Game.message("требуется "+parameter+" уровня "+value)
                    }
                }else{
                    ItemA.setArmor(slot, 0, 0, 0, null);
                    b.spawnDroppedItem(coords.x, coords.y, coords.z, id, 1, item.data, item.extra);
                }
            }
        });
    }, 
    isClass: function (player){
        let key = Object.keys(classPlayer);
        if(classPlayer == {}){
                return false;
        }
        for(i in key){
            if(key[i] == player){
                return true;
            }else{
                return false;
            }
        }
    }, 
    isExistsClass: function (){
        if(classPlayer == {}){
            return false;
        }else{
            return true;
        }
    }, 
    getValue: function (player){
        let o = {
                name: "нет класса",
                magisMax: 0,
                magis: 0, 
                ProtectionMax: 0, 
                Protection: 0, 
                necromancerMax: 0, 
                necromancer: 0,
                AspectsMax: 2, 
                AspectsNow: 1, 
                Aspects: 0
            };
        if(!this.isClass()){
            o = classPlayer[player];
        } 
        return o;
    }, 
    piece: function(player, parameter){
        if(MagicCore.isClass(player)){
            let cv = MagicCore.getValue(player);
            if(cv[parameter] + 5 <= cv[parameter+"Max"]){
                Player.decreaseCarriedItem(1) ;
                cv[parameter] += 5;
                Game.message("§2параметр: "+parameter+" был улучшен на 5 теперь он равен "+cv[parameter]);
                classPlayer[player] = cv;
            }else{
                Game.message("§4параметр "+parameter+" максимального уровня");
            }
        }else{
            Game.message("§4у вас нет класса")
        }
    }
};
MagicCore.setArmor(310, "Protection", 50);
MagicCore.setArmor(311, "Protection", 50);
MagicCore.setArmor(312, "Protection", 50);
MagicCore.setArmor(313, "Protection", 50);

MagicCore.setArmor(314, "Protection", 40);
MagicCore.setArmor(315, "Protection", 40);
MagicCore.setArmor(316, "Protection", 40);
MagicCore.setArmor(317, "Protection", 40);

MagicCore.setArmor(306, "Protection", 30);
MagicCore.setArmor(307, "Protection", 30);
MagicCore.setArmor(308, "Protection", 30);
MagicCore.setArmor(309, "Protection", 30);

MagicCore.setArmor(302, "Protection", 20);
MagicCore.setArmor(303, "Protection", 20);
MagicCore.setArmor(304, "Protection", 20);
MagicCore.setArmor(305, "Protection", 20);

MagicCore.setArmor(298, "Protection", 10);
MagicCore.setArmor(299, "Protection", 10);
MagicCore.setArmor(300, "Protection", 10);
MagicCore.setArmor(301, "Protection", 10);




// file: core/TimeAPI.js

function TimerAPI (){
    let tick = 0;
    let active = false;
    this.RegisterFunction = function (time, func, f){
        Callback.addCallback("LocalTick", function(){
            if(active==true){
                if(tick>time){
                    if(f==false){
                        active = false;
                    }
                this.func = func;
                tick = 0;
                func(Player.get());
                }else{
                    tick++;
                }
            }
        });
    }
    this.start = function (){
        active = true;
        tick = 0;
    }
    this.stop = function (){
        active = false;
        tick = 0;
    }
    this.restart = function (){
        tick = 0;
    }
    this.getTick = function (){
        return tick;
    } 
    this.getActive = function (){
        return active;
    }
};




// file: core/renderAPI.js

let Render = {
    SetAltar: function (id){
        var render = new ICRender.Model(); 
        BlockRenderer.setStaticICRender(id, -1, render);
        var model = BlockRenderer.createModel();  
        render.addEntry(model);
        model.addBox(1/16, 0, 1/16, 15/16, 0.0625, 15/16, 1, 0);
        model.addBox(2/16, 0.0625, 2/16, 14/16, 0.125, 14/16, 1, 0);
        model.addBox(3/16, 0.125, 3/16, 13/16, 1 - 0.0625, 13/16, 1, 0);
        model.addBox(2/16, 1 - 0.0625, 2/16, 14/16, 1, 14/16, 1, 0);
    }
};






























// file: items/item.js

IDRegistry.genItemID("piece1"); 
Item.createItem("piece1", "Piece of Knowledge: Magic", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Magic", {ru: "Кусок знания: магии"});

IDRegistry.genItemID("piece2"); 
Item.createItem("piece2", "Piece of Knowledge: Protection", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Protection", {ru: "Кусок знания: защиты"});

IDRegistry.genItemID("piece3"); 
Item.createItem("piece3", "Piece of Knowledge: Necromancy", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Necromancy", {ru: "Кусок знания: некромантии"});

IDRegistry.genItemID("loreClass1"); 
Item.createItem("loreClass1", "class lore: mage", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("class lore: mage", {ru: "знания класса: маг"});
Item.setGlint(ItemID.loreClass1, true);

IDRegistry.genItemID("loreClass2"); 
Item.createItem("loreClass2", "Class Lore: Warrior", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Class Lore: Warrior", {ru: "знания класса: воин"});
Item.setGlint(ItemID.loreClass2, true);

IDRegistry.genItemID("loreClass3"); 
Item.createItem("loreClass3", "class lore: necromancer", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("class lore: necromancer", {ru: "знания класса: некромант"});
Item.setGlint(ItemID.loreClass3, true);

Item.registerUseFunctionForID(ItemID.piece1, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        client.send("aw.parameterAdd", {
                player: player, 
                parameter:  "magis"
        });
    }
});
Item.registerUseFunctionForID(ItemID.piece2, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        client.send("aw.parameterAdd", {
                player: player, 
                parameter:  "Protection"
        });
    }
});
Item.registerUseFunctionForID(ItemID.piece3, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        client.send("aw.parameterAdd", {
                player: player, 
                parameter:  "necromancer"
        });
    }
});

Item.registerUseFunctionForID(ItemID.loreClass1, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            Player.decreaseCarriedItem(1) ;
             Game.message("§2вы выбрали класс: mage");
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "mage"
            });
        }else{
            Game.message("§4вы не можете поменять класс");
        }
    }
});
Item.registerUseFunctionForID(ItemID.loreClass2, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            Player.decreaseCarriedItem(1) ;
             Game.message("§2вы выбрали класс: warrior");
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "warrior"
            });
        }else{
            Game.message("§4вы не можете поменять класс");
        }
    }
});
Item.registerUseFunctionForID(ItemID.loreClass3, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            Player.decreaseCarriedItem(1) ;
             Game.message("§2вы выбрали класс: necromancer");
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "necromancer"
            });
        }else{
            Game.message("§4вы не можете поменять класс");
        }
    }
});

IDRegistry.genItemID("rune0"); 
Item.createItem("rune0", "Empty rune", {name: "rune", meta: 0}, {stack: 1});
Translation.addTranslation("Empty rune", {ru: "пустая руна"});

IDRegistry.genItemID("rune1"); 
Item.createItem("rune1", "fire rune", {name: "rune", meta: 1}, {stack: 1});
Translation.addTranslation("fire rune", {ru: "руна огня"});
Item.setGlint(ItemID.rune1, true);

IDRegistry.genItemID("rune2"); 
Item.createItem("rune2", "Earth rune", {name: "rune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "руна земли"});
Item.setGlint(ItemID.rune2, true);

IDRegistry.genItemID("rune3"); 
Item.createItem("rune3", "Wind rune", {name: "rune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "руна ветра"});
Item.setGlint(ItemID.rune3, true);

IDRegistry.genItemID("rune4"); 
Item.createItem("rune4", "The rune of light", {name: "rune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "руна света"});
Item.setGlint(ItemID.rune4, true);

IDRegistry.genItemID("rune5"); 
Item.createItem("rune5", "Rune of darkness", {name: "rune", meta: 5}, {stack: 1});
Translation.addTranslation("Rune of darkness", {ru: "руна тьмы"});
Item.setGlint(ItemID.rune5, true);

IDRegistry.genItemID("rune6"); 
Item.createItem("rune6", "Rune copying", {name: "rune", meta: 6}, {stack: 1});
Translation.addTranslation("Rune copying", {ru: "Руна копирование"});
Item.setGlint(ItemID.rune6, true);




// file: items/book.js

IDRegistry.genItemID("bookk"); 
Item.createItem("bookk", "Class book", {name: "book", meta: 0}, {stack: 1});
Translation.addTranslation("Class book", {ru: "книга класса"});
let guiBookPlayer = {};
let BookAPI = {
    container: {},
    is: function (player, obj){
        let key = Object.keys(obj);
        if(obj == {}){
                return false;
        }
        for(i in key){
            if(key[i] == player){
                return true;
            }else{
                return false;
            }
        }
    }, 
    getCont: function (c) {
        if(!this.is(c, this.container)){
            this.container[c] = {
                container: new UI.Container()
            };
        }
        return this.container[c].container;

    }, 
    getGui: function(player){
        let c = MagicCore.getValue(player);
            guiBookPlayer[player] = {
                gui: new UI.StandartWindow({
            standart: {
                background: {
                   bitmap: "book_background",
                   color: android.graphics.Color.argb(256, 0, 0, 0),
                }
            },
            drawing: [],
            elements: {
                "close": {type: "closeButton", x: 930, y: 10,
bitmap: "btn_close", scale: 3}, 
                "text0": {type: "text", x: 50, y: 40, text: "характеристики вашего персонажа", font: {size: 20}},
                "text1": {type: "text", x: 50, y: 80, text: "ваш класс: "+c.name, font: {size: 15}}, 
                "text2": {type: "text", x: 50, y: 120, text: "магия: "+c.magis+"/"+c.magisMax, font: {size: 15}}, 
                "text3": {type: "text", x: 50, y: 160, text: "защита: "+c.Protection+"/"+c.ProtectionMax, font: {size: 15}}, 
                "text4": {type: "text", x: 50, y: 200, text: "некромантия: "+c.necromancer+"/"+c.necromancerMax, font: {size: 15}}, 
                "text5": {type: "text", x: 50, y: 240, text: "аспекты: "+c.AspectsNow+"/"+c.AspectsMax, font: {size: 15}}, 
            }, 
        })
            };
        return guiBookPlayer[player].gui;
    }, 
    open: function(player){
        let con = this.getCont(player);
        con.openAs(this.getGui(player));
    }
};
Item.registerUseFunctionForID(ItemID.bookk, function(coords, item, block, player){
    var client = Network.getClientForPlayer(player);
    if (client) {
        if(block.id != BlockID.rityalPedestal){
            BookAPI.open(player);
        } 
        let c = MagicCore.getValue(Player.get());
        Game.message(c.Aspects + "/" + c.AspectsNow);
    }
});




// file: block/block.js

IDRegistry.genBlockID("rityalPedestal");
Block.createBlock("rityalPedestal", [ {name: "Ritual pedestal", texture: [["rityalPedestal", 0]], inCreative: true} ]);
Translation.addTranslation("Ritual pedestal", {ru: "Ритуальный пьедестал"});
Render.SetAltar(BlockID.rityalPedestal);
TileEntity.registerPrototype(BlockID.rityalPedestal, {
    defaultValues: {
        item: {
            id: 0,
            data: 0
        }
    }, 
    init: function(){
        if(this.data.item.id != 0){
            this.networkData.putInt("itemId", this.data.item.id);
            this.networkData.putInt("itemData", this.data.item.data);
            this.networkData.sendChanges();
        } 
    }, 
    client: {
        updateModel: function() {
            var id = Network.serverToLocalId(this.networkData.getInt("itemId"));
            var data = this.networkData.getInt("itemData");
            this.model.describeItem({
                id: id,
                count: 1,
                data: data, 
                size: 1
            });
        },
        load: function() {
            this.model = new Animation.Item(this.x + .5, this.y + 1.5, this.z + .5);
            this.updateModel();
            this.model.load();
            var that = this;
            this.networkData.addOnDataChangedListener(function(data, isExternal) {
                that.updateModel();
            });
        },
        unload: function() {
            this.model.destroy();
        }
    },
    animation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
    }, 
    drop: function(){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        World.drop(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data);
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    destroyAnimation: function(){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    click: function(id, count, data, coords, player) {
        if(this.data.item.id != 0){
            if(id != ItemID.bookk)
                this.drop();
        }else{
            if(id != ItemID.bookk){
                let item = Player.getCarriedItem();
                Player.setCarriedItem(item.id, item.count-1, item.data);
                this.animation(item);
            }
        }
    }
});




// file: ritual/clone.js


    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.bookk){
            var b = BlockSource.getDefaultForActor(player);
            if(b.getBlockId(coords.x, coords.y, coords.z) == BlockID.rityalPedestal){
                if(b.getBlockId(coords.x+2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                    if(b.getBlockId(coords.x-2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                         if(b.getBlockId(coords.x+2, coords.y, coords.z-2) == BlockID.rityalPedestal){
                             if(b.getBlockId(coords.x-2, coords.y, coords.z-2) == BlockID.rityalPedestal){
                                if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z+2, b).data.item.id == ItemID.rune6){
                                     if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z+2, b).data.item.id == ItemID.rune6){
                                         if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z-2, b).data.item.id == ItemID.rune6){
                                             if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z-2, b).data.item.id == ItemID.rune6){
                                                 if(TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).data.item.id != 0){
                                                  let d = MagicCore.getValue(player);
                                                  if(d.Aspects>=500){
                                                 if(d.magis>=30){
                                                     
      let Item = TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).data.item;
                               b.spawnDroppedItem(coords.x, coords.y+1, coords.z, Item.id, 1, Item.data);
                    TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).drop();
                    d.Aspects -= 500;
                    if(Math.random()<=0.5){
                        if(d.AspectsNow + 500 <= d.AspectsMax){
                            d.AspectsNow+=500;
                        }else{
                            d.AspectsNow=d.AspectsMax;
                        }        
                        classPlayer[player] = d;                                                                                               
                                                     }
                                                    } 
                                                } 
                                            } 
                                        } 
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




// file: ritual/1lvl.js

let Ritual = {
    lvl1: function(result, craft, description){
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        
        if(item.id == ItemID.bookk){
        var b = BlockSource.getDefaultForActor(player);
        if(b.getBlockId(coords.x, coords.y, coords.z) == BlockID.rityalPedestal){
            if(b.getBlockId(coords.x+2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                if(b.getBlockId(coords.x-2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                     if(b.getBlockId(coords.x+2, coords.y, coords.z-2) == BlockID.rityalPedestal){
                         if(b.getBlockId(coords.x-2, coords.y, coords.z-2) == BlockID.rityalPedestal){
        if(b.getBlockId(coords.x+3, coords.y, coords.z) == BlockID.rityalPedestal){
            if(b.getBlockId(coords.x-3, coords.y, coords.z) == BlockID.rityalPedestal){
                if(b.getBlockId(coords.x, coords.y, coords.z+3) == BlockID.rityalPedestal){
                     if(b.getBlockId(coords.x, coords.y, coords.z-3) == BlockID.rityalPedestal){ 
    if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z+2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z+2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z-2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z-2, b).data.item.id == craft.item1){
        if(TileEntity.getTileEntity(coords.x+3, coords.y, coords.z, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x-3, coords.y, coords.z, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x, coords.y, coords.z-3, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x, coords.y, coords.z+3, b).data.item.id == craft.item2){
            if(TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).data.item.id <= 0){
        let d = MagicCore.getValue(player);
        if(d.Aspects>=description.aspects){
        if(d.magis>=description.magis){
            TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).animation(result);
            TileEntity.getTileEntity(coords.x+3, coords.y, coords.z, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-3, coords.y, coords.z, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x, coords.y, coords.z+3, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x, coords.y, coords.z-3, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x+2, coords.y, coords.z+2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-2, coords.y, coords.z+2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x+2, coords.y, coords.z-2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-2, coords.y, coords.z-2, b).destroyAnimation();
            d.Aspects -= description.aspects;
            if(Math.random()<=0.5){
                        if(d.AspectsNow + 500 <= d.AspectsMax){
                            d.AspectsNow+=500;
                        }else{
                            d.AspectsNow=d.AspectsMax;
                        }        
                        classPlayer[player] = d;     
    }
    }
    }
   } 
    }
}
}
}
}
} 
} 
} 
                      }
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
   }
};
/*
Ritual.lvl1({
    id: 265,
    data: 0
},{
    item1: 264, 
    item2: 265
},{
    aspects: 100, 
    magis: 10
});
*/




// file: craft.js

Callback.addCallback("LevelLoaded", function() {
Recipes.addShaped({id: BlockID.rityalPedestal, count: 1, data: 0},
	["aga", "aba", "aba"], 
['a', 98, 0, 'b', 265, 0, 'g', 264, 0]);
Ritual.lvl1({
    id: ItemID.rune6,
    data: 0
},{
    item1: ItemID.rune4, 
    item2: ItemID.rune2
},{
    aspects: 200, 
    magis: 20
});
});




