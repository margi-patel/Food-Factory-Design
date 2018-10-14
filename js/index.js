$(document).ready(function() {
 $('header nav a').click(function(e) {
    
    $('header nav a.active').removeClass('active');
    $(this).addClass('active');
    
    $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');
    
    e.preventDefault();
    return false;
    
  });
  
  $(document).scroll(function() {
     
     var position = Math.floor($(this).scrollTop() / 800) + 1;
    
     $('header nav a.active').removeClass('active');
     $('header nav a.link-' + position).addClass('active');
    
  });
  
});
	var flag = 0;

	function val_name()
	{
		var x = document.getElementById("txtnm").value;
		if((!isNaN(x)) || (x.length < 1 || x.length > 40))
		{
			document.getElementById('snm').innerHTML = "&nbsp;<img src = 'wrong.png' height = '20px' width = '20px' />";
			document.getElementById('txtnm').focus();
			flag = 0;
		}
		else
		{
			document.getElementById('snm').innerHTML = "&nbsp;<img src = 'write.png' height = '20px' width = '20px' />";
			flag = 1;
		}
	}
	
	function val_email()
	{
		var x=document.getElementById("txtemail").value;  
		var atpos=x.indexOf("@");  
		var dotpos=x.lastIndexOf(".");  
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)
		{  
			document.getElementById('semail').innerHTML = "&nbsp;<img src = 'wrong.png' height = '20px' width = '20px' />";
			document.getElementById('txtemail').focus();
			flag = 0;
		}
		else
		{
			document.getElementById('semail').innerHTML = "&nbsp;<img src = 'write.png' height = '20px' width = '20px' />";
			flag = 1;
		}
	}
	
	function cmt()
	{
		var y = document.getElementById("txtcmt").value;
		if(y == '')
		{
			alert("Please, Give your comment!!");
			flag = 0;
		}
		else{
			flag = 1;
		}
	}
	
	function send()
	{
		if(flag == 1)
		{
			confirm("Your Feedback is send...");
		}
	}
	
	