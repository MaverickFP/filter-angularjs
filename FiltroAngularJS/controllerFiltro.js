var myApp = angular.module('MyApp',[]);

//array di test
var elementi = [{nome:'ciao'},
				{nome:'prova'},
				{nome:'basta'},
				{nome:'daniel'},
				{nome:'francesco'},
				{nome:'laptop'},
				{nome:'marco'}
			   ];

//filtro per mettere in maiuscolo una parola
myApp.filter('maiuscolo', function(){
	var stringaMaiuscola = function(input){
		return input.toUpperCase();
	};
	return stringaMaiuscola;
});


//filtro gli elemnti di un array in base alla prima lettera passata in input tramite un form
myApp.filter('filtroPrimaLettera',function(){
	var risultato = function(input, letter){
		var filtrati = [];
		var letterMatch = new RegExp(letter, 'i');		
		for(var i = 0; i < input.length; i++){
			var item = input[i];
			var firstLetter = item.nome.substring(0, 1);
			if(letterMatch.test(firstLetter))
				filtrati.push(item);							
		}
		return filtrati;
	};
	return risultato;
});


//controller
myApp.controller('ListaCtrl', function($scope){
	$scope.items = elementi;
});


//controller
myApp.controller('ListaCtrl2', function($scope){
	$scope.elencoNomi = elementi;
});