IDRegistry.genBlockID("brick2");
Block.createBlock("brick2", [ {name: "Paradise Bricks", texture: [["brick2", 0]], inCreative: true}]);

Translation.addTranslation("Paradise Bricks", {ru: "кирпичи рая"});

IDRegistry.genBlockID("vase");
Block.createBlock("vase", [ {name: "vase", texture: [["stone", 0]], inCreative: true}]);

Translation.addTranslation("vase", {ru: "ваза"});
renderAPI.setblock(BlockID.vase, "vase.obj", "vase");

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id==BlockID.werep) {
BlockSource.getDefaultForActor(player).spawnDroppedItem(coords.x, coords.y, coords.z, 264, Math.trunc(Math.random() * 3 + 1), 0, null 
);
} 
});

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});


ToolAPI.registerBlockMaterial(BlockID.vase, "stone", 1, true);
Block.setDestroyTime(BlockID.vase, 1);
Block.setDestroyLevel(BlockID.vase, 1);


IDRegistry.genBlockID("werep");
Block.createBlock("werep", [ {name: "werep", texture: [["stone", 0]], inCreative: true}]);

Translation.addTranslation("werep", {ru: "череп"});
renderAPI.setblock(BlockID.werep, "werep.obj", "werep");

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id==BlockID.vase) {
BlockSource.getDefaultForActor(player).spawnDroppedItem(coords.x, coords.y, coords.z, 371, Math.trunc(Math.random() * 16 + 1), 0, null);
} 
});

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});
TileEntity.registerPrototype(BlockID.trava, {

     defaultValues: {
     },
     tick: function(){
        if(this.blockSource.getBlock(this.x, this.y-1, this.z).id==0){
this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
}
     }
});

ToolAPI.registerBlockMaterial(BlockID.werep, "stone", 1, true);
Block.setDestroyTime(BlockID.werep, 1);
Block.setDestroyLevel(BlockID.werep, 1);

ToolAPI.registerBlockMaterial(BlockID.brick2, "stone", 3, true);
Block.setDestroyTime(BlockID.brick2, 1);

IDRegistry.genBlockID("glass2");
Block.createBlock("glass2", [ {name: "Glass of paradise", texture: [["glass2", 0]], inCreative: true} ]);

Translation.addTranslation("Glass of paradise", {ru: "стекло"});

Block.setDestroyTime(BlockID.glass2, 0.1);

Block.createSpecialType({
	base: 17,
	solid: true,
	destroytime: 2,
	explosionres: 10,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "log");
Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5
}, "log2");

IDRegistry.genBlockID("Breastya");
Block.createBlockWithRotation("Breastya", [ {name: "Breastya", texture: [["Breastya", 1], ["Breastya", 1], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0]], inCreative: true} ], "log");

Translation.addTranslation("Breastya", {ru: "бревно рая"});

//Block.setDestroyTime(BlockID.Breastya, 1);
//Block.setDestroyLevel(BlockID.Breastya, 1);

IDRegistry.genBlockID("Foliage");
Block.createBlock("Foliage", [ {name: "Foliage of paradise", texture: [["Foliage", 0]], inCreative: true} ], "log2");

Translation.addTranslation("Foliage of paradise", {ru: "листва"});

Block.setDestroyTime(BlockID.Foliage, 0.1);

Block.registerDropFunctionForID(BlockID.Foliage, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.sapling10, 1, 0]];

});

IDRegistry.genBlockID("sap");
Block.createBlock("sap", [ {name: "sapling", texture: [["Sapling2", 0]], inCreative: false} ]);

TileRenderer.setPlantModel(BlockID.sap, 0, "Sapling2", 0);

Block.setDestroyTime(BlockID.sap, 0.2);

Block.createSpecialType({
 opaque: false, 
	lightopacity: 0,
  lightlevel: 8, 
 	explosionres: 0,
}, "trava");

IDRegistry.genBlockID("trava");
Block.createBlock("trava", [ {name: "trava", texture: [["trava", 0]], inCreative: false} ], "trava");

TileRenderer.setPlantModel(BlockID.trava, 0, "trava", 0);

Block.setDestroyTime(BlockID.trava, 0.2);

IDRegistry.genBlockID("board");
Block.createBlock("board", [ {name: "board", texture: [["board", 0]], inCreative: true} ], "log");

Translation.addTranslation("board", {ru: "доски рая"});

IDRegistry.genBlockID("a0");
Block.createBlock("a0", [ {name: "ggg", texture: [["a", 0]], inCreative: false} ]);

Block.setDestroyTime(BlockID.a0, 0.1);

Block.registerDropFunctionForID(BlockID.a0, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 1, 0]];

});

IDRegistry.genBlockID("a1");
Block.createBlock("a1", [ {name: "ggg", texture: [["a", 1]], inCreative: false} ]);

Block.setDestroyTime(BlockID.a1, 0.1);

Block.registerDropFunctionForID(BlockID.a1, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 2, 0]];

});

TileEntity.registerPrototype(BlockID.a0, {
     defaultValues: {
     },
     tick: function(){
        if(Math.random() * 1000 < 1){
this.blockSource.setBlock(this.x, this.y, this.z, BlockID.a1, 0);
}
     }
});

Block.setBlockShape(BlockID.a0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8}) 

Block.setBlockShape(BlockID.a1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8})

TileEntity.registerPrototype(BlockID.a1, {
     defaultValues: {
     },
     click: function(id, count, data, coords, player){
let b = BlockSource.getDefaultForActor(player);
b.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.Berries, 1, 0, null);
b.setBlock(this.x, this.y, this.z, BlockID.a0, 0);
     }
});

IDRegistry.genBlockID("altar");
Block.createBlock("altar", [ {name: "Altarial block", texture: [["stone-1", 0], ["stone-1", 0], ["stone-1", 0]], inCreative: true} ]);

Translation.addTranslation("Altarial block", {ru: "алтарьный блок"});

Block.setDestroyTime(BlockID.altar, 1);
ToolAPI.registerBlockMaterial(BlockID.altar, "stone", 1, true);

IDRegistry.genBlockID("altar1");
Block.createBlock("altar1", [ {name: "Altarial block", texture: [["rityalBlock", 0], ["rityalBlock", 0], ["rityalBlock", 0]], inCreative: true} ]);

Block.setDestroyTime(BlockID.altar1, 1);
ToolAPI.registerBlockMaterial(BlockID.altar1, "stone", 1, true);

IDRegistry.genBlockID("altar3");
Block.createBlock("altar3", [ {name: "Altarial block", texture: [["rityalBlock", 2], ["rityalBlock", 2], ["rityalBlock", 2]], inCreative: true} ]);

Block.setDestroyTime(BlockID.altar3, 1);
ToolAPI.registerBlockMaterial(BlockID.altar3, "stone", 1, true);

IDRegistry.genBlockID("dirt2"); 
Block.createBlock("dirt2", [{name: "Land of paradise", texture: [["aether_dirt", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Land of paradise", {ru: "земля рая"});

Block.setDestroyTime(BlockID.dirt2, 1);
ToolAPI.registerBlockMaterial(BlockID.dirt2, "dirt", 1, true);

IDRegistry.genBlockID("stone2"); 
Block.createBlock("stone2", [{name: "Stone of paradise", texture: [["holystone", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Stone of paradise", {ru: "камень рая"});

IDRegistry.genBlockID("grass2");
Block.createBlock("grass2", [{name: "Grass of paradise", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Grass of paradise", {ru: "трава рая"});

Block.registerDropFunctionForID(BlockID.grass2, function(coords, id, data, diggingLevel, toolLevel){
   return [[BlockID.dirt2, 1, 0]];
});

IDRegistry.genBlockID("ore"); 
Block.createBlock("ore", [{name: "Ore of paradise", texture: [["ore", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Ore of paradise", {ru: "руда рая"});

IDRegistry.genBlockID("blockmetal"); 
Block.createBlock("blockmetal", [{name: "Blocks of divine methal", texture: [["blockmetal", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Blocks of divine methal", {ru: "блок божественного метала"});

Block.setDestroyTime(BlockID.blockmetal, 1);
ToolAPI.registerBlockMaterial(BlockID.blockmetal, "stone", 1, true);

IDRegistry.genBlockID("block1"); 
Block.createBlock("block1", [{name: "Controller of the worlds", texture: [["altar", 0]],inCreative: true}], "opaque");

Translation.addTranslation("Controller of the worlds", {ru: "контролер миров"});

TileEntity.registerPrototype(BlockID.grass2, {

     defaultValues: {

          someValue: 0 

     },


     tick: function(){
         if(this.blockSource.getBlock(this.x, this.y + 1, this.z).id>>0){
this.blockSource.setBlock(this.x, this.y, this.z, BlockID.dirt2, 0);
} 

          

     },

    

     click: function(id, count, data, coords){

     }

    

    

});

TileEntity.registerPrototype(BlockID.dirt2, {

     defaultValues: {

          someValue: 0 

     },


     tick: function(){
         if(this.blockSource.getBlock(this.x + 1, this.y, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x - 1, this.y, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
}
if(this.blockSource.getBlock(this.x, this.y, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x, this.y, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}












if(this.blockSource.getBlock(this.x + 1, this.y - 1, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x - 1, this.y - 1, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y - 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y - 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y - 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y - 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
}
if(this.blockSource.getBlock(this.x, this.y - 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x, this.y - 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}












if(this.blockSource.getBlock(this.x + 1, this.y + 1, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x - 1, this.y + 1, this.z).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y + 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x - 1, this.y + 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y + 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
if(this.blockSource.getBlock(this.x + 1, this.y + 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
}
if(this.blockSource.getBlock(this.x, this.y + 1, this.z - 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

} 
} 

 if(this.blockSource.getBlock(this.x, this.y + 1, this.z + 1).id==BlockID.grass2){
if(Math.random() < 0.01){

this.blockSource.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);

}
}
     },

    

     click: function(id, count, data, coords){

     }

    

    

});
ToolAPI.registerBlockMaterial(BlockID.stone2, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.ore, "stone", 3, true);


Block.setDestroyTime(BlockID.dirt2, 0.1);
Block.setDestroyTime(BlockID.grass2, 0.1);
Block.setDestroyTime(BlockID.stone2, 2);
Block.setDestroyTime(BlockID.block1, 99999999999);
Block.setDestroyLevel(BlockID.stone2, 1);
Block.setDestroyTime(BlockID.ore, 3);
Block.setDestroyLevel(BlockID.ore, 3);


IDRegistry.genBlockID("kristalFire");
Block.createBlock("kristalFire", [ {name: "crictal fire", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false} ]);

TileRenderer.setPlantModel(BlockID.kristalFire, 0, "crictal", 0);

Block.registerDropFunctionForID(BlockID.kristalFire, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalfire, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalFire, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalFire, "stone", 0.1, true);

IDRegistry.genBlockID("kristaldirt");
Block.createBlock("kristaldirt", [ {name: "проигрыватель", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false} ]);
TileRenderer.setPlantModel(BlockID.kristaldirt, 0, "crictal", 2);
Block.registerDropFunctionForID(BlockID.kristaldirt, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalearth, 1, 0]];
});

Block.setDestroyTime(BlockID.kristaldirt, 1);
ToolAPI.registerBlockMaterial(BlockID.kristaldirt, "stone", 0.1, true);

IDRegistry.genBlockID("kristalLight");
Block.createBlock("kristalLight", [ {name: "проигрыватель", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false} ]);
TileRenderer.setPlantModel(BlockID.kristalLight, 0, "crictal", 3);
Block.registerDropFunctionForID(BlockID.kristalLight, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalLightning, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalLight, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalLight, "stone", 0.1, true);

IDRegistry.genBlockID("kristalwind");
Block.createBlock("kristalwind", [ {name: "проигрыватель", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false} ]);
TileRenderer.setPlantModel(BlockID.kristalwind, 0, "crictal", 1);
Block.registerDropFunctionForID(BlockID.kristalwind, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalWind, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalwind, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalwind, "stone", 0.1, true);

IDRegistry.genBlockID("rityal1"); 
Block.createBlock("rityal1", [{name: "magis altar block", texture: [["nis", 0],["vverx", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);

Translation.addTranslation("magis altar block", {ru: "магический ритуальный блок"});

Block.setDestroyTime(BlockID.rityal1, 1);
ToolAPI.registerBlockMaterial(BlockID.rityal1, "stone", 1, true);

var Render = {
setAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					
					model.addBox (0/16, 0.88, 0/16, 16/16, 1, 1/16, blockID, 0);
					  model.addBox (0/16, 0.88, 15/16, 16/16, 1, 16/16, blockID, 0);
					   model.addBox (0/16, 0.88, 1/16, 1/16, 1, 15/16, blockID, 0);
					    model.addBox (15/16, 0.88, 1/16, 16/16, 1, 15/16, blockID, 0);
				   model.addBox(0/16, 0.79, 0/16, 16/16, 0.88, 16/16, blockID, 0);
                 model.addBox(3/16, 0.21, 3/16, 13/16, 0.78, 13/16, blockID, 0);
			   model.addBox(0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					
					
					
     }
},

setRackRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					 model.addBox (0/16, 0, 0/16, 16/16, 0.133, 16/16, blockID, 0);
					  model.addBox (4/16, 0.134, 4/16, 12/16, 0.246, 12/16, blockID, 0);
					  model.addBox (10/16, 0.247, 10/16, 6/16, 0.95, 6/16, blockID, 0);
			
					  model.addBox (4/16, 0.96, 4/16, 12/16, 1, 12/16, blockID, 0);
     }
},

setRitualAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					model.addBox (0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					model.addBox (4/16, 0.21, 4/16, 12/16, 0.80, 12/16, blockID, 0);
					model.addBox (0/16, 0.81, 0/16, 16/16, 1, 16/16, blockID, 0);
					
     }
},

setRitualAltarControllerRender: function(blockID, normal){
    if(normal){
     Block.setBlockShape(blockID, {x: 0, y: 0, z: 0}, {x: 1, y: 0.4, z: 1});			
     }
}
};

Render.setRitualAltarRender(BlockID.rityal1, true);

TileEntity.registerPrototype(BlockID.rityal1, {
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
    customAnimation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
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
    drop: function(player){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        let PA = new PlayerActor(player);
        var B = new BlockSource.getDefaultForActor(player);
        if(PA.getGameMode() == 0){
            B.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
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
            if(id != ItemID.RitualActivator)
                this.drop(player);
        }else{
            if(id != ItemID.RitualActivator){
                let item = Player.getCarriedItem();
                delItem(player, {id:id,data:data,count:count}) ;
                this.animation(item);
            }
        }
    },
    destroyBlock: function(coords, player){
        let PA = new PlayerActor(player);
        var B = new BlockSource.getDefaultForActor(player);
        if(PA.getGameMode() == 0){
            B.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
    }
});









