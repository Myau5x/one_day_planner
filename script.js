
///comment after adding saves
let tasks = [{hour:"9", text:"school zoom 1"},{hour:"10",text:"homework"}, {hour:"12",text:'lunch'}];
let now = moment();
let today = now.format("dddd, MMMM Do YYYY");
function renderTask(){
    ///load from storage object
    ///var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function(item){
        console.log(item);
        $('#'+item.hour).val(item.text);
    })

}

renderTask();
$("#currentDay").text(today);
console.log(now.hour());

$(".saveBtn").on("click",function(){
    // look what button clicked, save the value of corresponding textarea
    /// tasks[10] = text.area
    /// localStorage.setItem("tasks", JSON.stringify(tasks));
    h = $(this).attr("data-hour");
    console.log(h)
    console.log($("#"+h).val());
});

/*
check if hour < now.hour :add class past
check if hour == now.hour : add now
check if hour > now.hour add class future
$("#9").addClass('past')

*/
diff = 0 //use for ight testing future times
function styleHours(){
    for(i=9; i< 18;i++){
        id = '#'+i;
        if (i +diff < now.hour()){
            $(id).addClass("past");
        }
        else if (i+ diff ===now.hour()){
            $(id).addClass("present");
        }
        else{
            $(id).addClass("future");
        }
    }
}
styleHours()