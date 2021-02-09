var Debug = {
    lines: 0,
    message: function (text){
        if(config.debug.enabled && config.debug.log){
            this.lines += 1;
            if(this.lines >= config.debug.numberOfLines){
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