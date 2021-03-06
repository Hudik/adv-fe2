var data = { entries: [
	{
		"imgUrl":""
		,"likeCount": 0
		,"description": "Тут мы скачаем нужные самые свежие пакетики (не забыть про package.json). Добавьте их с фиксированной мажорной версией"
		,"id": "700"
	},
	{
		"imgUrl":""
		,"likeCount": 0
		,"description": "https://github.com/frontend-science/advanced-fe2-tasks/tree/master/lesson01"
		,"id": "701"
	},
	{
		"imgUrl":""
		,"likeCount": 0
		,"description": "You need to update README.md file in the root of this project. You need to add new item in the list with your name and sname and add link to your GitHub page. You can see example in this file"
		,"id": "702"
	},
	{
		"imgUrl":""
		,"likeCount": 0
		,"description": "https://github.com/frontend-science/advanced-fe2-tasks/tree/master/lesson02"
		,"id": "703"
	},
]};

Handlebars.registerHelper('json', function(posts) {

	return JSON.stringify(posts, null, '\t');

});

Handlebars.registerHelper('tablecontent', function(post, options) {  

  	return new Handlebars.SafeString(
    	"<div class="+ ( options.data.index % 2 ? 'odd' : 'even')+">"+options.fn(this)+"</div>"
    );
});

var template2 = Handlebars.compile( $('#template2').html());
$('.code').append( template2(data) );

var template = Handlebars.compile( $('#template').html() );
$('.updates').append( template(data) ); 