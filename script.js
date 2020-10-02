
///comment after adding saves
let tasks = [{hour:"9", text:"school zoom 1"},{hour:"10",text:"homework"}, {hour:"12",text:'lunch'}];

function renderTask(){
    ///load from storage object
    ///var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function(item){
        console.log(item);
        $('#'+item.hour).val(item.text);
    })

}

renderTask();

$(".saveBtn").on("click",function(){
    // look what button clicked, save the value of corresponding textarea
    /// tasks[10] = text.area
    /// localStorage.setItem("tasks", JSON.stringify(tasks));
});