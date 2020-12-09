/*
BUILD INFO:
  dir: core/dev
  target: main.js
  files: 40
*/



// file: info.js

IMPORT("DungeonAPI");
IMPORT("ToolType");
IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("DungeonCraftAPI");
IMPORT("add-onCreter");




// file: Wood.js

function setWood(xx, yy, zz){ 
World.setBlock(xx-2, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+7, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+7, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+8, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+1, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+2, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+3, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+4, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+5, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+6, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+7, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+7, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+8, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+7, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz+2, BlockID.Foliage, 0); 
}
Callback.addCallback("ItemUse", function(coords, item){ 

if(item.id == 351 && item.data == 15){ 
if(World.getBlock(coords.x, coords.y, coords.z).id== BlockID.sap){
setWood(coords.x, coords.y-1, coords.z);
} 
} 
});
TileEntity.registerPrototype(BlockID.sap, {

     defaultValues: {

          

     },


     tick: function(){
        if(Math.random() * 1000 < 1){
setWood(this.x, this.y-1, this.z);
}
     },
});


















// file: command.js

function getPlayer(name){
    let arr = Network.getConnectedPlayers();
    for(i in arr){
        if(Entity.getNameTag(arr[i])==name){
            return arr[i];
        }
    }
}
if(__config__.getBool("debug.active")){
    Callback.addCallback("NativeCommand", function (src){
        let arr = src.split(" ");
        if(arr[0] == "/mana"){
            if(arr[1] == "set"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                        if(mana.countMax<=parseInt(arr[3])){
                            mana.countMax = parseInt(arr[3]);
                        }
                        mana.count = parseInt(arr[3]);
                        Mp.message(player, "вам установлено количество маны - "+arr[3]);
                        Game.prevent();
                    }
                }
            }
            if(arr[1] == "setMax"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                         if(mana.count>=parseInt(arr[3])){
                            mana.count = parseInt(arr[3]);
                        }
                        mana.countMax = parseInt(arr[3]);
                        Mp.message(player, "вам установлено максимальное количество маны - "+arr[3]);
                   }
                }
            }
            if(arr[1] == "delet"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        ManaCore.create(player);
                        Mp.message(player, "у вас было удалено сохранение маны");
                    }
                }
            }
        }
    });
}




// file: api/mana.js

var manaPlayer = {};
const manaDefult = {
    count: 0,
    countMax: 10000
};
Network.addClientPacket("dc.read", function(packetData) {
    manaPlayer = packetData;
});
Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId){
    //ManaCore.read(player);
});
Saver.addSavesScope("mana",
    function read(scope) {
        manaPlayer = scope.manaPlayer || {};
    },
    function save() {
        return {
            manaPlayer: manaPlayer,
        };
    }
);
function delItem(player, item){
    let pa = new PlayerActor(player);
    if(pa.getGameMode() == 0){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
    }
}
var ManaCore = {
    create: function (player){
        manaPlayer[player] = manaDefult;
        Debug.message("create mana player - "+player);
    },
    read: function (player){
        if(manaPlayer[player]){
            let client = Network.getClientForPlayer(player);
            if(client != null){
                client.send("dc.read", manaPlayer);
            }
            Debug.message("read mana player - "+player);
        }else{
            Debug.message("[error]noy mana player - "+player);
            this.create(player);
            let client = Network.getClientForPlayer(player);
            if(client != null){
                client.send("dc.read", manaPlayer);
            }
        }
    },
    get: function (player){
        if(manaPlayer[player]){
            return manaPlayer[player];
            Debug.message("get mana player - "+player);
        }else{
            Debug.message("[error]noy mana player - "+player);
            this.create(player);
            return manaPlayer[player];
        }
    },
    set: function (player, obj){
        if(manaPlayer[player]){
            Callback.invokeCallback("wasteMana", player, this.get(player), obj);
            Debug.message("set mana player - "+player+" "+JSON.stringify(obj, null, true));
            manaPlayer[player] = obj;
            Network.sendToServer("dc.set", manaPlayer);
        }else{
            Debug.message("[error]noy mana player - "+player);
        }
    }
}; 
Network.addServerPacket("dc.set", function(client, data) {
    manaPlayer = data;
});




// file: api/debug.js

var Debug = {
    lines: 0,
    message: function (text){
        if(__config__.getBool("debug.active")){
            this.lines += 1;
            if(this.lines >= __config__.getNumber("debug.lines")){
                this.lines = 0;
                this.clear();
            }
            FileTools.WriteText(__dir__+"/debug.log", text+"\n", true);
        }
        
    },
    clear: function (){
        FileTools.WriteJSON(__dir__+"/debug.log", ["debug"], false);
        this.message("clear log");
    }
};
Debug.clear();




// file: api/multiplayer.js

Network.addClientPacket("dc.particle", function(packetData) {
    Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("dc.message", function(packetData) {
    Game.message(packetData);
});
var Mp = {
    message: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("dc.message", text);
            Debug.message("message player - "+player+" text: "+text);
        }else{
            Debug.message("[error]message player - "+player);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz){
        var players = Network.getConnectedPlayers();
        for(var i in players){
            var client = Network.getClientForPlayer(players[i]);
            if(client){
                client.send("dc.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
                Debug.message("spawn particle");
            }else{
                Debug.message("[error]spawn particle");
            }
        }
    }
};




// file: api/renderAPI.js

let renderAPI = {
setCristalPidestal: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);
modelAPI.addBox (2/16, 0, 2/16, 14/16, 0.0625, 14/16, id, 0);

modelAPI.addBox (5/16, 0.0625, 5/16, 11/16, 0.9375, 11/16, id, 0);

modelAPI.addBox (3/16, 0.9375, 3/16, 13/16, 1, 13/16, id, 0);

}, 

setGlblock1: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.125, 15/16, id, 0);

modelAPI.addBox (6/16, 0.125, 6/16, 10/16, 0.9375, 10/16, id, 0);

modelAPI.addBox (4/16, 0.9375, 4/16, 12/16, 1, 12/16, id, 0);
}, 
steve: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.0625, 15/16, id, 0);

modelAPI.addBox (2/16, 0.0625, 2/16, 14/16, 0.125, 14/16, id, 0);

modelAPI.addBox (10/16, 0.125, 5/16, 8/16, 1, 12/16, id, 0);
}, 
ManaGenerator: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (0/16, 0, 0/16, 16/16, 0.125, 16/16, id, 0);
modelAPI.addBox (0/16, 0.875, 0/16, 16/16, 1, 16/16, id, 0);
modelAPI.addBox (0/16, 0.125, 0/16, 2/16, 0.875, 2/16, id, 0);
modelAPI.addBox (14/16, 0.125, 14/16, 16/16, 0.875, 16/16, id, 0);
modelAPI.addBox (14/16, 0.125, 0/16, 16/16, 0.875, 2/16, id, 0);
modelAPI.addBox (0/16, 0.125, 14/16, 2/16, 0.875, 16/16, id, 0);
modelAPI.addBox (11/16, 0.125, 11/16, 5/16, 0.3125, 5/16, id, 0);


}, 
setblock: function (id, obj, texture) {
let file = __dir__ + "/res/model/" + obj;
var mesh = new RenderMesh();
var renderAPI = new ICRender.Model(); 
BlockRenderer.setStaticICRender(id, -1, renderAPI); 
var modelAPI = new BlockRenderer.Model(mesh);  

           renderAPI.addEntry(modelAPI);
mesh.importFromFile(file, "obj", null);
mesh.setBlockTexture(texture, 0);
} 
};




// file: api/DungeonAPI.js

function setStructure (file, dimension, x, y, z){
    let structure  = Dungeon.getStructure(file);
    for(i in structure){
        let identifier = getIdentifier(structure[i]);
        x = identifier.x + x;
        y = identifier.y + y;
        z = identifier.z + z;
        let blockSource = BlockSource.getDefaultForDimension(dimension)
        blockSource.setBlock(x, y, z, identifier.id, identifier.data)
    }
}




// file: api/Recipes.js

var dungeonRuneCtol = {

    recipesRack: [],
	recipesAltar: [],

   recipesRackRecipe: function (recipe) {
        this.recipesRack.push(recipe);
    },

    getRackRecipe: function (id, data) {
        for (var key in this.recipesRack) {
            var recipe = this.recipesRack[key];
            if (recipe.input.id === id && recipe.input.data === data) {
                return recipe;
            }
        }
    },
	
	recipesAltarRecipe: function (recipe) {
        this.recipesAltar.push(recipe);
    },
	
   getAltarRecipe: function (input) {
         for (var i = 0; i < this.recipesAltar.length; i++) {

            if (input[0].id == this.recipesAltar[i].Source1.id) {
                if (input[0].data == this.recipesAltar[i].Source1.data) {
                    if (input[0].count >= this.recipesAltar[i].Source1.count) {

                        if (input[1].id == this.recipesAltar[i].Source2.id) {
                            if (input[1].data == this.recipesAltar[i].Source2.data) {
                                if (input[1].count >= this.recipesAltar[i].Source2.count) {
									
	 if (input[2].id == this.recipesAltar[i].Source3.id) {
                            if (input[2].data == this.recipesAltar[i].Source3.data) {
                                if (input[2].count >= this.recipesAltar[i].Source3.count) {
									
									 if (input[3].id == this.recipesAltar[i].Source4.id) {
                            if (input[3].data == this.recipesAltar[i].Source4.data) {
                                if (input[3].count >= this.recipesAltar[i].Source4.count) {
									
									 if (input[4].id == this.recipesAltar[i].Source5.id) {
                            if (input[4].data == this.recipesAltar[i].Source5.data) {
                                if (input[4].count >= this.recipesAltar[i].Source5.count) {
									
									 if (input[5].id == this.recipesAltar[i].Source6.id) {
                            if (input[5].data == this.recipesAltar[i].Source6.data) {
                                if (input[5].count >= this.recipesAltar[i].Source6.count) {
									
									 if (input[6].id == this.recipesAltar[i].Source7.id) {
                            if (input[6].data == this.recipesAltar[i].Source7.data) {
                                if (input[6].count >= this.recipesAltar[i].Source7.count) {
									
				 
									
                                    return this.recipesAltar[i];

                                
							
				 
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
	  }
};




// file: api/Particles.js

Math.sign = Math.sign || function(x) { 
    x = +x;
    if (x === 0) { 
        return x; 
    } 
    return x > 0 ? -0.1 : 0.1; 
}
var ParticlesAPI = {
   particles: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    getVector: function (pos1, pos2){
        let vector = {
            x: Math.sign(pos1.x-pos2.x),
            y: Math.sign(pos1.y-pos2.y),
            z: Math.sign(pos1.z-pos2.z)
        }
        return vector;
    },
    coords: function(texture, time, size, x1, y1, z1, x2, y2, z2){
        let particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        var vx = -((x1 + 0.5) - (x2 + 0.5)) / time;
        var vy = -((y1 + 0.5) - (y2 + 0.5)) / time;
        var vz = -((z1 + 0.5) - (z2 + 0.5)) / time;
        Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z1 + 0.5, vx, vy, vz);
    },
    spawnLine: function (texture, time, size, x1, y1, z1, x2, y2, z2, count){
        var particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        for(i = 0; i<=count;i++){
            var x = x1 + (-(x1 - x2)) * (i / count);
            var y = y1 + (-(y1 - y2)) * (i / count);
            var z = z1 + (-(z1 - z2)) * (i / count);
            Mp.spawnParticle(particles, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
        }
    },
    spawnCircle: function (texture, time, size, x, y, z, radius, count, rotation){
        var particles = Particles.registerParticleType({
            texture: texture,
            render: 2,
            size: size,
            lifetime:[time, time],
            animators: {
                alpha:{fadeIn: .4, fadeOut: .4},
                size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
            }
        });
        let angle = 0;
        let step = 360 / count;
        if(rotation == 0){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 1){
            for(i = 0;i < 360;i+=step){
                let z1 = z + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x + 0.5, y1 + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 2){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let z1 = z - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
    },
    spawnCircleVector: function (time, particle, x, y, z, radius, count){
        let angle = 0;
        let step = 360 / count;
        for(i = 0;i < 360;i+=step){
            let x1 = x + radius * Math.cos(i);
            let z1 = z - radius * Math.sin(i);
            Mp.spawnParticle(particle, x1 + 0.5, y + 0.5, z1 + 0.5, -Math.sign(x1 - x), 0, -Math.sign(z1 - z));
        }
    }
};
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
    ParticlesAPI.spawnCircleVector(1000, ParticlesAPI.particles, coords.x, coords.y, coords.z, 1, 19);
});




// file: api/Entity.js

Entity.prot = [];
Entity.setPrototype = function (obj){
    Entity.prot[obj.entity] = obj;
};
Entity.getPrototype = function (entity){
    return Entity.prot[entity];
};
Entity.isPrototype = function (entity){
    if(Entity.prot[entity]){
        return true;
    }
};
Callback.addCallback("LocalTick", function(){
    let key = Object.keys(Entity.prot);
    for(i in key){
        if(Entity.isPrototype(key[i])){
            let prot = Entity.getPrototype(key[i]);
            if(prot.tick)
                prot.tick();
        }
    }
});
Callback.addCallback("EntityDeath", function (entity, attacker, damageType){
    if(Entity.isPrototype(entity)){
        Entity.prot[entity] = {};
    }
});




// file: structure.js

function getBlockSource(dimension){
    let blockSource = BlockSource.getDefaultForDimension(dimension);
    blockSource = BlockSource.getCurrentWorldGenRegion();
    return blockSource;
}
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
        if (Math.random()*600<= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("cokroviwnisa_end.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y+1, coords.z, id);
        }
});

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*550 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("name.json", coords.x, coords.y, coords.z, 0, id);
Item2.fillChest(coords.x, coords.y+1, coords.z, id);
}
});
var StructureRuinEnd = new DungeonAPI("ruin_end.json");
StructureRuinEnd.setPrototype({
    isSetBlock: function(x, y, z, id, data, identifier, packet, dimension){
        if(id == 206){
            return false;
            let blockSource = getBlockSource(dimension);
            blockSource.setBlock(x, y, z, 121, 0);
        }else{
            return true;
        }
    }
});
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*400 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureRuinEnd.setStructure(coords.x, coords.y, coords.z, 0, id);
}
});

var StructureGrobnisa = new DungeonAPI("grobnisa.json");
StructureGrobnisa.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
                case 98:
                    blockSource.setBlock(x, y, z, 98, 1);
                break;
                case 139:
                    blockSource.setBlock(x, y, z, 139, 8);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*2200 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa.setStructure(coords.x, coords.y, coords.z, 0, id);
Item2.fillChest(coords.x, coords.y+2, coords.z-2, id);
Item2.fillChest(coords.x, coords.y+2, coords.z+3, id);
Item2.fillChest(coords.x+2, coords.y+2, coords.z-2, id);
Item2.fillChest(coords.x+4, coords.y+2, coords.z+3, id);
}
});

var StructureGrobnisa2 = new DungeonAPI("grobnisa2.json");
StructureGrobnisa2.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
                case 98:
                    blockSource.setBlock(x, y, z, 98, 1);
                break;
                case 139:
                    blockSource.setBlock(x, y, z, 139, 8);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*2800 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa2.setStructure(coords.x, coords.y, coords.z);
Item6.fillChest(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x+3, coords.y+4, coords.z-3, 0, id);
Item2.fillChest(coords.x-3, coords.y+4, coords.z-3, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*2500 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("structure.json", coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*100 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            
Dungeon.setStructure("bawna_ada.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y+7, coords.z, 0, id);
            Item2.fillChest(coords.x-2, coords.y+11, coords.z+2, 0, id);
            Item2.fillChest(coords.x+2, coords.y+11, coords.z+2, 0, id);
            Item2.fillChest(coords.x-2, coords.y+11, coords.z-2, 0, id);
            Item2.fillChest(coords.x+2, coords.y+11, coords.z-2, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*150 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("cokrovewnisa.json", coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x, coords.y+2, coords.z, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*250 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("labirint_ada.json", coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x-5, coords.y+1, coords.z-2, 0, id);
Item2.fillChest(coords.x-4, coords.y+1, coords.z, 0, id);
Item2.fillChest(coords.x+3, coords.y+1, coords.z+4, 0, id);
Item2.fillChest(coords.x+4, coords.y+1, coords.z-5, 0, id);
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*1750 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("bawna.json", coords.x, coords.y, coords.z);

Item3.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*1250 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("ruin.json", coords.x, coords.y, coords.z, 0, id);

Item3.fillChest(coords.x-1, coords.y+1, coords.z+1, 0, id);
Item2.fillChest(coords.x+1, coords.y+10, coords.z, 0, id);
}
});
var StructurePiramid = new DungeonAPI("piramida.json");
StructurePiramid.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*3000 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructurePiramid.setStructure(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x+3, coords.y+1, coords.z+3, 0, id);
Item2.fillChest(coords.x+3, coords.y+1, coords.z-3, 0, id);
Item2.fillChest(coords.x-3, coords.y+1, coords.z+3, 0, id);
Item2.fillChest(coords.x-3, coords.y+1, coords.z-3, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*350 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 200);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 87){
            Dungeon.setStructure("piramida_ada.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y, coords.z, 0, id);
        }
}      
});




// file: block/magisBlock.js

IDRegistry.genBlockID("MagicStorage"); 
Block.createBlock("MagicStorage", [{name: "Magic storage", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
Translation.addTranslation("Magic storage", {ru: "магичиский накопитель"});

TileEntity.registerPrototype(BlockID.MagicStorage, {
     defaultValues: {
          player: null,
     },
     client: {
         events: {
             particles: function (packet){
                 Particles.addParticle(Native.ParticleType.flame, packet.x+Math.random(), packet.y+1+Math.random(), packet.z+Math.random(), 0, 0, 0, 0);
             }
         }
     },
     tick: function(){
         if(this.data.player)
if (this.blockSource.getBlock(this.x-1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+2).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-2).id != BlockID.MagicStorage){
         let mana = ManaCore.get(this.data.player);
         let per1 = mana.countMax
         per1 = mana.countMax / 100 * 20; 
         per1 = mana.countMax - per1;
         if(mana.count+1<=per1){
mana.count++;
Mp.spawnParticle(7, this.x+Math.random(), this.y+1+Math.random(), this.z+Math.random(), 0, 0, 0);
ManaCore.set(this.data.player, mana);
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
}
}
}
     },
     click: function (id, count, data, coords, player){
         this.data.player = player;
         Mp.message(player, "блок привязан к вам");
     }
});




// file: block/BlockRegister.js

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













// file: block/generation.js

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coords.x, coords.y, coords.z)==1){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristaldirt, 0);
} 
}
} 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coords.x, coords.y, coords.z)==87){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalFire, 0);
} 
}
} 
});



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 70, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        
if(World.getBlockID(coords.x, coords.y, coords.z)==1){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalwind, 0);
} 
}
} 
});











// file: block/key.js

IDRegistry.genBlockID("brickkey");
Block.createBlock("brickkey", [ {name: "brickkey", texture: [["brickBlock", 1],["brickBlock", 1],["keyBlock", 0],["keyBlock", 0],["brickBlock", 0]], inCreative: false}]);

Translation.addTranslation("brickkey", {ru: "блок с входом под ключ"});

Block.setDestroyTime(BlockID.brickkey, 9999999999999);

var renderChest = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brickkey, -1, renderChest); 
     var modelChest = BlockRenderer.createModel(); 
           renderChest.addEntry(modelChest);
modelChest.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brickkey, 0);

IDRegistry.genBlockID("brick3");
Block.createBlock("brick3", [ {name: "brickkey2", texture: [["brickBlock", 1],["brickBlock", 1],["brick2", 0],["brick2", 0],["brickBlock", 0]], inCreative: false}]);

Block.setDestroyTime(BlockID.brick3, 9999999999999);

Translation.addTranslation("brickkey2", {ru: "тонкая стена"});

var renderChest2 = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brick3, -1, renderChest2); 
     var modelChest2 = BlockRenderer.createModel(); 
           renderChest2.addEntry(modelChest2);
modelChest2.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brick3, 0);





// file: block/storageMana.js

IDRegistry.genBlockID("manaStorage");
Block.createBlock("manaStorage", [ {name: "mana Storage", texture: [["brick2", 0]], inCreative: true}]);

Translation.addTranslation("mana Storage", {ru: "хранилище маны"});

var Particles = ModAPI.requireGlobal("Particles");
TileEntity.registerPrototype(BlockID.manaStorage, {

     defaultValues: {
         mode: "nothing",
         manaStorage: 0,
         player: null 
     },
     tick: function(){
         if(this.data.mode=="give"){
             let mana = ManaCore.get(this.data.player);
             let per1 = mana.countMax;
             per1 = mana.countMax / 100 * 5; 
             per1 = mana.countMax - per1;
             if(mana.count<=per1-1){
                 if(this.data.manaStorage>=1){
                     mana.count++;
                     ManaCore.set(this.data.player, mana);
                     this.data.manaStorage--;
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords("rai_particle", 40, [3,3], this.x, this.y, this.z, pos.x, pos.y, pos.z);
                 }
             }
         }
         if(this.data.mode=="accumulate"){
             let mana = ManaCore.get(this.data.player);
             if(this.data.manaStorage<=19999){
                 if(mana.count>=1){
                     mana.count--;
                     this.data.manaStorage++;
                     ManaCore.set(this.data.player, mana);
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords("rai_particle", 40, [3,3], pos.x, pos.y, pos.z, this.x, this.y, this.z);
                 }
             }
         }
     },
     click: function(id, count, data, coords, player){
         if(Entity.getSneaking(player)==true){
             Mp.message(player,  "mana: " + this.data.manaStorage + ";");
         }else{
             if(this.data.player != player){
                 this.data.player = player;
                 Mp.message(player, "блок привязан к вам");
             }else{
                 let v = true;
                 if(this.data.mode=="accumulate"){
                     if(v==true){
                         v = false;
                         this.data.mode="give";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="nothing"){
                     if(v==true){
                         v = false;
                         this.data.mode="accumulate";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="give"){
                     if(v==true){
                         v = false;
                         this.data.mode="nothing";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 v = true;
             }
         }
     }
});

var mesh2 = new RenderMesh();
var renderAPI2 = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.manaStorage, -1, renderAPI2); 
var modelAPI2 = new BlockRenderer.Model(mesh2);  

           renderAPI2.addEntry(modelAPI2);
mesh2.importFromFile(__dir__ + "/res/model/magis_storage.obj", "obj", null);
mesh2.setBlockTexture("storage-mana", 0);

ItemModel.getFor(BlockID.manaStorage, 0).setModUiSpriteName("storage-mana", 0);























// file: block/ritual/rune.js

var runeAltarDungeon = new UI.StandartWindow({
    standart: {
        header: {text: {text: "рунный алтарь/Rule Altar"}},
         inventory: {standart: true},
     
    },

    drawing: [
    ],

    elements: {
		"slotRes": {type: "slot", x: 630, y: 20, bitmap: "slot"},
		"slot2": {type: "slot", x: 530, y: 120, bitmap: "slot"},
		"slot3": {type: "slot", x: 430, y: 220, bitmap: "slot"},
		"slot4": {type: "slot", x: 530, y: 320, bitmap: "slot"},
		"slot5": {type: "slot", x: 730, y: 120, bitmap: "slot"},
		"slot6": {type: "slot", x: 830, y: 220, bitmap: "slot"},
		"slot7": {type: "slot", x: 730, y: 320, bitmap: "slot"},

		"slot1": {type: "slot", x: 630, y: 220, bitmap: "slot"}
    }
});




IDRegistry.genBlockID("runeAltarDungeon");
Block.createBlock("runeAltarDungeon", [ {name: "Rule Altar", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true}]);

Translation.addTranslation("Rule Altar", {ru: "рунный алтарь"});

Render.setRitualAltarRender(BlockID.runeAltarDungeon, true);

TileEntity.registerPrototype(BlockID.runeAltarDungeon, {
	defaultValues: {
		progress: 0
	},
useNetworkItemContainer: true,
	tick: function(){
		 var slotResult = this.container.getSlot("slotResult");
		
	  
	   var slotSource1 = this.container.getSlot("slot1");
	    var slotSource2 = this.container.getSlot("slot2");
	    var slotSource3 = this.container.getSlot("slot3");
	    var slotSource4 = this.container.getSlot("slot4");
	    var slotSource5 = this.container.getSlot("slot5");
	    var slotSource6 = this.container.getSlot("slot6");
	    var slotSource7 = this.container.getSlot("slot7");
	    var slotResult = this.container.getSlot("slotRes");

		var input = [slotSource1, slotSource2, slotSource3, slotSource4, slotSource5, slotSource6, slotSource7];
		
        var output = dungeonRuneCtol.getAltarRecipe(input);
		
	   if (output){
		   this.data.progress++;
		   if (this.data.progress++ >= 40){
 slotSource1.count--;
 slotSource2.count--;
 slotSource3.count--;
 slotSource4.count--;
 slotSource5.count--;
 slotSource6.count--;
 slotSource7.count--;

 
 slotSource2.id = output.backItem1.id;
 slotSource5.id = output.backItem2.id;
 slotSource2.data = output.backItem1.data;
 slotSource5.data = output.backItem2.data;
 slotSource2.count += output.backItem1.count;
 slotSource5.count += output.backItem2.count;
 
 slotResult.id = output.Result.id;
 slotResult.data = output.Result.data;
 slotResult.count += output.Result.count;
  this.data.progress = 0;
		   }
	 }  
this.container.validateAll(); 

	},
getScreenName: function(player, coords) {
return "runeAltarDungeon";
},
	
	getScreenByName: function(screenName) {
		return runeAltarDungeon; 
	}
	

});



/*
  R
 2 5
3 1 6
 4 7
*/
const empty = 0;


dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.manysript2, data: 0, count: 1},
	Source2: {id: ItemID.rune3, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.rune4, data: 0, count: 1},
	Source5: {id: ItemID.rune4, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.rune3, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.Scroll6, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.manysript2, data: 0, count: 1},
	Source2: {id: ItemID.rune4, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.rune4, data: 0, count: 1},
	Source5: {id: ItemID.rune4, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.rune4, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.Scroll1, data: 0, count: 1}, 
});
dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.manysript2, data: 0, count: 1},
	Source2: {id: ItemID.rune4, data: 0, count: 1},
	Source3: {id: ItemID.clitok, data: 0, count: 1},
	Source4: {id: ItemID.rune4, data: 0, count: 1},
	Source5: {id: ItemID.rune4, data: 0, count: 1},
	Source6: {id: ItemID.clitok, data: 0, count: 1},
	Source7: {id: ItemID.rune4, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.Scroll2, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.manysript2, data: 0, count: 1},
	Source2: {id: ItemID.rune1, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.rune1, data: 0, count: 1},
	Source5: {id: ItemID.rune1, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.rune1, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.Scroll4, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: BlockID.stone2, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.koin_1, data: 0, count: 1},
	Source4: {id: ItemID.clitok1, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.koin_1, data: 0, count: 1},
	Source7: {id: ItemID.clitok1, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: BlockID.altar, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.sword_2, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.clitok, data: 0, count: 1},
	Source4: {id: 280, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.clitok, data: 0, count: 1},
	Source7: {id: 280, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.sword_1, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.pickaxe_2, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: 280, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: 280, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxe_1, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.armor5, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.clitok, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.clitok, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.armor1, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.armor6, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.clitok1, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.clitok1, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.armor2, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.armor7, data: 0, count: 1},
	Source2: {id: ItemID.clitok1, data: 0, count: 1},
	Source3: {id: ItemID.clitok, data: 0, count: 1},
	Source4: {id: ItemID.clitok1, data: 0, count: 1},
	Source5: {id: ItemID.clitok1, data: 0, count: 1},
	Source6: {id: ItemID.clitok, data: 0, count: 1},
	Source7: {id: ItemID.clitok1, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.armor3, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: ItemID.armor8, data: 0, count: 1},
	Source2: {id: ItemID.clitok, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.clitok1, data: 0, count: 1},
	Source5: {id: ItemID.clitok, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.clitok1, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.armor4, data: 0, count: 1}, 
});

dungeonRuneCtol.recipesAltarRecipe({
	Source1: {id: BlockID.rityal1, data: 0, count: 1},
	Source2: {id: ItemID.crystalLightning, data: 0, count: 1},
	Source3: {id: ItemID.clitok1, data: 0, count: 1},
	Source4: {id: ItemID.crystalearth, data: 0, count: 1},
	Source5: {id: ItemID.crystalWind, data: 0, count: 1},
	Source6: {id: ItemID.clitok1, data: 0, count: 1},
	Source7: {id: ItemID.crystalfire, data: 0, count: 1},

	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: BlockID.rityal, data: 0, count: 1}, 
});





























// file: block/Rityal1.js

IDRegistry.genBlockID("statua");
Block.createBlock("statua", [ {name: "The statue of the Nezhi", texture: [["ctena", 1],["ctena", 1],["vvex", 1]], inCreative: true}]);

Translation.addTranslation("The statue of the Nezhi", {ru: "статуя нежити"});

var render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.statua, -1, render); 
     var model = BlockRenderer.createModel(); 
           render.addEntry(model);
model.addBox (6/16, 0, 6/16, 10/16, 0.29, 10/16, BlockID.statua, 0);
model.addBox (3/16, 0.30, 3/16, 13/16, 0.80, 13/16, BlockID.statua, 0);

IDRegistry.genBlockID("ritualGL");
Block.createBlock("ritualGL", [ {name: "Pedestal for statues", texture: [["testN", 0],["testV", 0],["testC", 0]], inCreative: true}]);

Translation.addTranslation("Pedestal for statues", {ru: "пьедестал длс статуй"});

var render1 = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.ritualGL, -1, render1); 
     var model1 = BlockRenderer.createModel(); 
           render1.addEntry(model1);
model1.addBox (2/16, 0, 2/16, 14/16, 0.90, 14/16, BlockID.ritualGL, 0);
model1.addBox (3/16, 0.91, 3/16, 13/16, 1, 13/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 2/16, 16/16, 0.50, 14/16, BlockID.ritualGL, 0);

model1.addBox (16/16, 0, 2/16, 0/16, 0.50, 14/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 16/16, 16/16, 0.50, 0/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 0/16, 16/16, 0.50, 16/16, BlockID.ritualGL, 0);

var Ritual = {};
Ritual.arr1 = [];
Ritual.addCraft1 = function (id, obj, func){
    Ritual.arr1.push({id: id, obj: obj, func: func});
};
Ritual.get1 = function (it){
    for(var i in Ritual.arr1){
        if(Ritual.arr1[i].id == it){
            return Ritual.arr1[i];
        }else{
            return {id: 0, obj: {xp: 0, xm: 0, zp: 0, zm: 0, mana: 0}, func: function(player, x, y, z){}};
        }
    }
};
TileEntity.registerPrototype(BlockID.statua, {
    defaultValues: {
        active: false,
        mana: 0, 
        player: null
    },
    check: function (id, x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.rityal1){
            if(TileEntity.getTileEntity(x, y, z, this.blockSource).data.item.id == id){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    click: function (id, count, data, coords, player){
        if(id == ItemID.RitualActivator){
            this.data.active = true;
            this.data.player = player;
        }
    },
    manaAdd: function (x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(x, y, z, this.blockSource).data.manaStorage <= 19999){
                let mana = ManaCore.get(this.data.player);
                if(mana.count>=1){
                    let pos = Entity.getPosition(this.data.player);
                    ParticlesAPI.coords("rai_particle", 40, [3,3], pos.x, pos.y, pos.z, x, y, z);
                    mana.count--;
                    ManaCore.set(this.data.player, mana);
                    TileEntity.getTileEntity(x, y, z, this.blockSource).data.manaStorage++;
                }
            }
        }
    },
    getMana: function (){
        let mana = 0;
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z+2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x+2, this.y-1, this.z+2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z+2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x-2, this.y-1, this.z+2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z-2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x+2, this.y-1, this.z-2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z-2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x-2, this.y-1, this.z-2, this.blockSource).data.manaStorage;
        }
        return mana;
    },
    getCountStorage: function (){
        let count = 0;
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z+2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x+2, this.y-1, this.z+2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z+2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x-2, this.y-1, this.z+2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z-2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x+2, this.y-1, this.z-2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z-2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x-2, this.y-1, this.z-2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        return count;
    },
    delMana: function (x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.manaStorage){
            ParticlesAPI.coords("mana", 40, [3,3], x, y, z, this.x, this.y, this.z);
            let te = TileEntity.getTileEntity(x, y, z, this.blockSource);
            let mana = this.data.mana / this.getCountStorage();
            if(this.data.mana<=te.data.manaStorage){
                te.data.manaStorage = 0;
                this.data.mana = 0;
            }else{
                te.data.manaStorage = 0;
                this.data.mana = 0;
            }
            
        }
    },
    tick: function (){
        if(this.data.player){
            for(i in Ritual.arr1){
                let obj = Ritual.arr1[i].obj;
                let func = Ritual.arr1[i].func;
                if(this.check(obj.xp, this.x+2, this.y-1, this.z)){
                    if(this.check(obj.xm, this.x-2, this.y-1, this.z)){
                        if(this.check(obj.zp, this.x, this.y-1, this.z+2)){
                            if(this.check(obj.zm, this.x, this.y-1, this.z-2)){
                                if(this.blockSource.getBlockId(this.x, this.y-1, this.z)==BlockID.ritualGL){
                                this.manaAdd(this.x+2, this.y-1, this.z+2);
                                this.manaAdd(this.x-2, this.y-1, this.z+2);
                                this.manaAdd(this.x+2, this.y-1, this.z-2);
                                this.manaAdd(this.x-2, this.y-1, this.z-2);
                                ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x+2, this.y, this.z, this.x, this.y, this.z);
                                ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x-2, this.y, this.z, this.x, this.y, this.z);
                                ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x, this.y, this.z+2, this.x, this.y, this.z);
                                ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x, this.y, this.z-2, this.x, this.y, this.z);
                                this.data.mana = this.getMana();
                                if(this.data.mana>=obj.mana){
                                    this.delMana(this.x+2, this.y-1, this.z+2);
                                    this.delMana(this.x-2, this.y-1, this.z+2);
                                    this.delMana(this.x+2, this.y-1, this.z-2);
                                    this.delMana(this.x-2, this.y-1, this.z-2);
                                    
        TileEntity.getTileEntity(this.x, this.y-1, this.z-2, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x, this.y-1, this.z+2, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x+2, this.y-1, this.z, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x-2, this.y-1, this.z, this.blockSource).destroyAnimation();
        this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, Ritual.arr1[i].id, 1, 0, null);
        this.blockSource.spawnEntity(this.x, this.y+1, this.z, 93);
        func(this.data.player, this.x, this.y, this.z);
        this.data.active = false;
            this.data.player = null;
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
IDRegistry.genBlockID("gubok1");
Block.createBlock("gubok1", [ {name: "Pedestal for Christalov", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true}]);

renderAPI.setCristalPidestal(BlockID.gubok1);

Translation.addTranslation("Pedestal for Christalov", {ru: "Пьедестал для криссталов"});

IDRegistry.genBlockID("gubok2");
Block.createBlock("gubok2", [ {name: "Cruster's growth controller", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true}]);

renderAPI.setGlblock1(BlockID.gubok2);

Translation.addTranslation("Cruster's growth controller", {ru: "Контроллер роста криссталов"});
Ritual.arr2 = [];
Ritual.addGrowth = function (id){
    
}
TileEntity.registerPrototype(BlockID.gubok2, {
    defaultValues: {
        progres: 0
    },
    check: function (id){
        if(this.blockSource.getBlockId(this.x+2, this.y, this.z+2)==BlockID.gubok1){
            if(this.blockSource.getBlockId(this.x-2, this.y, this.z+2)==BlockID.gubok1){
                if(this.blockSource.getBlockId(this.x+2, this.y, this.z-2)==BlockID.gubok1){
                    if(this.blockSource.getBlockId(this.x-2, this.y, this.z-2)==BlockID.gubok1){
        if(this.blockSource.getBlockId(this.x+2, this.y+1, this.z+2)==id){
            if(this.blockSource.getBlockId(this.x-2, this.y+1, this.z+2)==id){
                if(this.blockSource.getBlockId(this.x+2, this.y+1, this.z-2)==id){
                    if(this.blockSource.getBlockId(this.x-2, this.y+1, this.z-2)==id){
                        if(this.blockSource.getBlockId(this.x, this.y+1, this.z)==0){
                        if(this.data.progres>=200){
                          this.data.progres = 0;!
                           ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x+2, this.y+1, this.z+2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x-2, this.y+1, this.z+2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x+2, this.y+1, this.z-2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords("EnchantedForest_particle", 40, [3,3], this.x-2, this.y+1, this.z-2, this.x, this.y+1, this.z);
                            this.blockSource.setBlock(this.x, this.y+1, this.z, id, 0);
                        }else{
                            this.data.progres++;
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x+2+Math.random()-Math.random(), this.y+1+Math.random()-Math.random(), this.z+2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x-2+Math.random()-Math.random(), this.y+0.9, this.z+2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x+2+Math.random()-Math.random(), this.y+0.9, this.z-2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x-2+Math.random()-Math.random(), this.y+0.9, this.z-2+Math.random()-Math.random(), 0, 0, 0);
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
    },
    tick: function (){
        this.check(1);
    }
})




// file: ItemGenerate.js

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
    IDRegistry.genItemID("present"); 
Item.createItem("present", "present", {name: "present", meta: 0}, {stack: 1});
    Translation.addTranslation("present", {ru: "подарок"});
        Item2.addItem(ItemID.present, 0.1, {max:1});
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
Item3.addItem(ItemID.koin_1, 0.01, {max:1})
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
Item5.addItem(265, 0.4, {max:10});
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
Item6.registerRecipeViewer("Generate6", "генерация предметов");




// file: items/magic.js

IDRegistry.genItemID("RitualActivator"); 
Item.createItem("RitualActivator", "Ritual activator", {name: "Ritual_activator", meta: 0}, {stack: 1});
Translation.addTranslation("Ritual activator", {ru: "Ритуальный активатор"});

Item.registerUseFunctionForID(ItemID.RitualActivator, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    Mp.message(player, mana.count+"/"+mana.countMax);
    let pa = new PlayerActor(player);
    let bs = BlockSource.getDefaultForActor(player);
    if(Dungeon.isStructure("ritualUpdate.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        for(i in Ritual.arr2){
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            let obj = Ritual.arr2[i];
            if(te.data.item.id==obj.id){
                if(mana.count>=obj.mana){
                    mana.count-=obj.mana;
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, obj.result, 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    if(Dungeon.isStructure("ritualEnchant.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        let keys = Object.keys(Ritual.obj3);
        for(i in keys){
            let key = keys[i];
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            if(te.data.item.id==key){
                 if(mana.count>=Ritual.obj3[key].obj.mana){
                    let count = Ritual.obj3[key].arr.length - 1;
                    mana.count-=Ritual.obj3[key].obj.mana;
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, Ritual.obj3[key].arr[Math.floor(Math.random()*count)], 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("DarkSphere"); 
Item.createItem("DarkSphere", "Dark sphere", {name: "Dark_sphere", meta: 0}, {stack: 1});
Translation.addTranslation("Dark sphere", {ru: "тёмная сфера"});

Item.registerUseFunctionForID(ItemID.DarkSphere, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    let random = Math.floor(Math.random()*2000);
    mana.countMax += random;
    Mp.message(player, "ваш максимальный запас маны увеличин на "+random);
    delItem(player, item);
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("manysript1"); 
Item.createItem("manysript1", "Manuscript", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript", {ru: "манускрипт"});

IDRegistry.genItemID("manysript2"); 
Item.createItem("manysript2", "Manuscript Knowledge: Basics", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript Knowledge: Basics", {ru: "манускрипт знание: основы"});
Item.setGlint(ItemID.manysript2, true);



IDRegistry.genItemID("Drune0"); 
Item.createItem("Drune0", "Empty rune", {name: "Drune", meta: 0}, {stack: 1});
Translation.addTranslation("Empty rune", {ru: "пустая руна"});

IDRegistry.genItemID("Drune1"); 
Item.createItem("Drune1", "fire rune", {name: "Drune", meta: 1}, {stack: 1});
Translation.addTranslation("fire rune", {ru: "руна огня"});
Item.setGlint(ItemID.Drune1, true);

IDRegistry.genItemID("Drune2"); 
Item.createItem("Drune2", "Earth rune", {name: "Drune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "руна земли"});
Item.setGlint(ItemID.Drune2, true);

IDRegistry.genItemID("Drune3"); 
Item.createItem("Drune3", "Wind rune", {name: "Drune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "руна ветра"});
Item.setGlint(ItemID.Drune3, true);

IDRegistry.genItemID("Drune4"); 
Item.createItem("Drune4", "The rune of light", {name: "Drune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "руна света"});
Item.setGlint(ItemID.Drune4, true);

Item.addCreativeGroup("runes", Translation.translate("Runes"), [
    	ItemID.Drune0,
	   ItemID.Drune1,
	   ItemID.Drune2,
	   ItemID.Drune3,
	   ItemID.Drune4, 
]);

IDRegistry.genItemID("sapling10"); 
Item.createItem("sapling10", "sapling", {name: "sapling", meta: 0}, {stack: 64});

Translation.addTranslation("sapling", {ru: "саженец"});




// file: items/ItemsRegister.js



Item.registerUseFunction("sapling10", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
 if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.sap, 0);
delItem(player, item);
} 
	} 
	});
/*
IDRegistry.genItemID("magis_book"); 
Item.createItem("magis_book", "magis book", {name: "magis_book", meta: 0}, {stack: 1});

Translation.addTranslation("magis book", {ru: "книга магии"});

Item.setGlint(ItemID.magis_book, true);
*/
IDRegistry.genItemID("Berries"); 
Item.createFoodItem("Berries", "Berries", {name: "Berries", meta: 0}, {stack: 64, food: 2});

Translation.addTranslation("Berries", {ru: "ягоды"});

Item.registerUseFunction("Berries", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
delItem(player, item);
	} 
	});

IDRegistry.genItemID("crystalfire"); 
Item.createItem("crystalfire", "crystal fire", {name: "crystalfire", meta: 0}, {stack: 1});

Translation.addTranslation("crystal fire", {ru: "крисстал огня"});

Item.registerUseFunction("crystalfire", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalFire, 0);
delItem(player, item);
} 
} 
	} 
	});


IDRegistry.genItemID("crystalearth"); 
Item.createItem("crystalearth", "crystal earth", {name: "crystalearth", meta: 0}, {stack: 1});

Item.registerUseFunction("crystalearth", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristaldirt, 0);
delItem(player, item);
}
} 
	} 
	});

Translation.addTranslation("crystal earth", {ru: "крисстал земли"});

IDRegistry.genItemID("crystalWind"); 
Item.createItem("crystalWind", "crystal Wind", {name: "crystalWind", meta: 0}, {stack: 1});

Translation.addTranslation("crystal Wind", {ru: "крисстал ветра"});

Item.registerUseFunction("crystalWind", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(Entity.getSneaking(player) == true){
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalwind, 0);
delItem(player, item);
} 
} 
	} 
	});

IDRegistry.genItemID("crystalLightning"); 
Item.createItem("crystalLightning", "crystal Lightning", {name: "crystalLightning", meta: 0}, {stack: 1});

Item.registerUseFunction("crystalLightning", function(coords, item, block, player){
if(Entity.getSneaking(player) == true){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalLight, 0);
delItem(player, item);
} 
} 
	} 
	});
Translation.addTranslation("crystal Lightning", {ru: "крисстал молнии"});

Item.addCreativeGroup("crystal", Translation.translate("Crystal"), [
	ItemID.crystalfire,
	ItemID.crystalearth,
	ItemID.crystalWind,
	ItemID.crystalLightning,
]);

IDRegistry.genItemID("ring"); 
Item.createItem("ring", "ring", {name: "ring", meta: 0}, {stack: 1});

Translation.addTranslation("ring", {ru: "кольцо с драгоценным камнем"});

IDRegistry.genItemID("Gem"); 
Item.createItem("Gem", "Gem", {name: "Gem", meta: 0}, {stack: 1});

Translation.addTranslation("Gem", {ru: "камень перемещения"});

IDRegistry.genItemID("GemEarth"); 
Item.createItem("GemEarth", "Gem Earth", {name: "GemEarth", meta: 0}, {stack: 1});

Translation.addTranslation("Gem Earth", {ru: "камень перемещения"});

IDRegistry.genItemID("Gem2"); 
Item.createItem("Gem2", "Gem", {name: "Gem", meta: 0}, {stack: 1});

Translation.addTranslation("Gem", {ru: "камень перемещения"});

Item.setGlint(ItemID.Gem2, true);

IDRegistry.genItemID("GemEarth2"); 
Item.createItem("GemEarth2", "Gem Earth", {name: "GemEarth", meta: 0}, {stack: 1});

Translation.addTranslation("Gem Earth", {ru: "камень перемещения"});

Item.setGlint(ItemID.GemEarth2, true);

Item.addCreativeGroup("gem", Translation.translate("Gem"), [
	ItemID.Gem,
	ItemID.GemEarth,
	ItemID.Gem2,
	ItemID.GemEarth2,
]);

IDRegistry.genItemID("glas"); 
Item.createItem("glas", "glas", {name: "glas", meta: 0}, {stack: 16});

Translation.addTranslation("glas", {ru: "глаз нежити"});

IDRegistry.genItemID("poic1"); 
Item.createItem("poic1", "Search for a flight", {name: "poic", meta: 0}, {stack: 1});

Translation.addTranslation("Search for a flight", {ru: "пояс полёта"});



IDRegistry.genItemID("amylet"); 
Item.createItem("amylet", "Breathing the breath", {name: "amylet", meta: 0}, {stack: 1});

Translation.addTranslation("Breathing the breath", {ru: "амулет дыхания"});

IDRegistry.genItemID("clitok"); 
Item.createItem("clitok", "Divine ingot", {name: "clitok", meta: 0}, {stack: 64});

Translation.addTranslation("Divine ingot", {ru: "божественый слиток"});

IDRegistry.genItemID("clitok1"); 
Item.createItem("clitok1", "Fur ingot", {name: "clitok", meta: 1}, {stack: 64});

Item.addCreativeGroup("ingot", Translation.translate("Ingot"), [
	ItemID.clitok,
	ItemID.clitok1,
]);

Translation.addTranslation("Fur ingot", {ru: "слиток огня"});

IDRegistry.genItemID("gotovka"); 
Item.createItem("gotovka", "Preparation", {name: "gotovka", meta: 0}, {stack: 1});

Translation.addTranslation("Preparation", {ru: "заготовка"});

IDRegistry.genItemID("bookxp"); 
Item.createItem("bookxp", "book xp", {name: "book_xp", meta: 0}, {stack: 64});

Item.registerUseFunction("bookxp", function(coords, item, block, player){
delItem(player, item);
let ac = new PlayerActor(player);
ac.addExperience(100);
});

Translation.addTranslation("book xp", {ru: "книга опыта"});

Item.setGlint(ItemID.bookxp, true);

IDRegistry.genItemID("koin_1"); 
Item.createItem("koin_1", "gold coin", {name: "koin", meta: 1}, {stack: 64});

Translation.addTranslation("gold coin", {ru: "золотая монета"});
Item.setGlint(ItemID.koin_1, true);


IDRegistry.genItemID("koin_0"); 
Item.createItem("koin_0", "Silver coin", {name: "koin", meta: 0}, {stack: 64});

Item.addCreativeGroup("koin", Translation.translate("Koin"), [
	ItemID.koin_0,
	ItemID.koin_1,
]);

Translation.addTranslation("Silver coin", {ru: "серебреная монета"});










// file: items/BaublesRegister.js


const searchItem = function (id, data, playeru) {
 var dat = data || -1;
 var od = id || -1;
	for(var i = 0;i < 9;i++) {
  var player = new PlayerActor(playeru);
	 var item = player.getInventorySlot(i);
		if((item.id == od || (od == -1 && item.id != 0)) && (item.data == dat || dat == -1)){
			return {
			    id: item.id,
			    data: item.data,
			    extra: item.extra,
			    count: item.count,
			    slot: i
			}
		}
	}
};

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead) {
  let mana = ManaCore.get(player);
if(searchItem(ItemID.amylet, 0, player)){
if(mana.count >= 1){
Entity.addEffect(player, Native.PotionEffect.waterBreathing, 20, 20, false, false)
mana.count-=1;
}
}else{
Entity.clearEffect(player, 13);
}
});













// file: items/armor.js

IDRegistry.genItemID("armor1");
Item.createArmorItem("armor1", "Fire helmet" , {name: "armor_fire", meta: 4}, {type: "helmet", armor: 7, durability: 6993, texture: "armor/armor1.png"}); 

Translation.addTranslation("Fire helmet", {ru: "огненый шлем"});

IDRegistry.genItemID("armor2");
Item.createArmorItem("armor2" , "fire chestplate", {name: "armor_fire", meta: 3}, {type: "chestplate", armor: 10, durability: 9102, texture: "armor/armor1.png"}); 

Translation.addTranslation("fire chestplate", {ru: "огненный нагрудник"});

IDRegistry.genItemID("armor3");
Item.createArmorItem("armor3", "fire leggings", {name: "armor_fire", meta: 2}, {type: "leggings", armor: 9, durability: 8103, texture: "armor/armor2.png"});

Translation.addTranslation("fire leggings", {ru: "огненные поножи"});

IDRegistry.genItemID("armor4");
Item.createArmorItem("armor4", "fire boots", {name: "armor_fire", meta: 1}, {type: "boots", armor: 6, durability: 6438, texture: "armor/armor1.png"});

Translation.addTranslation("fire boots", {ru: "огненые ботинки"});

IDRegistry.genItemID("armor5");
Item.createArmorItem("armor5", "Divine helmet" , {name: "armor", meta: 1}, {type: "helmet", armor: 5, durability: 2775, texture: "armor/armor4.png"}); 

Translation.addTranslation("Divine helmet", {ru: "божественый шлем"});

IDRegistry.genItemID("armor6");
Item.createArmorItem("armor6" , "Divine chestplate", {name: "armor", meta: 2}, {type: "chestplate", armor: 8, durability: 4440, texture: "armor/armor4.png"}); 

Translation.addTranslation("Divine chestplate", {ru: "божественый нагрудник"});

IDRegistry.genItemID("armor7");
Item.createArmorItem("armor7", "Divine leggings", {name: "armor", meta: 3}, {type: "leggings", armor: 7, durability: 3885, texture: "armor/armor3.png"});

Translation.addTranslation("Divine leggings", {ru: "божественые поножи"});

IDRegistry.genItemID("armor8");
Item.createArmorItem("armor8", "Divine boots", {name: "armor", meta: 4}, {type: "boots", armor: 4, durability: 2220, texture: "armor/armor4.png"});

Translation.addTranslation("Divine boots", {ru: "божественый ботинки"});

Item.addCreativeGroup("helmet", Translation.translate("Helmet"), [
	ItemID.armor1,
	ItemID.armor5,
]);
Item.addCreativeGroup("chestplate", Translation.translate("Chestplate"), [
	ItemID.armor2,
	ItemID.armor6,
]);
Item.addCreativeGroup("leggings", Translation.translate("Leggings"), [
	ItemID.armor3,
	ItemID.armor7,
]);
Item.addCreativeGroup("boots", Translation.translate("Boots"), [
	ItemID.armor4,
	ItemID.armor8,
]);

Item.setEnchantType(ItemID.armor1, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor2, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor3, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor4, Native.EnchantType.boots, 14);

Item.setEnchantType(ItemID.armor5, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor6, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor7, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor8, Native.EnchantType.boots, 14);

Item.addRepairItemIds(ItemID.armor1, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor2, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor3, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor4, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor5, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor6, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor7, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor8, [ItemID.clitok]);


























// file: items/инструменты_огня.js

IDRegistry.genItemID("sword_1"); 
Item.createItem("sword_1", "The sword of fire", {name: "sword_1", meta: 0}, {stack: 1});

Translation.addTranslation("The sword of fire", {ru: "меч огня"});

Item.setEnchantType(ItemID.sword_1, Native.EnchantType.weapon, 14);

Item.addRepairItemIds(ItemID.sword_1, [ItemID.clitok1]);

IDRegistry.genItemID("pickaxe_1"); 
Item.createItem("pickaxe_1", "pickaxe Fire", {name: "pickaxe_1", meta: 0}, {stack: 1});

Item.setEnchantType(ItemID.pickaxe_1, Native.EnchantType.pickaxe, 14);

Translation.addTranslation("pickaxe Fire", {ru: "кирка огня"});

Item.addRepairItemIds(ItemID.pickaxe_1, [ItemID.clitok1]);

IDRegistry.genItemID("sword_2");
Item.createItem("sword_2", "The sword of God", {name: "sword2", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

var godSword = new RenderMesh(__dir__ + "/res/model/sword_god.obj","obj");
ItemModel.getFor(ItemID.sword_2, 0).setHandModel(godSword, "3dItem/3d_god_sword")


Translation.addTranslation("The sword of God", {ru: "меч бога"});

Item.setEnchantType(ItemID.sword_2, Native.EnchantType.weapon, 14);

IDRegistry.genItemID("pickaxe_2"); Item.createItem("pickaxe_2", "pickaxe of God", {name: "kirka", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.pickaxe_2, [ItemID.clitok]);

Translation.addTranslation("pickaxe of God", {ru: "Кирка бога"});

Item.addCreativeGroup("sword", Translation.translate("Sword"), [
	ItemID.sword_1,
	ItemID.sword_2,
]);
Item.addCreativeGroup("pickaxe", Translation.translate("Pickaxe"), [
	ItemID.pickaxe_1,
	ItemID.pickaxe_2,
]);

ToolAPI.addToolMaterial("fire", {
    durability: 4440,
    level: 4,
    efficiency: 18,
    damage: 10,
    enchantability: 14
});



ToolAPI.addToolMaterial("god", {
    durability: 2220,
    level: 5,
    efficiency: 6,
    damage: 6,
    enchantability: 14
});

ToolAPI.setTool(ItemID["sword_1"], "fire", ToolType.sword);

ToolAPI.setTool(ItemID["sword_2"], "god", ToolType.sword);

ToolAPI.setTool(ItemID["pickaxe_1"], "fire", ToolType.pickaxe);

ToolAPI.setTool(ItemID["pickaxe_2"], "god", ToolType.pickaxe);




Item.registerUseFunction("sword_1", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y + 1, coords.z).id==0){
b.setBlock(coords.x, coords.y + 1, coords.z, 51, 0);
}
}
);

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_1){
Entity.setFire(victim, 80, true);
} 
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_2){
var random = Math.random() * 1;
if(random <= 0.1){
var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
World.playSoundAtEntity(victim, "ambient.weather.thunder", 50);
Entity.damageEntity(victim, 20);
}
} 
});




















// file: items/Scroll/Scroll.js

IDRegistry.genItemID("Scroll6"); 
Item.createItem("Scroll6", "Svic of the clear day", {name: "Scroll", meta: 6}, {stack: 1});

Translation.addTranslation("Svic of the clear day", {ru: "свиток ясного дня"});

Item.registerUseFunction("Scroll6", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWeather(1);
ManaCore.set(player, mana);
}
}
);














// file: items/Scroll/Scroll2.js

IDRegistry.genItemID("Scroll2"); 
Item.createItem("Scroll2", "Milk scroll", {name: "Scroll", meta: 2}, {stack: 1});

Translation.addTranslation("Milk scroll", {ru: "свиток мрака"});

Item.registerUseFunction("Scroll2", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWorldTime(15000);
ManaCore.set(player, mana);
} 
}
);















// file: items/Scroll/Scroll4.js

let fire = {
    set: function (x, y, z, id, data, player){
        let b = BlockSource.getDefaultForActor(player);
        if(b.getBlock(x, y, z).id==0){
            if(b.getBlock(x, y-1, z).id>=0){
            b.setBlock(x, y, z, id, data);
            }
        }
    }, 
};

IDRegistry.genItemID("Scroll4"); 
Item.createItem("Scroll4", "scroll of fire", {name: "Scroll", meta: 3}, {stack: 1});

Translation.addTranslation("scroll of fire", {ru: "свиток огня"});

Item.registerUseFunction("Scroll4", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=50){
mana.count-=50;
Entity.addEffect(player, Native.PotionEffect.fireResistance, 0, 150, false, false);

fire.set(coords.x, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);


fire.set(coords.x, coords.y, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z, 51, 0, player);

fire.set(coords.x, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z-1, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);

ManaCore.set(player, mana);
}
}
);

Item.addCreativeGroup("sroll", Translation.translate("Sroll"), [
	ItemID.Scroll6,
 ItemID.Scroll2, 
 ItemID.Scroll4, 
 ItemID.Scroll1,
]);





















// file: items/Scroll/Scroll1.js

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

















// file: items/посохи/магическая_палка_0.js

var BlockID55 = [51, 52, 122, 120, 7];

IDRegistry.genItemID("stick2"); 
Item.createItem("stick2", "Postability of absorption", {name: "stick2", meta: 1}, {stack: 1});

Translation.addTranslation("Postability of absorption", {ru: "посох поглощения"});

Item.registerUseFunction("stick2", function(coords, item, block, player){
    let peremen1 = ManaCore.get(player);
    let per1 = peremen1.countMax
    per1 = peremen1.countMax / 100 * 10; 
    per1 = peremen1.countMax - per1;
    if(peremen1.count+10<=per1){
        let b = BlockSource.getDefaultForActor(player);
        if(b.getBlock(coords.x, coords.y, coords.z).id != BlockID55) {
            peremen1.count+=10;
            ManaCore.set(player, peremen1);
            b.setBlock(coords.x, coords.y, coords.z, 0, 0);
        } 
    }
});




// file: items/dungeonKey.js

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






// file: items/book.js





// file: rai.js

var rai1 = new Dimensions.CustomDimension("rai1", 1345); 
rai1.setSkyColor(0, 128, 188) 
rai1.setFogColor(0, 128, 188); 
 
rai1.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 68, 
            yConversion: [[.5, 1], [1, -1]],
            material: {base: BlockID.stone2, surface: {id:BlockID.dirt2, data: 0, width:4}, cover: BlockID.grass2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));

var rai_particle = Particles.registerParticleType({
 texture: "rai_particle",
 render: 2,
 size:[4, 10],
 lifetime: [40, 100],
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead) {
if((new PlayerActor(player)).getDimension()==rai1.id) {
let coords = Entity.getPosition(player);
if(Math.random() <= 0.3){

Particles.addFarParticle(rai_particle, coords.x+Math.random() * 15 - Math.random() * 15, coords.y+Math.random() * 5 - Math.random() * 5, coords.z+Math.random() * 15 - Math.random() * 15, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, 0);
}
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
for(i = 0; i < 4; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            setWood(coords.x, coords.y-1, coords.z);
}
} 
});
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    for(i = 0; i < 15; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
            World.setBlock(coords.x, coords.y+1, coords.z, BlockID.trava, 0);

} 
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    if(Math.random() * 20<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
                World.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
            }
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==rai1.id){
if (Math.random()*5 <= 3){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 0, 10, true);

} 
} 
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random() * 20<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random() * 10<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood2.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= rai1.id){
        let random1 = Math.random() * 10;
        if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood3.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.Gem){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.Gem2){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth2, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth){
Dimensions.transfer(player, 0);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
}
});
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth2){
Dimensions.transfer(player, 0);
Entity.setCarriedItem(player, ItemID.Gem2, 1, 0);
}
});




// file: boss.js

function arrow(ent){
    let v = Entity.getVelocity(ent);
    let pos = Entity.getPosition(ent);
    let b = BlockSource.getDefaultForDimension(Entity.getDimension(ent))
    Entity.moveToAngle(Entity.spawn(pos.x, pos.y + 4, pos.z, 80), Entity.getLookAngle(ent), {speed: 1});
}
function tnt(ent){
    let pos = Entity.getPosition(ent);
    pos.x += (Math.random()*10)-(Math.random()*10);
    pos.z += (Math.random()*10)-(Math.random()*10);
    Entity.spawn(pos.x, pos.y+8, pos.z, 65);
}
Item.registerUseFunction("glas", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);
let boss = b.spawnEntity(coords.x, coords.y, coords.z, "dc:boss1");

Entity.setPrototype({
    entity: boss,
    tick: function (){
        if(Math.random()<=0.05){
            arrow(this.entity);
        }
        if(Math.random()<=0.001){
            tnt(this.entity);
        }
    }
});

if(b.getBlockId(coords.x, coords.y, coords.z)==BlockID.altar3){
if(b.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.altar1){
if(b.getBlockId(coords.x, coords.y - 1, coords.z + 1)==41){
if(b.getBlockId(coords.x, coords.y - 1, coords.z - 1)==41){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z - 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z - 1)==BlockID.altar){

b.setBlock(coords.x, coords.y, coords.z, 0, 0)
let boss = b.spawnEntity(coords.x, coords.y, coords.z, "dc:boss0");
Entity.addEffect(boss,
Native.PotionEffect.regeneration, 2, 9999999, true, false) ;
b.setBlock(coords.x, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z - 1, 0, 0)

}
}
}
}
}
}
}
}
} 
}} 
);




// file: api/Ritual.js

Ritual.arr2 = [];
Ritual.addCraft2 = function (id, result, mana){
    Ritual.arr2.push({id: id, result: result, mana: mana});
};
Ritual.get2 = function (id){
    for(i in Ritual.arr2){
        if(Ritual.arr2[i].id == id){
            return Ritual.arr2[i];
        }
    }
};
Ritual.obj3 = {};
Ritual.register3 = function (id, mana){
    Ritual.obj3[id] = {obj: {mana: mana}, arr: []};
};
Ritual.addCraft3 = function (id, result){
    Ritual.obj3[id].arr.push(result);
};
Ritual.get3 = function (id){
    return Ritual.obj3[id];
};




// file: entity.js

Entity.tradeArr = [];
Entity.addTrade = function (item, result, count){
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    item.data = item.data || 0;
    item.count = item.count || 1;
    result.data = result.data || 0;
    Entity.tradeArr.push({item: item, result: result, count: count});
};
Callback.addCallback("EntityInteract", function (entity, player) {
    if(Entity.getTypeName(entity) == "dc:angel<>"){
        let item = Entity.getCarriedItem(player); 
        let bs = BlockSource.getDefaultForActor(player);
        let coords = Entity.getPosition(entity);
        for(i in Entity.tradeArr){
            let obj = Entity.tradeArr[i];
            if(item.id == obj.item.id && item.count >= obj.item.count){
                let count = Math.floor(Math.random()*(obj.count.min))+obj.count.min;
                bs.spawnDroppedItem(coords.x, coords.y, coords.z, obj.result.id, count, obj.result.data, null);
                delItem(player, {id: obj.item.id, count: item.count-(obj.item.count-1), data: obj.item.data});
            }
        }
    }
});




// file: mods.js

ModAPI.registerAPI("DungeonAPI", {
    ManaCore: ManaCore,
    Ritual: Ritual,
    Debug: Debug,
    Mp: Mp
});
let RV;
ModAPI.addAPICallback("RecipeViewer", function(api){
    Callback.addCallback("LevelLoaded", function(){
        RV = api.Core;
        let recipe = Ritual.arr1;
        let recipeList = [];
        let result;
        for(var i in recipe){
            result = recipe[i].obj;
            recipeList.push({
                mana: result.mana,
                input: [
                    {id: result.xp, count: 0, data: 0},
                    {id: result.xm, count: 0, data: 0},
                    {id: result.zp, count: 0, data: 0},
                    {id: result.zm, count: 0, data: 0}
                ],
                output: [
                    {id: recipe[i].id, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual1", {
            title: "ритуал создания/ritul create",
            contents: {
                icon: BlockID.statua,
                params: {slot: "_default_slot_light"},
                drawing: [],
                elements: {
                    output0: {x: 440, y: 150, size: 120},
                    input0: {x: 440, y: 0, size: 120},
                    input1: {x: 440, y: 300, size: 120}, 
                    input2: {x: 590, y: 150, size: 120},
                    input3: {x: 290, y: 150, size: 120},
                    textMana: {type: "text", x: 150, y: 350, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+data.mana);
            }
        });
        recipe = Ritual.arr2;
        recipeList = [];
        let obj;
        for(var i in recipe){
            obj = recipe[i];
            recipeList.push({
                input: [
                    {id: obj.id, count: 0, data: 0},
                ],
                output: [
                    {id: obj.result, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual2", {
            title: "ритуал улучшения/ritul update",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get2(data.input[0].id).mana);
            }
        });
        recipeList = [];
        let keys = Object.keys(Ritual.obj3);
        for(var g in keys){
            let key = keys[g];
            for(var i in Ritual.obj3[key].arr){
                recipeList.push({
                    input: [
                        {id: parseInt(key), data: 0},
                    ],
                    output: [
                        {id: Ritual.obj3[key].arr[i], count: 1, data: 0}
                    ] 
                });
            }
        }
        RV.registerRecipeType("ritual3", {
            title: "ритуал зачарование/ritul enchantment",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get3(data.input[0].id).obj.mana);
            }
        });
        recipeList = [];
        for(var g in Entity.tradeArr){
            let obj = Entity.tradeArr[g];
            recipeList.push({
                input: [
                    {id: obj.item.id, count: obj.item.count, data: obj.item.data},
                ],
                output: [
                    {id: obj.result.id, count: obj.count.max, data: obj.result.data}
                ] 
            });
        }
        RV.registerRecipeType("tradeAngel", {
            title: "торговля/trade",
            contents: {
                icon: 388,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                },
            },
            recipeList: recipeList,
        });
    });
});
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const MagicCore = api.MagicCore;
    Item.registerUseFunctionForID(ItemID.manysript2, function(coords, item, block, player) {
        let mana = ManaCore.get(player);
        if(mana.count >= 5000){
            MagicCore.piece(player, "magis");
            MagicCore.piece(player, "Protection");
            MagicCore.piece(player, "necromancer");
            if(MagicCore.isClass(player)){
                mana.count-=5000;
            }
            ManaCore.set(player, mana);
        }else{
            Mp.message(player, "у вас не хватает маны, нужно не меньше 5000");
        }
        
    });
    MagicCore.setArmor(ItemID.armor1, "Protection", 70);
    MagicCore.setArmor(ItemID.armor2, "Protection", 70);
    MagicCore.setArmor(ItemID.armor3, "Protection", 70);
    MagicCore.setArmor(ItemID.armor4, "Protection", 70);
    MagicCore.setArmor(ItemID.armor5, "Protection", 60);
    MagicCore.setArmor(ItemID.armor6, "Protection", 60);
    MagicCore.setArmor(ItemID.armor7, "Protection", 60);
    MagicCore.setArmor(ItemID.armor8, "Protection", 60);
});




// file: craft/ritual.js

Callback.addCallback("ModsLoaded", function () {
    Ritual.register3(ItemID.manysript1, 1000);
    Ritual.addCraft3(ItemID.manysript1, ItemID.manysript2);
    Ritual.register3(ItemID.Drune0, 1000);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune1);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune2);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune3);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune4);
    
    Ritual.addCraft2(ItemID.armor5, ItemID.armor1, 40000);
    Ritual.addCraft2(ItemID.armor6, ItemID.armor2, 40000);
    Ritual.addCraft2(ItemID.armor7, ItemID.armor3, 40000);
    Ritual.addCraft2(ItemID.armor8, ItemID.armor4, 40000);
    Ritual.addCraft2(ItemID.sword_2, ItemID.sword_1, 30000);
    Ritual.addCraft2(ItemID.pickaxe_2, ItemID.pickaxe_1, 30000);
    Ritual.addCraft2(ItemID.clitok, ItemID.clitok1, 20000);
    Ritual.addCraft2(ItemID.keyDungeon, ItemID.keyDungeon2, 10000);
    
    Entity.addTrade({id: ItemID.crystalLightning}, {id: ItemID.ring});
    Entity.addTrade({id: ItemID.koin_0}, {id: ItemID.clitok1});
    Entity.addTrade({id: ItemID.koin_1}, {id: ItemID.DarkSphere});
    Entity.addTrade({id: ItemID.Drune2}, {id: ItemID.keyDungeon});
    Entity.addTrade({id: 266, count: 8}, {id: ItemID.gotovka});
    
    Ritual.addCraft1(0, {
        xp: ItemID.Gem2,
        xm: ItemID.Gem2,
        zp: ItemID.Gem2,
        zm: ItemID.Gem2,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+4000<=mana.countMax){
             mana.count += 4000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     Ritual.addCraft1(0, {
        xp: ItemID.Gem,
        xm: ItemID.Gem,
        zp: ItemID.Gem,
        zm: ItemID.Gem,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+1000<=mana.countMax){
             mana.count += 1000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.gotovka,
        xm: ItemID.Gem,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.Gem,
        xm: ItemID.gotovka,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.Gem,
        zm: ItemID.gotovka,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.gotovka,
        zm: ItemID.Gem,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalLightning,
        xm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalLightning,
        zm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalfire,
        xm: ItemID.crystalfire,
        mana: 10000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalfire,
        zm: ItemID.crystalfire,
        mana: 10000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.Gem, {
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
});




// file: craft/block.js

Callback.addCallback("LevelLoaded", function () {


Recipes.addShaped({id: BlockID.blockmetal, count: 1, data: 0}, 
	["aaa", "aaa", "aaa"],
	['a', ItemID.clitok, 0]);

Recipes.addShaped({id: BlockID.board, count: 4, data: 0}, 
	["###", "#a#", "###"],
	['a', BlockID.Breastya, 0]);

Recipes.addShaped({id: 58, count: 1, data: 0}, 
	["aa#", "aa#", "###"],
	['a', BlockID.board, 0]);

Recipes.addShaped({id: 54, count: 1, data: 0}, 
	["aaa", "a*a", "aaa"],
	['a', BlockID.board, 0]);
/*
Recipes.addShaped({id: BlockID.CloneAltar1, count: 1, data: 0}, 
	["*a*", "aba", "*a*"],
	['a', ItemID.clitok, 0, 'b', BlockID.blockmetal, 0]);
*/
Recipes.addShaped({id: BlockID.rityal1, count: 1, data: 0}, 
	["***", "aba", "aaa"],
	['a', ItemID.clitok, 0, 'b', BlockID.blockmetal, 0]);

Recipes.addShaped({id: BlockID.brick2, count: 8, data: 0}, 
	["bbb", "bab", "bbb"],
	['a', ItemID.clitok, 0, 'b', BlockID.stone2, 0]);
/*
Recipes.addShaped({id: BlockID.ritualGL, count: 1, data: 0}, 
	["bab", "bab", "aaa"],
	['b', ItemID.clitok, 0, 'a', BlockID.blockmetal, 0]);*/
Recipes.addShaped({id: BlockID.gubok1, count: 1, data: 0}, 
	["bbb", "aba", "aba"],
	['a', ItemID.clitok, 0, 'b', BlockID.blockmetal, 0]);
	Recipes.addShaped({id: BlockID.gubok2, count: 1, data: 0}, 
	["aba", "aba", "bbb"],
	['a', ItemID.clitok, 0, 'b', BlockID.blockmetal, 0]);
});














// file: craft/item.js

Callback.addCallback("LevelLoaded", function () {


Recipes.addShaped({id: ItemID.stick2, count: 1, data: 0},
	["**a", "*b*", "b**"], 
	['a', BlockID.blockmetal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.Drune0, count: 4, data: 0},
	["***", "*b*", "***"], 
	['b', BlockID.altar, 0]);


Recipes.addShaped({id: ItemID.RitualActivator, count: 1, data: 0}, 
	["*a*", "a*a", "*a*"], 
	['a', ItemID.clitok, 0]
); 

Recipes.addShaped({id: ItemID.armor5, count: 1, data: 0}, 
	["aaa", "a*a", "***"], 
	['a', ItemID.clitok, 0]
);


Recipes.addShaped({id: ItemID.armor6, count: 1, data: 0}, 
	["a*a", "aaa", "aaa"], 
	['a', ItemID.clitok, 0] 
);


Recipes.addShaped({id: ItemID.armor7, count: 1, data: 0}, 
	["aaa", "a*a", "a*a"], 
	['a', ItemID.clitok, 0] 
);


Recipes.addShaped({id: ItemID.armor8, count: 1, data: 0}, 
	["***", "a*a", "a*a"], 
	['a', ItemID.clitok, 0] 
);

/*
Recipes.addShaped({id: ItemID.sword_2, count: 1, data: 0}, 
	["*a*", "*a*", "*b*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0] 
);
*/

Recipes.addShaped({id: 280, count: 1, data: 0}, 
	["#a#", "#a#", "###"],
	['a', BlockID.board, 0]);

Recipes.addShaped({id: 270, count: 1, data: 0}, 
	["aaa", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 268, count: 1, data: 0}, 
	["#a#", "#a#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 269, count: 1, data: 0}, 
	["#a#", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 271, count: 1, data: 0}, 
	["aa#", "ab#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 290, count: 1, data: 0}, 
	["aa#", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sword_2, count: 1, data: 0}, 
	["*a*", "*a*", "*g*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0, 'g', 399, 0]);

Recipes.addShaped({id: ItemID.pickaxe_2, count: 1, data: 0}, 
	["aaa", "*g*", "*b*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0, 'g', 399, 0]);

Recipes.addFurnace(BlockID.ore, ItemID.clitok, 0);
Recipes.addFurnace(BlockID.blockmetal, BlockID.glass2, 0);
});




