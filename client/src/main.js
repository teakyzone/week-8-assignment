
const showCameras = document.getElementById("show-cameras");
const cameraInventory = document.getElementById("cameraList")
const hideCameras = document.getElementById("hide-cameras")

async function getCameras(){

  const response = await fetch ("https://week-8-assignment.onrender.com/digitalcameras");
 const cameraInfo = await response.json();

 console.log (cameraInfo);

document.getElementById("cameraList").innerHTML = "";

 cameraInfo.forEach((camera) => {

console.log(camera);
const newCameraList = document.createElement("section")
newCameraList.textContent = camera.title,camera.subHeading


document.getElementById("cameraList").appendChild(newCameraList)

 }

)}

showCameras.addEventListener ("click", getCameras);
hideCameras.addEventListener ("click", () => {
  cameraInventory.innerHTML = "";
});

 // document.getElementById("cameraList").innerHTML = "";

