//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();

  
});



//general_page select's functional part

$(document).on("click", ".order_spare_parts_form_step_select_title_svg_wrapper", function(){
    $(this).closest(".order_spare_parts_form_step_select_wrapper").toggleClass("open");
    $(this).closest(".order_spare_parts_form_step_select_wrapper").removeClass("active");
  
 })
 
 
 
 $(document).on("click", ".order_step_form_select_menu_li", function(){
   var dataValue = $(this).data("value");
   var dataName = $(this).data("name");
  $(this).closest(".order_spare_parts_form_step_select_wrapper").find(".order_step_input").val(dataValue);
  $(this).closest(".order_spare_parts_form_step_select_wrapper").find(".order_step_form_select_title").html(dataName);
  $(this).closest(".order_spare_parts_form_step_select_wrapper").removeClass("open");
  $(this).closest(".order_spare_parts_form_step_select_wrapper").addClass("active");

 })
 
 
 
//garage input's functional_part


$(document).on("focusin", ".personal_data_input_field", function(){
    $(this).parent().addClass("active");
    $(this).parent().addClass("active_permanent");
    $(this).parent().addClass("active_color");
  })
  
  $(document).on("focusout", ".personal_data_input_field", function(){
  $(this).parent().removeClass("active_permanent");
  $(this).parent().removeClass("active_color");
  $(this).parent().addClass("active_color_grey");
  var val = $(this).val();
  if(val.length > 0){
    $(this).parent().addClass("done");
  } else{
    $(this).parent().removeClass("done");
    $(this).parent().removeClass("active");
  
  }
  
  })
  
  
  
  $(document).on("input", ".personal_data_input_field", function(){
    var val = $(this).val();
    console.log(val);
    if(val.length < 1){
      $(this).parent().removeClass("active");
      $(this).parent().removeClass("done")
      $(this).parent().removeClass("active_permanent");
      $(this).parent().removeClass("active_color_grey");
      $(this).parent().removeClass("active_color");
    } 
    
    })