 var renderer;
  function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight; 
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height );
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColorHex(0xebebeb, 1.0);
  }
 
  var camera;
  function initCamera() { 
    camera = new THREE.PerspectiveCamera( 45 , width / height , 1 , 10000 );
    camera.position.x = 200;
    camera.position.y = 20;
    camera.position.z = 50;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt( {x:0, y:0, z:0 } );
  }
  var scene;
  function initScene() {   
    scene = new THREE.Scene();
  }
  var light;
  function initLight() { 
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set( 100, 100, 200 );
    scene.add(light);
    light2 = new THREE.AmbientLight(0x555555);
  scene.add(light2); 
  }
  var cube;
  function initObject(){  
    var texture1  = new THREE.ImageUtils.loadTexture('images/asi.jpg');
    cube = new THREE.Mesh(
         new THREE.CubeGeometry(50,50,50),                
         new THREE.MeshLambertMaterial({ 
         map: texture1}) 
    );
    scene.add(cube);
    cube.position.set(0,0,0);
  }
  var t=0;
function loop() {
  t++;
  cube.rotation.set( 0, 0, t/100 );
  renderer.clear();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
} 
  function threeStart() {
    initThree();
    initCamera();
    initScene();   
    initLight();
    initObject();
    loop();
  }