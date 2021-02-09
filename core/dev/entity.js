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
                if(DA) ac.give(player,  "DungeonAchievement", "trade");
                let count = Math.floor(Math.random()*(obj.count.min))+obj.count.min;
                bs.spawnDroppedItem(coords.x, coords.y, coords.z, obj.result.id, count, obj.result.data, null);
                delItem(player, {id: obj.item.id, count: item.count-(obj.item.count-1), data: obj.item.data});
            }
        }
    }
});
