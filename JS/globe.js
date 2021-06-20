import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';

// DATA IMPORT
let data = [];
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        let output = Object.values(response);
        for (let i = 0; i < output.length; i++) {
            data.push(output[i]);
        }
    }
};
xhttp.open("GET", "../DATA/Final_data.json", true);
xhttp.send();
console.log(data);

// THREEJS CODE

// CREATE scene where objects will be placed (kind of like a stage)
const scene = new THREE.Scene();

// CREATE camera to see objects (kind of like sitting in the audience)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// CREATE renderer to display the created objects (kind of like the people who place the diferent sets on the stage)
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CREATE controls so that we can interact with the objects/have interactivity
const controls = new OrbitControls(camera, renderer.domElement);

// CREATE raycaster for mouse interaction
const raycaster = new THREE.Raycaster();

// CREATE vector2 for mouse and mobile x,y coordinates
const mouse = new THREE.Vector2();
const touch = new THREE.Vector2();

// CREATE earth
// Earthmap is used for the basic texture which has the various continents/countries/etc. on it
let earthMap = new THREE.TextureLoader().load('../IMAGES/earth.jpg');

// EarthBumpMap is used to give the texture some "depth" so it is more appealing on eyes and data visuals
let earthBumpMap = new THREE.TextureLoader().load('../IMAGES/depth.jpg');

// EarthSpecMap gies the earth some shininess to the environment, allowing reflectivity off of the lights
let earthSpecMap = new THREE.TextureLoader().load('../IMAGES/earthspec4k.jpg');

// Geometry is what the shape/size of the globe will be
let earthGeometry = new THREE.SphereGeometry( 10, 32, 32);

// Material is how the globe will look like
let earthMaterial = new THREE.MeshPhongMaterial({
    map: earthMap,
    bumpMap: earthBumpMap,
    bumpScale: 0.3,
    specularMap: earthSpecMap,
    specular: new THREE.Color('grey'),
    shininess: 12,
});

// Earth is the final product which ends up being rendered on scene, also is used as a grandparent for the points of interest
let earth = new THREE.Mesh(earthGeometry, earthMaterial);

// Add the earth to scene
scene.add( earth );



let boundariesTexture = new THREE.TextureLoader().load('../IMAGES/boundaries_16k2.png');
let boundariesGeo = new THREE.SphereGeometry(10, 32, 32);

let boundariesMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    map: boundariesTexture,
    transparent:true,
});

let boundaries = new THREE.Mesh(boundariesGeo, boundariesMaterial);

boundaries.scale.set( 1, 1, 1);
earth.add( boundaries )

// Add country to the earth object
let earthcountryGeo = new THREE.SphereGeometry(10, 32, 32);


// Add country material
let earthMaterialcountry = new THREE.MeshPhongMaterial({
    roughness: 1,
    color: 0xffffff,
    transparent:true,
    opacity: 0,
});

// Create final texture for country
let earthcountry = new THREE.Mesh(earthcountryGeo, earthMaterialcountry);

// Scale above the earth sphere mesh
earthcountry.scale.set( 1.002, 1.002, 1.002);

// Make child of the earth
earth.add( earthcountry ) 

//-------------------------------------------------------------------------------
// Add cloud to the earth object
let earthcloudGeo = new THREE.SphereGeometry(10, 32, 32);

// Add cloud texture
let earthcloudTexture = new THREE.TextureLoader().load('../IMAGES/earthCloud.png');

// Add cloud material
let earthMaterialcloud = new THREE.MeshLambertMaterial({
    roughness: 1,
    color: 0xffffff,
    map: earthcloudTexture,
    transparent:true,
    opacity: 0.7,
});

// Create final texture for cloud
let earthcloud = new THREE.Mesh(earthcloudGeo, earthMaterialcloud);

// Scale above the earth sphere mesh
earthcloud.scale.set( 1.007, 1.007, 1.007);

// Make child of the earth
earth.add( earthcloud )

//------------------------------------------------------------------------------------

// CREATE variable to store array of lights
let lights = [];

// CreateSkyBox allows the scene to have more attractiveness to it, in this case by having the blue starred images around Earth
function createSkyBox(scene) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        '../IMAGES/space_right.png',
        '../IMAGES/space_left.png',
        '../IMAGES/space_top.png',
        '../IMAGES/space_bot.png',
        '../IMAGES/space_front.png',
        '../IMAGES/space_back.png'
    ])
    scene.background = texture;
};

// CreateLights is a function which creates the lights and adds them to the scene.
function createLights(scene){
    lights[0] = new THREE.PointLight("#ffffff", .5, 0);
    lights[1] = new THREE.PointLight("#ffffff", .5, 0);
    lights[2] = new THREE.PointLight("#ffffff", .8);
    lights[3] = new THREE.AmbientLight("#ffffff", 0.2);

    lights[0].position.set(50, 30, 50);
    lights[1].position.set(50, -30, 50);
    lights[2].position.set(-50,30,-50);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    scene.add(lights[3]);
    const Helper = new THREE.PointLightHelper(lights[2]);
    scene.add(Helper);
}


function addSceneObjects(scene) {
    createLights(scene);
    createSkyBox(scene);
}

// AddSceneObjects adds the items to the scene
addSceneObjects(scene);

// Change position so we can see the objects
camera.position.z = 20;

// Disable control function, so users do not zoom too far in or pan away from center
controls.minDistance = 12;
controls.maxDistance = 30;
controls.enablePan = false;
controls.update();
controls.saveState();

// Add event listeners so DOM knows what functions to use when objects/items are interacted with
window.addEventListener('resize', onWindowResize, false);
window.addEventListener('click', onWindowClick, false);
//window.addEventListener('touchstart', onTouch, false);

// Used for showing/hiding the instruction box
let hidden = false;
function hideInstructions(){
    hidden = !hidden;
    if(hidden){
        document.querySelector("#instruction-box").style.display = "none";
    } else {
        document.querySelector("#instruction-box").style.display = "flex";
    }
};

let instructionClicker = document.getElementById("instructions");
instructionClicker.addEventListener("click", hideInstructions, false);

// Resizes the window when it changes
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

// Listens for the mouse to intersect object and when clicked returns the data to the inner html
function onWindowClick(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(earthcountry.children);
    

    for (let i = 0; i < intersects.length; i++){
    document.getElementById("infoWrapper").style.display = "flex";

        document.querySelector("#region").innerText = "Region: " + intersects[0].object.userData.region;
        document.getElementById("region").style.color = intersects[0].object.userData.color;
        document.querySelector("#country-info").innerText = "Country: " + intersects[0].object.userData.country;
        document.querySelector("#language").innerText = "Language: " + intersects[0].object.userData.language;
        document.querySelector("#population").innerText = "Population: " + intersects[0].object.userData.population;
        document.querySelector("#area-sq-mi").innerText = "Area(mile^2): " + intersects[0].object.userData.area_sq_mi;
        document.querySelector("#gdp-per-capita").innerText = "GDP Per-Capita: " + intersects[0].object.userData.gdp_per_capita;
        document.querySelector("#climate").innerText = "Climate: " + intersects[0].object.userData.climate;
    }
    const item = intersects[0];
    let point = item.point;
    let camDistance = camera.position.copy(point).normalize.multiplyScalar(camDistance);
};

// Allows for the scene to move and be interacted with

let rotationDecider = 1;

function animate() {
    requestAnimationFrame( animate );
    if(rotationDecider==1){
        earth.rotation.y -= 0.0005;
    }
    earthcloud.rotation.y -= 0.0002;
    
    
    render();
	controls.update();
};

// Updates camera renderer
function render() {
    renderer.render( scene, camera );
};

// Removes the points of interest freeing up memory and space to have better performance
function removeChildren(){
    let destroy = earthcountry.children.length;
    while(destroy--) {
        earthcountry.remove(earthcountry.children[destroy].material.dispose())
        earthcountry.remove(earthcountry.children[destroy].geometry.dispose())
        earthcountry.remove(earthcountry.children[destroy])
    }
};

// Create and add coordinates for the globe
function addCountryCoord(earth, country, language, latitude, longitude, color, region, population, area_sq_mi, gdp_per_capita, climate){
    let pointOfInterest = new THREE.SphereGeometry(.1, 32, 32);
    let lat = latitude * (Math.PI/180);
    let lon = -longitude * (Math.PI/180);
    const radius = 9.9;
    const phi = (90-lat)*(Math.PI/180);
    const theta = (lon+180)*(Math.PI/180);

    let material = new THREE.MeshPhongMaterial({
        color:color,
        emissive:color
    });

    let mesh = new THREE.Mesh(
        pointOfInterest,
        material
    );

    mesh.position.set(
        Math.cos(lat) * Math.cos(lon) * radius,
        Math.sin(lat) * radius,
        Math.cos(lat) * Math.sin(lon) * radius
    );

    mesh.rotation.set(0.0, -lon, lat-Math.PI*0.5);

    mesh.userData.country = country;
    mesh.userData.language = language;
    mesh.userData.color = color;
    mesh.userData.region = region;
    mesh.userData.population = population;
    mesh.userData.area_sq_mi = area_sq_mi;
    mesh.userData.gdp_per_capita = gdp_per_capita;
    mesh.userData.climate = climate;
    
    rotationDecider=0
    earthcountry.add(mesh)

};

// Variables to get information and change accordingly
let countryInfo = document.getElementById("country");
countryInfo.addEventListener("click", changeToCountry);

// Changes the information so data points can be seen
function changeToCountry() {
    // Show/hide needed and unneeded elements
    document.querySelector("#instruction-box").style.display = "none";
    document.getElementById("title-box").style.display = "none";

    removeChildren();

    // Get the data from the JSON file
    for (let i = 0; i < data.length; i++){
        if(data[i].Region == 'ASIA (EX. NEAR EAST)'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'yellow', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NEAR EAST'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NORTHERN AMERICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightblue', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'WESTERN EUROPE'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'cyan', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'EASTERN EUROPE'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'red', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'BALTICS'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'purple', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'C.W. OF IND. STATES'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'NORTHERN AFRICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'beige', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'SUB-SAHARN AFRICA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'brown', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'LATIN AMER. & CARIB'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'gold', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        } else if(data[i].Region == 'OCEANIA'){
            addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightgreen', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
        }
    }
};

// Call the animation function so scene is properly rendered
animate();


//----------------------------------------------------UI Controls------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------












function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByTagName("header")[0].style.display = "none";
  }

  document.getElementById("openbutton").addEventListener ("click", openNav, false);
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("header")[0].style.display = "flex"
  }

  document.getElementById("closebutton").addEventListener ("click", closeNav, false);
  document.getElementById("mySidenav").addEventListener ("click", closeNav, false);
