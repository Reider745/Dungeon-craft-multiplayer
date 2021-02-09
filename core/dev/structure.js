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
if (Math.random()*2300 <= 1){
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
if (Math.random()*2850 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa2.setStructure(coords.x, coords.y, coords.z);
Item6.fillChest(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x+3, coords.y+4, coords.z-3, 0, id);
Item2.fillChest(coords.x-3, coords.y+4, coords.z-3, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*2600 <= 1){
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
if (Math.random()*1850 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("bawna.json", coords.x, coords.y, coords.z);

Item3.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*1350 <= 1){
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
if (Math.random()*150 <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 200);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 87){
            Dungeon.setStructure("piramida_ada.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y, coords.z, 0, id);
        }
}      
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random() <= 0.01){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("chest).json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item5.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*100 <= 0.1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_sektant.json")).setStructure(coords.x, coords.y, coords.z, 0, id);


}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*100 <= 0.2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_xram.json")).setStructure(coords.x, coords.y, coords.z, 0, id);
Item3.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*100 <= 0.1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_xram2.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (Math.random()*100 <= 0.3){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("teleport_rai.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item3.fillChest(coords.x, coords.y, coords.z, 0, id);
}
});
