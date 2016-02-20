/**
 * Created by MrLiu on 2016/2/18.
 */

$(function(){
<<<<<<< HEAD
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#f09', '#f09', '#f09'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
=======
	 $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#f09'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
>>>>>>> 42f2ca80aa98102b769bcd35ac143252047aeb84
        menu: '#menu'
    });

    $('#review').click(function(){
    	var display =$('.dropdown-menu').css('display');
    	if(display == 'none'){
    	   $('.dropdown-menu').show();
    	}else{
    		$('.dropdown-menu').hide();
    	}
    	
    });
});