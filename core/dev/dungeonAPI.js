function DungeonAPI (path){
    this.path = path;
    let BlockReplace = [];
    var pathJson = __dir__+"/json/" + path;
    this.setStructurePro = function (xx, yy, zz, func) {
        var arr = FileTools.ReadJSON(pathJson);
        for(o in arr){
            let x = arr[o].x;
            let y = arr[o].y;
            let z = arr[o].z;
	         	let Id = arr[o].id;
            let data = arr[o].data;
            this.func = func;
            this.func = func
            World.setBlock(x + xx, y + yy, z + zz, Id, data);
            for(i in BlockReplace){
                if(World.getBlock(x + xx, y + yy, z + zz).id==BlockReplace[i].id1){
                    if(World.getBlock(x + xx, y + yy, z + zz).data==BlockReplace[i].data1){
                        BlockSet.RandomBlock(x + xx, y + yy, z + zz, BlockReplace[i].id1, BlockReplace[i].data1, BlockReplace[i].id2, BlockReplace[i].data2);
                    }
                }
           } 
           func(x + xx, y + yy, z + zz, arr, o);
        }
    }
    this.addReplace = function (id1, data1, id2, data2){
        BlockReplace.push({id1:id1, data1:data1, id2:id2, data2:data2});
    }
    this.setStructure = function (xx, yy, zz) {
        var arr = FileTools.ReadJSON(pathJson);
        for(o in arr){
            let x = arr[o].x;
            let y = arr[o].y;
            let z = arr[o].z;
            let Id = arr[o].id;
            let data = arr[o].data;
            World.setBlock(x + xx, y + yy, z + zz, Id, data);
            for(i in BlockReplace){
                if(World.getBlock(x + xx, y + yy, z + zz).id==BlockReplace[i].id1){
                    if(World.getBlock(x + xx, y + yy, z + zz).data==BlockReplace[i].data1){
                        BlockSet.RandomBlock(x + xx, y + yy, z + zz, BlockReplace[i].id1, BlockReplace[i].data1, BlockReplace[i].id2, BlockReplace[i].data2);
                    }
                }
           } 
        }
    }
}
/*
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
let save = {
x: chunkX, 
z: chunkZ
};
FileTools.WriteJSON (__dir__+"/debug/chank.json", save, true);
});
*/
var StructureCokEnd = new DungeonAPI("cokroviwnisa_end.json");

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
var random = Math.random()*600;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureCokEnd.setStructure(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x, coords.y+1, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureCoEnd = new DungeonAPI("name.json");

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
var random = Math.random()*550;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureCoEnd.setStructure(coords.x, coords.y, coords.z);
fillChest2.fillChest(coords.x, coords.y+1, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureRuinEnd = new DungeonAPI("ruin_end.json");
StructureRuinEnd.addReplace(206, 0, 121, 0);

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
var random = Math.random()*400;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureRuinEnd.setStructure(coords.x, coords.y, coords.z);
}
});

var StructureGrobnisa = new DungeonAPI("grobnisa.json");
StructureGrobnisa.addReplace(4, 0, 48, 0);
StructureGrobnisa.addReplace(98, 0, 98, 1);
StructureGrobnisa.addReplace(139, 7, 139, 8);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*2200;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa.setStructure(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x, coords.y+2, coords.z+3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x+2, coords.y+2, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x, coords.y+2, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x, coords.y+2, coords.z+3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureGrobnisa2 = new DungeonAPI("grobnisa2.json");
StructureGrobnisa2.addReplace(4, 0, 48, 0);
StructureGrobnisa2.addReplace(98, 0, 98, 1);
StructureGrobnisa2.addReplace(139, 7, 139, 8);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*2800;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa2.setStructure(coords.x, coords.y, coords.z);
fillChestLab3(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x+3, coords.y+4, coords.z-3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x-3, coords.y+4, coords.z-3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});



var StructureHome = new DungeonAPI("home.json");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*2000;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureHome.setStructurePro(coords.x, coords.y, coords.z, function(x, y, z, arr, i){
    if(arr[i].id=="board"){
        World.setBlock(x, y, z, BlockID.brick2, 0);
    }
    if(arr[i].id=="altar3"){
        World.setBlock(x, y, z, BlockID.board, 0);
    }
    if(arr[i].id=="glass2"){
        World.setBlock(x, y, z, BlockID.glass2, 0);
    }
    if(arr[i].id=="board2"){
        World.setBlock(x, y, z, BlockID.Breastya, 0);
    }
});
if(0.1<=Math.random()*1) {
World.setBlock(coords.x-2, coords.y+1, coords.z, 54, 0);

Structure3.fillChest(coords.x-2, coords.y+1, coords.z, function(slot, x, y, z, id, data, count){
     fillChest3(slot, x, y, z, id, data, count);
});
} 
if(1<=Math.random()*1) {
World.setBlock(coords.x, coords.y+1, coords.z-2, 54, 0);
fillChest2.fillChest(coords.x, coords.y+1, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
} 
if(0.7<=Math.random()*1) {
World.setBlock(coords.x, coords.y+1, coords.z+2, 54, 0);

fillChest2.fillChest(coords.x, coords.y+1, coords.z+2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
} 


}
});


//2500
var StructureAltar = new DungeonAPI("structure.json");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*2500;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureAltar.setStructurePro(coords.x, coords.y+1, coords.z, function(x, y, z, arr, i){
    if(arr[i].id=="fire"){
        World.setBlock(x, y, z, BlockID.kristalFire, 0);
    }
    if(arr[i].id=="altar"){
        World.setBlock(x, y, z, BlockID.rityal1, 0);
    } 
});
}
});

var StructureBawnaAda = new DungeonAPI("bawna_ada.json");
//100
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
var random = Math.random()*100;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureBawnaAda.setStructurePro(coords.x, coords.y, coords.z, function(x, y, z, arr, i){
    if(arr[i].id=="fire"){
        World.setBlock(x, y, z, BlockID.kristalFire, 0);
    }
});

fillChest2.fillChest(coords.x, coords.y+7, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x-2, coords.y+11, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x-2, coords.y+11, coords.z+2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x+2, coords.y+11, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
fillChest2.fillChest(coords.x+2, coords.y+11, coords.z+2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureCokAda = new DungeonAPI("cokrovewnisa.json");
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
var random = Math.random()*150;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureCokAda.setStructure(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x, coords.y+2, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureLabAda = new DungeonAPI("labirint_ada.json");
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
var random = Math.random()*250;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureLabAda.setStructure(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x-5, coords.y+1, coords.z-2, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x-4, coords.y+1, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x+3, coords.y+1, coords.z+4, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x+4, coords.y+1, coords.z-5, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});
}
});

var StructureBawna = new DungeonAPI("bawna.json");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*1750;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureBawna.setStructure(coords.x, coords.y, coords.z);

Structure3.fillChest(coords.x, coords.y+1, coords.z, function(slot, x, y, z, id, data, count){
     fillChest3(slot, x, y, z, id, data, count);
});

}
});

var StructureRuin = new DungeonAPI("ruin.json");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*1250;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureRuin.setStructure(coords.x, coords.y, coords.z);
Structure3.fillChest(coords.x-1, coords.y+1, coords.z+1, function(slot, x, y, z, id, data, count){
     fillChest3(slot, x, y, z, id, data, count);
});

fillChest2.fillChest(coords.x+1, coords.y+10, coords.z, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

}
});


var StructurePiramid = new DungeonAPI("piramida.json");
StructurePiramid.addReplace(4, 0, 48, 0);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*3000;
if (random <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructurePiramid.setStructure(coords.x, coords.y, coords.z);

fillChest2.fillChest(coords.x+3, coords.y+1, coords.z+3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x+3, coords.y+1, coords.z-3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x-3, coords.y+1, coords.z+3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

fillChest2.fillChest(coords.x-3, coords.y+1, coords.z-3, function(slot, x, y, z, id, data, count){
    let container = World.getContainer(x, y, z);
    if(id == 283){
        let extra = enchantAdd(0.2, "sword", 3);
        container.setSlot(slot, id, count, data, extra);
    }
});

}
});







var firstClick = true;
var origin = {x:0, y:0, z:0};
var es = ModAPI.requireGlobal("Entity.isSneaking");
var blockArray;
var coordinates=[{},{}];

Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.debugTools&&es(Player.get())){ 
	origin = coords;
 Game.message("установлен цент структуры");
}else
if(item.id == ItemID.debugTools&&!es(Player.get())){
	if(!firstClick){
		coordinates[1] = coords;
		Game.message("second click");
	}else{
		Game.message("first click");
		coordinates[0]=coords;
	}
	firstClick = firstClick?false:true;
}
})












































