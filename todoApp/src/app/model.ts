export class Model {
   
    items;
    
    constructor()
    {
        this.items=[
            
            new TodoItem("Bağcılar Meydan", true),
            new TodoItem("Bahçelievler", false),
            new TodoItem("Esenler/Dörtyol",false),
            new TodoItem("Taksim/İstiklal", false),

        ];
    }

}

export class TodoItem{
    description: String;
    action: Boolean;
    constructor(description:String, action:Boolean){
        this.description=description;
        this.action=action;
    }

}