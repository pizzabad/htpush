$(document).ready(function(){
  $(".wow1,.wow2,.wow3,.wow4,.wow5,.wow6,.wow7,.wow8,.wow9").mouseover(function(){
    $(this).animate({
      
      marginLeft:"15px",
      marginTop:"15px",
      paddingLeft:"15px",
      paddingTop:"15px",
      paddingRight:"15px",
      paddingBottom:"15px",
      
      
    }).stop(true,true);
  });
  $(".wow1,.wow2,.wow3,.wow4,.wow5,.wow6,.wow7,.wow8,.wow9").mouseout(function(){
    $(this).animate({
      paddingLeft:"-25px",
      paddingRight:"-25px",
      marginLeft:"20px",
      marginTop:"20px",
      paddingTop:"-15px",
      paddingBottom:"-15px",
      
     
    });
  });
  
});