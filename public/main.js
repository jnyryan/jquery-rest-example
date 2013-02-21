$("#saveDataButton").click( function()
           {
             saveData();
           }
        );
        
function saveData() {
   
   var sendInfo = { Project: "New Heroku App", Author: "New Author"};

   $.ajax({
      type: "POST",
      url: "/data",
      dataType: "json",
      success: function (data) {
         if (data.Project) {
            //alert(data);
            $('#target').html("Project Name: " + data.Project + "<br /> Author:" + data.Author);
         }
         else {
            alert("Cannot add to list !");
         }
      },

      data: sendInfo
   });

}
