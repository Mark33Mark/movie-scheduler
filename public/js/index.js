
let posters = document.getElementById("poster-count").innerText;
posters = parseInt(posters);
console.log(posters);

switch( true ){
    case ( posters<=5 ):
        imgConfig = 700;
        imgAdj = 70;
        break;
    case ( posters<=10 ):
        imgConfig = 700;
        imgAdj = 36;
        break;
    case ( posters<=15 ):
        imgConfig = 24;
        imgAdj = 1050;
        break;
    case ( posters<=20 ):
        imgConfig = 1400;
        imgAdj = 18;
        break;
    case ( posters<=25 ):
        imgConfig = 1825;
        imgAdj = 14.4;
        break;
    case ( posters<=30 ):
        imgConfig = 2250;
        imgAdj = 12;
        break;
    case ( posters<=35 ):
        imgConfig = 2525;
        imgAdj = 10.25;
        break;
    case ( posters<=40 ):
        imgConfig = 2800;
        imgAdj = 9;
        break;
    case ( posters<=45 ):
        imgConfig = 3150;
        imgAdj = 8.1;
        break;
    case ( posters<=50 ):
        imgConfig = 3500;
        imgAdj = 7.2;
        break;
    case ( posters<=55 ):
        imgConfig = 4000;
        imgAdj = 6.55;
        break;
    case ( posters<=60 ):
        imgConfig = 4500;
        imgAdj = 6;
        break;
    case ( posters<=65 ):
        imgConfig = 4900;
        imgAdj = 5.3;
        break;
    case ( posters<=70 ):
        imgConfig = 5300;
        imgAdj = 5.151;
        break;
    case ( posters<=75 ):
        imgConfig = 5400;
        imgAdj = 4.8;
        break;
    case ( posters<=80 ):
        imgConfig = 5500;
        imgAdj = 4.5;
        break;
    case ( posters>80 ):
        imgConfig = 5700;
        imgAdj = 5;
        break;
    default:
        alert(" There are no posters to render to the page? ");
}

let xPos = 0;

gsap.timeline()
    
    //set initial rotationY so the parallax jump happens off screen
    .set('.ring', { rotationY:180, cursor:'grab' }) 
    
    // apply transform rotations to each image
    .set('.img',  { 
        rotateY: (i)=> i*-imgAdj,
        transformOrigin: `50% 50% ${imgConfig}px`,
        z: -(imgConfig),
        // backgroundPosition:(i)=>getBgPos(i),
        backfaceVisibility:'hidden'
        })    
        .from('.img', {
        duration:1.5,
        y:200,
        opacity:0,
        stagger:0.1,
        ease:'expo'
        })

        .add(()=>{
        $('.img').on('mouseenter', (e)=>{
            let current = e.currentTarget;
            gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'});
        });

        $('.img').on('mouseleave', (e)=>{
            gsap.to('.img', {opacity:1, ease:'power2.inOut'});
        });
        
    }, '-=0.5');

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e){ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', {cursor:'grabbing'});
    $(window).on('mousemove touchmove', drag);
}


function drag(e){
    if (e.touches) e.clientX = e.touches[0].clientX;    

    gsap.to('.ring', {
        rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
        onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }); }
    });
    
    xPos = Math.round(e.clientX);
}


function dragEnd(e){
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring', {cursor:'grab'});
    console.log( $(":focus") );
}

//returns the background-position string to create parallax movement in each image
getBgPos = i => { 
    return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*imgConfig )+'px 0px';
};