app.controller('HomeCtrl', function($scope, $http) {
	console.log("HomeCtrl")

	//create route storage reference
	let storageRef = firebase.storage().ref();

	let inputElement = document.getElementById("fileInput")

	let imgArray = []
	

	inputElement.addEventListener('change', handleFiles, false);

	function handleFiles() {
		let fileList = this.files;
     /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });

  //getting the url
  storageRef.child(fileList.push(this.files)).getDownloadURL()
	.then(function(url) {
      var img = document.getElementById('myImg');
      img.src = url;
      console.log(img)
      $scope.images = fileList;
    }).catch(function(error) {
    // Handle any errors
  });
}


})
