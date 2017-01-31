console.log('hi')

const app = angular.module('photoApp', ['ngRoute'])

//initialize firebase
 var config = {
    apiKey: "AIzaSyBZLj1gjvVgkpzBOA-6FhlYH1qKmGoDvmA",
    authDomain: "photo-app-23d42.firebaseapp.com",
    databaseURL: "https://photo-app-23d42.firebaseio.com",
    storageBucket: "photo-app-23d42.appspot.com",
    messagingSenderId: "1043971054288"
  };
  firebase.initializeApp(config);

app.config(($routeProvider, $locationProvider) => {
	$locationProvider.hashPrefix('')
	$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html'
		})

})
