$("#saveDataButton").click( function()
           {
             saveData();
           }
        );
        
function saveData() {
   
   var sendInfo = { Name: "Heroku App2", Author: "Johnny"};

   $.ajax({
      type: "POST",
      url: "/data",
      dataType: "json",
      success: function (msg) {
         if (msg) {
            alert("Somebody was saved !");
            location.reload(true);
         }
         else {
            alert("Cannot add to list !");
         }
      },

      data: sendInfo
   });

}
