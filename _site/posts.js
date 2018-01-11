$(document).ready(function() {
	
	
	var post = {
	list:[{
	    "title":"shousunny的第一篇博客",
        "url":"http://localhost:4000/blog/2018/01/11/Jan",
        "date":"11 Jan 2018"
    }


	]};	
			
	var content ="<ul class=\"compact recent\">";
	$.each(post.list,function(i,item){
	
	content += "<li><span class=\"date\">"+ item.date + "</span><a href=\""+item.url+"\">"+ item.title +"</a></li>";
	
	});
	
	content +="</ul>";
	$("#blog2-posts-list .loading").remove();
	$("#blog2-posts-list").append(content);
			
});	
