var totalSize=250;
var numberRow=prompt("Enter number from 1 to 100");
var cellSize=totalSize/numberRow;

var penColor;


$(document).ready(function(){
    for(var j=0; j<numberRow; j++){
        $('.middle').append('<div id="rows" class="row' + j +'"></div>');
        
        var thisRow = "row"+j; 
        
        for(var i=0; i<numberRow;i++)
            $('.'+thisRow).append('<div class=allCells></div>');
        
        $(".allCells").height(cellSize);
        $(".allCells").width(cellSize);
    }  ;
    
    
    $('.color').click(function(){
        penColor= $(this).css("background-color");
    });
        
    
    $('.allCells').mouseover(function(){
        $(this).css("background-color",penColor);
    });
    
    $('#reset').click(function(){
        $('.allCells').css("background-color","lightpink");
    });
   
     
}) ;
   
 
    
         