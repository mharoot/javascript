$.getScript("classes/Node.js", function(){

   alert("Script loaded but not necessarily executed.");

});

function SLL () 
{
    this.numberOfEntries = 0;
    this.head = null;

/**
 * @task : add to list
 */  
    this.add = function(data) {

        if(this.head == null)
        {
            this.head = new Node(data);
        }
        else
        {
            //temp storage for old head
            var old_head = this.head;
            //newlly add data becomes node head
            this.head = new Node(data);
            //new head has no prev node but it does have a next
            this.head.next = old_head;
            //old_head has an prev node which is newly inserted
            old_head.prev = this.head;//but no next node
        }
        
        this.numberOfEntries++;
        return "you added: "+ data+ "and you have "+this.numberOfEntries+" entries";
    };

/**
 * @task : delete an entry at a position
 */
    this.delete = function(pos)
    {
        if(pos>this.numberOfEntries || pos<1)
        {
            alert("out of bounds");
            return;
        }

        var walker = this.head;
        var i = 1;
        while(walker.next!=null && i < pos)
        {
            walker = walker.next;
            i++;
        }
        alert(walker.data);  
    }


/**
 * @task: print list
 */
    this.print = function() {
        var sb = "";
        var walker = this.head;
        while(walker!=null)
        {
            sb+=walker.data+", "

            walker = walker.next;
        }
        alert(sb);
    }
    
    
}

