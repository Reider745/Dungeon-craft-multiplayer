ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const ItemGenerate = api.ItemGenerate;
    ItemGenerate.addItem(ItemID.manysript2, 5, {max: 1});
    ItemGenerate.addItem(ItemID.manysript1, 10, {max: 1});
});