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
