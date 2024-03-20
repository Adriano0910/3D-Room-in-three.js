//------------------------------------------------------------------------------------------------------------
//Spis Tresci
//Linie od 35 Dzwieki
//Linie od 58 Obiekty
//Linie od 583 Swiatla
//Linie od 618 Funkcje 
//
//Drzwi otwietraja i zamykaja sie z efektem dzwiekowym po kliknieciu na nie
//------------------------------------------------------------------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.set(-5,4,-8);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 0xffffff ) )
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );
renderer.shadowMap.enabled= true;

//tlo
scene.background = new THREE.CubeTextureLoader()
	.setPath( 'textures/sky/' )
	.load( [
		'Daylight Box_Front.bmp',
		'Daylight Box_Back.bmp',
		'Daylight Box_Top.bmp',
		'Daylight Box_Bottom.bmp',
		'Daylight Box_Left.bmp',
		'Daylight Box_Right.bmp'
	] ); 

//DZWIEKI

const listener = new THREE.AudioListener();
camera.add( listener );

const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'drzwi-open.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( false );
	sound.setVolume( 0.5 );
});

const sound1 = new THREE.Audio( listener );

const audioLoader1 = new THREE.AudioLoader();
audioLoader1.load( 'drzwi-close.mp3', function( buffer ) {
	sound1.setBuffer( buffer );
	sound1.setLoop( false );
	sound1.setVolume( 0.5 );
});

//OBIEKTY

//podloga
const podstawaTexture = new THREE.TextureLoader().load( 'textures/podloga.jpg' );
podstawaTexture.wrapS = THREE.RepeatWrapping;
podstawaTexture.wrapT = THREE.RepeatWrapping;
podstawaTexture.repeat.set( 4, 4 );
const podstawaGeometry = new THREE.BoxGeometry( 29, 1, 29 );
const podstawaMaterial = new THREE.MeshStandardMaterial({
  map: podstawaTexture
});
const podstawa = new THREE.Mesh(podstawaGeometry, podstawaMaterial);
podstawa.receiveShadow= true;


//sciany
const sciana1Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
sciana1Texture.wrapS = THREE.RepeatWrapping;
sciana1Texture.wrapT = THREE.RepeatWrapping;
sciana1Texture.repeat.set( 6, 2 );
const sciana1Geometry = new THREE.BoxGeometry( 29, 0.1, 6 );
const sciana1Material = new THREE.MeshStandardMaterial({
  map: sciana1Texture, 
});
const sciana1 = new THREE.Mesh(sciana1Geometry, sciana1Material);
sciana1.rotation.x=Math.PI/2;
sciana1.position.y=3.5;
sciana1.position.z=-14.5;
sciana1.castShadow=true;
sciana1.receiveShadow=true;

const sciana2 = sciana1.clone();
sciana2.position.z=14.5;

const sciana3 = new THREE.Group();

const s3_1Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s3_1Texture.wrapS = THREE.RepeatWrapping;
s3_1Texture.wrapT = THREE.RepeatWrapping;
s3_1Texture.repeat.set( 6, 2 );
const s3_1Geometry = new THREE.BoxGeometry( 20, 0.1, 6 );
const s3_1Material = new THREE.MeshStandardMaterial({ 
 map: s3_1Texture
});
const s3_1 = new THREE.Mesh(s3_1Geometry, s3_1Material);
s3_1.castShadow=true;
s3_1.receiveShadow=true;
sciana3.add(s3_1);
s3_1.rotation.z=Math.PI/2;
s3_1.position.x=-14.55;
s3_1.position.z=4.5;
s3_1.position.y=3.5;
s3_1.rotation.x=Math.PI/2;


const s3_2Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s3_2Texture.wrapS = THREE.RepeatWrapping;
s3_2Texture.wrapT = THREE.RepeatWrapping;
s3_2Texture.repeat.set( 2, 2 );
const s3_2Geometry = new THREE.BoxGeometry( 6, 0.1, 6 );
const s3_2Material = new THREE.MeshStandardMaterial({ 
 map: s3_2Texture
});
const s3_2 = new THREE.Mesh(s3_2Geometry, s3_2Material);
s3_2.castShadow=true;
s3_2.receiveShadow=true;
sciana3.add(s3_2);
s3_2.rotation.z=Math.PI/2;
s3_2.position.x=-14.55;
s3_2.position.z=-11.5;
s3_2.position.y=3.5;
s3_2.rotation.x=Math.PI/2;

const s3_3Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s3_3Texture.wrapS = THREE.RepeatWrapping;
s3_3Texture.wrapT = THREE.RepeatWrapping;
s3_3Texture.repeat.set( 1, 1 );
const s3_3Geometry = new THREE.BoxGeometry( 3, 0.1, 2 );
const s3_3Material = new THREE.MeshStandardMaterial({ 
 map: s3_3Texture
});
const s3_3 = new THREE.Mesh(s3_3Geometry, s3_3Material);
s3_3.castShadow=true;
s3_3.receiveShadow=true;
sciana3.add(s3_3);
s3_3.rotation.z=Math.PI/2;
s3_3.position.x=-14.55;
s3_3.position.z=-7;
s3_3.position.y=1.5;
s3_3.rotation.x=Math.PI/2;

const s3_4 = s3_3.clone();
sciana3.add(s3_4);
s3_4.position.y=5.5;


const sciana4 = sciana1.clone();
sciana4.rotation.x=Math.PI/2;
sciana4.rotation.z=Math.PI/2;
sciana4.position.z=0;
sciana4.position.x=14.5;


const sciana5 = new THREE.Group();



const s5_1Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s5_1Texture.wrapS = THREE.RepeatWrapping;
s5_1Texture.wrapT = THREE.RepeatWrapping;
s5_1Texture.repeat.set( 6, 2 );
const s5_1Geometry = new THREE.BoxGeometry( 18, 0.5, 6 );
const s5_1Material = new THREE.MeshStandardMaterial({ 
 map: s5_1Texture
});
const s5_1 = new THREE.Mesh(s5_1Geometry, s5_1Material);
s5_1.castShadow=true;
s5_1.receiveShadow=true;
sciana5.add(s5_1);
s5_1.position.y=3.5;
s5_1.position.x=5.5;
s5_1.position.z=3;
s5_1.rotation.x=Math.PI/2;

const s5_2Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s5_2Texture.wrapS = THREE.RepeatWrapping;
s5_2Texture.wrapT = THREE.RepeatWrapping;
s5_2Texture.repeat.set( 3, 2 );
const s5_2Geometry = new THREE.BoxGeometry( 7, 0.5, 6 );
const s5_2Material = new THREE.MeshStandardMaterial({ 
 map: s5_2Texture
});
const s5_2 = new THREE.Mesh(s5_2Geometry, s5_2Material);
s5_2.castShadow=true;
s5_2.receiveShadow=true;
sciana5.add(s5_2);
s5_2.rotation.x=Math.PI/2;
s5_2.position.z=3;
s5_2.position.x=-11;
s5_2.position.y=3.5;

const s5_3Texture = new THREE.TextureLoader().load( 'textures/sciana.jpg' );
s5_3Texture.wrapS = THREE.RepeatWrapping;
s5_3Texture.wrapT = THREE.RepeatWrapping;
s5_3Texture.repeat.set( 2, 0.5);
const s5_3Geometry = new THREE.BoxGeometry( 4, 0.5, 1 );
const s5_3Material = new THREE.MeshStandardMaterial({ 
  map: s5_3Texture
});
const s5_3 = new THREE.Mesh(s5_3Geometry, s5_3Material);
s5_3.castShadow=true;
s5_3.receiveShadow=true;
sciana5.add(s5_3);
s5_3.rotation.x=Math.PI/2;
s5_3.position.z=3;
s5_3.position.x=-5.5;
s5_3.position.y=6;

//okno
const oknoGeometry = new THREE.BoxGeometry( 3, 0.1, 2 );
const oknoMaterial = new THREE.MeshStandardMaterial({ 
 color: 0xE0F2F1, transparent: true, opacity: 0.5
});
const okno = new THREE.Mesh(oknoGeometry, oknoMaterial);
okno.rotation.z=Math.PI/2;
okno.position.x=-14.55;
okno.position.z=-7;
okno.position.y=3.5;
okno.rotation.x=Math.PI/2;

//drzwi

const drzwiTexture = new THREE.TextureLoader().load( 'textures/drzwi.png' );
drzwiTexture.wrapS = THREE.RepeatWrapping;
drzwiTexture.wrapT = THREE.RepeatWrapping;
drzwiTexture.repeat.set( 1, 1 );
const drzwiGeometry = new THREE.BoxGeometry( 4, 0.5, 5 );
const drzwiMaterial = new THREE.MeshStandardMaterial({ 
  map: drzwiTexture
});
const drzwi = new THREE.Mesh(drzwiGeometry, drzwiMaterial);
drzwi.castShadow=true;
drzwi.receiveShadow=true;
drzwi.rotation.x=Math.PI/2;
drzwi.position.z=3;
drzwi.position.x=-5.5;
drzwi.position.y=3;


//sufit

const sufitTexture = new THREE.TextureLoader().load( 'textures/sufit.jfif' );
sufitTexture.wrapS = THREE.RepeatWrapping;
sufitTexture.wrapT = THREE.RepeatWrapping;
sufitTexture.repeat.set( 1, 1);
const sufitGeometry = new THREE.BoxGeometry( 29, 1, 29 );
const sufitMaterial = new THREE.MeshStandardMaterial({
  map: sufitTexture
});
const sufit = new THREE.Mesh(sufitGeometry, sufitMaterial);
sufit.receiveShadow=true;
sufit.position.y=7;
 
//biurko
const biurko = new THREE.Group();


const blatTexture = new THREE.TextureLoader().load( 'textures/biurko.jpg' );
blatTexture.wrapS = THREE.RepeatWrapping;
blatTexture.wrapT = THREE.RepeatWrapping;
blatTexture.repeat.set( 1, 1 );
const blatGeometry = new THREE.BoxGeometry( 8, 0.1, 4 );
const blatMaterial = new THREE.MeshStandardMaterial({
 map: blatTexture
});
const blat = new THREE.Mesh(blatGeometry, blatMaterial);
blat.receiveShadow= true;
blat.castShadow= true;
blat.rotation.y=Math.PI/2;
blat.position.y=2.5;
blat.position.x=-12.5;
blat.position.z=-10.5;
biurko.add(blat);

const blat2Texture = new THREE.TextureLoader().load( 'textures/biurko.jpg' );
blat2Texture.wrapS = THREE.RepeatWrapping;
blat2Texture.wrapT = THREE.RepeatWrapping;
blat2Texture.repeat.set( 1, 1 );
const blat2Geometry = new THREE.BoxGeometry( 6, 0.1, 4 );
const blat2Material = new THREE.MeshStandardMaterial({
  map: blat2Texture
});
const blat2 = new THREE.Mesh(blat2Geometry, blat2Material);
blat2.receiveShadow= true;
blat2.castShadow= true;
blat2.position.y=2.5;
blat2.position.x=-7.5;
blat2.position.z=-12.5;
biurko.add(blat2);

const nogaTexture = new THREE.TextureLoader().load( 'textures/biurko.jpg' );
nogaTexture.wrapS = THREE.RepeatWrapping;
nogaTexture.wrapT = THREE.RepeatWrapping;
nogaTexture.repeat.set( 1, 1 );
const nogaGeometry = new THREE.BoxGeometry( 0.2, 0.2, 2 );
const nogaMaterial = new THREE.MeshStandardMaterial({
  map: nogaTexture
});
const noga = new THREE.Mesh(nogaGeometry, nogaMaterial);
noga.receiveShadow= true;
noga.castShadow= true;
noga.rotation.x=Math.PI/2;
noga.position.y=1.5;
noga.position.x=-5.5;
noga.position.z=-11;
biurko.add(noga);

const noga2 = noga.clone();
noga2.position.z=-13.9;
biurko.add(noga2);

const noga3 = noga.clone();
noga3.position.x=-10;
biurko.add(noga3);

const noga4 = noga3.clone();
noga4.position.z=-13.9;
biurko.add(noga4);

const noga5 = noga3.clone();
noga5.position.z=-7;
noga5.position.x=-11;
biurko.add(noga5);

const noga6 = noga5.clone();
noga6.position.x=-13.9;
biurko.add(noga6);

const noga7 = noga6.clone();
noga7.position.z=-13.9;
biurko.add(noga7);

const noga8 = noga7.clone();
noga8.position.x=-11;
biurko.add(noga8);
biurko.castShadow=true;
//ksiazka
const loader3 = new THREE.TextureLoader()

const urls = [
  "textures/ksiazka/edge.png","textures/ksiazka/spine.png",
  "textures/ksiazka/top.png","textures/ksiazka/bottom.png",
  "textures/ksiazka/front.png","textures/ksiazka/back.png"
]
const ksiazka_materials = urls.map(url => {
  return new THREE.MeshLambertMaterial({ map: loader3.load(url)})
})

const ksiazka_geometry = new THREE.BoxGeometry(0.75, 1,0.15);
const ksiazka = new THREE.Mesh( ksiazka_geometry, ksiazka_materials);
ksiazka.castShadow=true;
ksiazka.receiveShadow=true;
ksiazka.position.y = 2.6;
ksiazka.position.x = -7.5;
ksiazka.position.z = -11.75;
ksiazka.rotation.x =-Math.PI/2;

//ramka
const ramka_geometry = new THREE.BoxGeometry(0.5, 0.75 ,0.1);
const ramka_material = new THREE.MeshStandardMaterial({
  color: 0xCDA678
});
const ramka = new THREE.Mesh( ramka_geometry, ramka_material);
ramka.castShadow=true;
ramka.receiveShadow=true;
ramka.position.y = 2.9;
ramka.position.x = -12.5;
ramka.position.z = -13;
ramka.rotation.y = Math.PI/3;


const p_ramka_geometry = new THREE.BoxGeometry(0.1, 0.75 ,0.1);
const p_ramka_material = new THREE.MeshStandardMaterial({
  color: 0xCDA678
});
const p_ramka = new THREE.Mesh( p_ramka_geometry, p_ramka_material);
p_ramka.castShadow=true;
p_ramka.receiveShadow=true;
p_ramka.position.y = 2.75;
p_ramka.position.x = -12.6;
p_ramka.position.z = -13.19;
p_ramka.rotation.y = Math.PI/3;
p_ramka.rotation.x = Math.PI/3;


//zdjecie
const zdjecieTexture = new THREE.TextureLoader().load( 'textures/ja.png' );
zdjecieTexture.wrapS = THREE.RepeatWrapping;
zdjecieTexture.wrapT = THREE.RepeatWrapping;
zdjecieTexture.repeat.set( 1, 1 );
const zdjecie_Geometry = new THREE.BoxGeometry( 0.4, 0.65, 0.01 );
const zdjecie_Material = new THREE.MeshStandardMaterial({
  map: zdjecieTexture
});
const zdjecie= new THREE.Mesh(zdjecie_Geometry, zdjecie_Material);
zdjecie.receiveShadow=true;
zdjecie.position.y = 2.92;
zdjecie.position.x = -12.45;
zdjecie.position.z = -12.98;
zdjecie.rotation.y = Math.PI/3;

//lampka 
const p_lampka_geometry = new THREE.ConeGeometry(0.7, 0.4 ,30);
const p_lampka_material = new THREE.MeshStandardMaterial({
  color: 0xC0C0C0
});
const p_lampka = new THREE.Mesh( p_lampka_geometry, p_lampka_material);
p_lampka.castShadow=true;
p_lampka.receiveShadow=true;
p_lampka.position.y = 2.75;
p_lampka.position.x= -6;
p_lampka.position.z= -12.5;


const s_lampka_geometry = new THREE.CylinderGeometry( 0.1, 0.1, 1.5, 32 );
const s_lampka_material = new THREE.MeshStandardMaterial({
  color: 0xC0C0C0
});
const s_lampka = new THREE.Mesh( s_lampka_geometry, s_lampka_material);
s_lampka.castShadow=true;
s_lampka.receiveShadow=true;
s_lampka.position.y = 3.5;
s_lampka.position.x= -6;
s_lampka.position.z= -12.5;


const g_lampka_geometry = new THREE.ConeGeometry(0.7, 0.8 ,30);
const g_lampka_material = new THREE.MeshStandardMaterial({
  color: 0xCDBEA7
});
const g_lampka = new THREE.Mesh( g_lampka_geometry, g_lampka_material);
g_lampka.castShadow=true;
g_lampka .receiveShadow=true;
g_lampka.position.y = 4;
g_lampka.position.x= -6;
g_lampka.position.z= -12.5;

//dywan
const dywanTexture = new THREE.TextureLoader().load( 'textures/dywan.png' );
dywanTexture.wrapS = THREE.RepeatWrapping;
dywanTexture.wrapT = THREE.RepeatWrapping;
dywanTexture.repeat.set( 1, 1 );
const dywanGeometry = new THREE.BoxGeometry( 10, 0.05, 8 );
const dywanMaterial = new THREE.MeshStandardMaterial({ 
  map: dywanTexture
});
const dywan = new THREE.Mesh(dywanGeometry, dywanMaterial);
dywan.castShadow=true;
dywan.receiveShadow=true;
dywan.position.z=-4.5;
dywan.position.x=-1.5;
dywan.position.y=0.53;

//lozko
const lozko = new THREE.Group();



const l_1Geometry = new THREE.BoxGeometry( 4, 0.5, 2 );
const l_1Material = new THREE.MeshStandardMaterial({ 
 color: 0x964B00
});
const l_1 = new THREE.Mesh(l_1Geometry, l_1Material);

l_1.rotation.z=Math.PI/2;
l_1.position.x=12;
l_1.position.z=-10;
l_1.position.y=1.5;
l_1.rotation.x=Math.PI/2;
l_1.rotation.z=Math.PI;

lozko.add(l_1);

l_1.castShadow=true;
l_1.receiveShadow=true;

const l_2 = l_1.clone();
l_2.position.z=-3;
l_2.castShadow=true;
l_2.receiveShadow=true;
lozko.add(l_2);

const l_3Geometry = new THREE.BoxGeometry( 6.5, 0.3, 4 );
const l_3Material = new THREE.MeshStandardMaterial({ 
 color: 0x964B00
});
const l_3 = new THREE.Mesh(l_3Geometry, l_3Material);
lozko.add(l_3);
l_3.castShadow=true;
l_3.receiveShadow=true;
l_3.rotation.z=Math.PI/2;
l_3.position.x=12;
l_3.position.z=-6.5;
l_3.position.y=1.5;
l_3.rotation.x=Math.PI/2;
l_3.rotation.y=Math.PI/2;

const l_4 = l_3.clone();
l_4.material=l_4.material.clone();
l_4.material.color.set(0xFFFFFF);
l_4.position.y=1.8;
l_4.castShadow=true;
l_4.receiveShadow=true;
lozko.add(l_4);

//zyrandol
const zyrandolgeometry = new THREE.ConeGeometry(0.7, 0.4 ,30);
const zyrandolmaterial = new THREE.MeshStandardMaterial({
  color: 0xC0C0C0
});
const zyrandol = new THREE.Mesh( zyrandolgeometry, zyrandolmaterial);
zyrandol.castShadow=true;
zyrandol.receiveShadow=true;
zyrandol.position.y = 6.3;
zyrandol.position.x= -8;
zyrandol.position.z= -6;

const zyrandol1 = zyrandol.clone();
zyrandol1.position.x= 8;

//roslinka
const cylinderTexture = new THREE.TextureLoader().load( 'textures/doniczka.png' );
cylinderTexture.wrapS = THREE.RepeatWrapping;
cylinderTexture.wrapT = THREE.RepeatWrapping;
cylinderTexture.repeat.set( 1, 1 );
const cylindergeometry = new THREE.CylinderGeometry( 0.3, 0.3, 0.5, 32 );
const cylindermaterial = new THREE.MeshStandardMaterial( {
  map: cylinderTexture
} );
const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial );
cylinder.castShadow=true;
cylinder.receiveShadow=true;
cylinder.position.y=2.8;
cylinder.position.z=-11;
cylinder.position.x=-13;

const roslinaTexture = new THREE.TextureLoader().load( 'textures/roslina.jpg' );
roslinaTexture.wrapS = THREE.RepeatWrapping;
roslinaTexture.wrapT = THREE.RepeatWrapping;
roslinaTexture.repeat.set( 0.5, 0.5 );
const roslinageometry = new THREE.DodecahedronGeometry(0.3,0);
const roslinamaterial = new THREE.MeshStandardMaterial( {
  map: roslinaTexture
} );
const roslina= new THREE.Mesh( roslinageometry, roslinamaterial );
roslina.castShadow=true;
roslina.receiveShadow=true;
roslina.position.y=3.1;
roslina.position.z=-11;
roslina.position.x=-13;

scene.add(podstawa);
scene.add(sciana1);
scene.add(sciana2);
scene.add(sciana3);
scene.add(sciana4);
scene.add(sciana5);
scene.add(drzwi);
scene.add(sufit);
scene.add(biurko);
scene.add(ksiazka);
scene.add(ramka);
scene.add(p_ramka);
scene.add(zdjecie);
scene.add(p_lampka);
scene.add(s_lampka);
scene.add(g_lampka);
scene.add(okno);
scene.add(dywan);
scene.add(lozko);
scene.add(zyrandol);
scene.add(zyrandol1);
scene.add( cylinder );
scene.add(roslina);

//SWIATLA

//swiatlo zewnetrzne
const light3 = new THREE.PointLight( 0xffffff, 0 , 100 );
light3.position.set( -15, 4, -6 );
light3.castShadow=true;
scene.add( light3 );

//ambient light
const ambientLight = new THREE.AmbientLight( 0xDDDDDD, 0 ) ;
scene.add( ambientLight );


//spotlight(lampka)
const spotLight = new THREE.SpotLight( 0xffffff, 0 );
spotLight.position.set( -6, 10, -12.5);
spotLight.target = p_lampka;
spotLight.target.updateMatrixWorld();
spotLight.castShadow = true;
spotLight.angle = Math.PI/16;
scene.add( spotLight );
scene.add(spotLight.target);

//swiatlo glowne lewe
const pointLight = new THREE.PointLight( 0xffffff, 1 , 40 );
pointLight.position.set( -8, 5, -6 );
pointLight.castShadow = true;
scene.add( pointLight );

//swiatlo glowne prawe
const pointLight1 = new THREE.PointLight( 0xffffff, 1 , 40 );
pointLight1.position.set( 8, 5, -6 );
pointLight1.castShadow = true;
scene.add( pointLight1 );

//FUNKCJE

//obsluga przyciskow 
document.getElementById( 'point-light' ).addEventListener(
  'click',
  function() {
    this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
    pointLight.intensity = pointLight.intensity==1 ? 0 : 1;
    renderer.render( scene, camera );
  },
  false
);

document.getElementById( 'point-light-z' ).addEventListener(
  'click',
  function() {
    this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
    light3.intensity = light3.intensity==0 ? 0.5 : 0;

    renderer.render( scene, camera );
  },
  false
);

document.getElementById( 'point-light-1' ).addEventListener(
  'click',
  function() {
    this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
    pointLight1.intensity = pointLight1.intensity==1 ? 0 : 1;
    renderer.render( scene, camera );
  },
  false
);

document.getElementById( 'ambient-light' ).addEventListener(
  'click',
  function() {
    this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
    ambientLight.intensity = ambientLight.intensity==0 ? 1 : 0;
    renderer.render( scene, camera );
  },
  false
);

document.getElementById( 'spot-light' ).addEventListener(
  'click',
  function() {
    this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
    spotLight.intensity = spotLight.intensity==0 ? 1 : 0;
    renderer.render( scene, camera );
  },
  false
);

//obsluga raycaster
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const onMouseMove = (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  renderer.render( scene, camera );
};

let pomoc=3;
function onClick(event) {

raycaster.setFromCamera(pointer, camera);
const intersects = raycaster.intersectObjects(scene.children);
if (intersects.length > 0 ) {
  if ( intersects[0].object == drzwi && pomoc%2!=0) {
intersects[0].object.rotation.z+=Math.PI/2;
intersects[0].object.position.x+=1.75;
intersects[0].object.position.z+=1.75;
sound.play();
pomoc=4;
  }
else if ( intersects[0].object == drzwi && pomoc%2==0) {
intersects[0].object.rotation.z-=Math.PI/2;
intersects[0].object.position.x-=1.75;
intersects[0].object.position.z-=1.75;
sound1.play();
pomoc=3;
  }

}
renderer.render( scene, camera );
console.log(pomoc);
};

window.addEventListener('click', onClick);
window.addEventListener('mousemove', onMouseMove);

//obsluga orbit controls
   const controls = new THREE.OrbitControls( camera, renderer.domElement );
   controls.update();
   renderer.render( scene, camera );
   controls.target.set(-6,3,-12);
   function moveCamera() {
     requestAnimationFrame( moveCamera );
     controls.update();
 
     renderer.render( scene, camera );
   }
 
   moveCamera();
 
  // zmiana rozmiaru okna
  window.addEventListener(
    'resize',
    function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.render( scene, camera );
    },
    false
  );