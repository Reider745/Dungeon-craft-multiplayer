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