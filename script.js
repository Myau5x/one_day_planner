
///comment after adding saves
let tasks = [{hour:"9", text:"school zoom 1"},{hour:"10",text:"homework"}, {hour:"12",text:'lunch'}];
let tasks2 = {9:"",10:"",11:"",12:"",13:"",14:"",15:"",16:"",17:""};
let now = moment();
let today = now.format("dddd, MMMM Do YYYY");

/*
 <div class="input-group input-group-lg col-12">
          <div class="input-group-prepend">
            <span class="input-group-text" > 16:00</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"  id = '16'></textarea>
          <div class="input-group-append">
            <button class="btn btn-primary px-4 saveBtn" type="button" data-hour = "16">  <i class="far fa-save"></i>  </button>
          </div>
        </div>
*/
function renderTable(){
for(i =10; i< 18;i++){
    group = $("<div>");
    group.addClass("input-group input-group-lg col-12");
    prep = $("<div>");
    prep.addClass("input-group-prepend");
    span = $("<span>");
    span.addClass("input-group-text").text(i+":00");
    prep.append(span)
    group.append(prep)
    textarea = $("<textarea>");
    textarea.addClass("form-control").attr("id",i);
    group.append(textarea)
    appe = $("<div>");
    appe.addClass("input-group-append");
    btn = $("<button>");
    btn.addClass("btn btn-primary px-4 saveBtn").attr("type","button");
    btn.attr("data-hour",i);
    btn.html("  <i class='far fa-save'></i>  ");
    appe.append(btn);
    group.append(appe);

    $(".container").append(group);
}

}

renderTable();

function renderTask(){
    ///load from storage object
    ///var tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function(item){
        console.log(item);
        $('#'+item.hour).val(item.text);
    })

}
function renderTask2(){
    ///load from storage
    let t2 = JSON.parse(localStorage.getItem("tasks"));
    console.log(t2);
    if(!t2){ t2 = tasks2}
    for(i=9;i<18;i++){
        $("#"+i).val(t2[i]);

    }
}

renderTask2();
$("#currentDay").text(today);
//console.log(now.hour());

$(".saveBtn").on("click",function(){
    // look what button clicked, save the value of corresponding textarea
    /// tasks[10] = text.area
    /// localStorage.setItem("tasks", JSON.stringify(tasks));
    h = $(this).attr("data-hour");
    console.log(h)
    console.log($("#"+h).val());
    let t2 = JSON.parse(localStorage.getItem("tasks"));
    console.log(t2);
    if(!t2){ t2 = tasks2}
    t2[parseInt(h)] = $("#"+h).val();
    console.log(t2);
    localStorage.setItem("tasks", JSON.stringify(t2));
});

/*
check if hour < now.hour :add class past
check if hour == now.hour : add now
check if hour > now.hour add class future
$("#9").addClass('past')

*/
diff = 0 //use for  testing future times on night
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