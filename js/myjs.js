let calculate = {
    costs: [
        [5000, 15000, 20000],
        [5000, 10000, 20000],
        [6000, 7000],
    ],
    deadlines: [
        [7, 14, 21],
        [5, 5, 7],
        [2, 4],
    ],
    costsSumm(answers) {
        let costResult;
        switch (answers[0]) {
            case '1':
                costResult = this.costs[0][0];
                break;
            case '2':
                costResult = this.costs[0][1];
                break;
            case '3':
                costResult = this.costs[0][2];
                break;
            default:
                costResult = 0;
                break;
        }
        switch (answers[1]) {
            case '1':
                costResult += this.costs[1][0];
                break;
            case '2':
                costResult += this.costs[1][1];
                break;
            case '3':
                costResult += this.costs[1][2];
                break;
            default:
                costResult += 0;
                break;
        }

        switch (answers[2]) {
            case '1':
                costResult += this.costs[2][0];
                break;
            case '2':
                costResult += this.costs[2][1];
                break;

            default:
                costResult += 0;
                break;
        }

        return costResult;
    },

    deadlinesSumm() {
        let deadlinesResult;
        switch (answers[0]) {
            case '1':
                deadlinesResult = this.deadlines[0][0];
                break;
            case '2':
                deadlinesResult = this.deadlines[0][1];
                break;
            case '3':
                deadlinesResult = this.deadlines[0][2];
                break;
            default:
                deadlinesResult = 0;
                break;
        }

        switch (answers[1]) {
            case '1':
                deadlinesResult += this.deadlines[1][0];
                break;
            case '2':
                deadlinesResult += this.deadlines[1][1];
                break;
            case '3':
                deadlinesResult += this.deadlines[1][2];
                break;
            default:
                deadlinesResult += 0;
                break;
        }

        switch (answers[2]) {
            case '1':
                deadlinesResult += this.deadlines[2][0];
                break;
            case '2':
                deadlinesResult += this.deadlines[2][1];
                break;
            default:
                deadlinesResult += 0;
                break;
        }
        return deadlinesResult;
    }
};
let answers = new Array(3);
$(window).scroll(() => {
    let ScrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {

        if($(el).offset().top - $("nav").outerHeight() <= ScrollDistance){
            $("nav a").each((i, el) =>{
                if($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });

            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});


function number_to(id,from,to,duration) {
    var element = document.getElementById(id);
    var start = new Date().getTime();
    setTimeout(function() {
    var now = (new Date().getTime()) - start;
    var progress = now / duration;
    var result = Math.floor((to - from) * progress + from);
    element.innerHTML = progress < 1 ? result : to;
    if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});

});

$(document).ready(function(){
    $('select').change(function(){
        answers[0] = $('#type').val();
        answers[1] = $('#design').val();
        answers[2] = $('#adapt').val();
        let sumCostValue =  +$('#summCost').text();
        let sumDeadlinesValue =  +$('#summDeadlines').text();
        number_to('summCost',sumCostValue, calculate.costsSumm(answers),1000);
        number_to('summDeadlines',sumDeadlinesValue, calculate.deadlinesSumm(answers),1000);
    });
    number_to('number',0,+$('#number').text(),1000);
});


$(document).ready(function(){
    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);   
    });
});

function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show-animation')
           // change.target.src = change.target.dataset.src;
        }
    });
}

$(document).ready(function(){
    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntryStatistics, options);
    let elements = $('.numberAnim');
    elements.each((i,el) => {
        observer.observe(el);   
    });
});

function onEntryStatistics(entry){
    entry.forEach(change =>{
        if(change.isIntersecting){
            for(var i = 1;i < 5;i++){
                let str = $('#number'+ i).text()
          
                number_to('number'+i,0,str,1000);
            }
           
        }
    })
}
$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

  