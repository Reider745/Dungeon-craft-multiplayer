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
