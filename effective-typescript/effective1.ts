interface scatterProps{
    xs:number[];
    ys:number[];

    xRange:[number,number];
    yRange:[number,number];
    color:string;
    onClick:(x:number,y:number,index:number) => void;
}

function shouldUpdate(oldProps: scatterProps,newProps: scatterProps){
    let k: keyof scatterProps;
    for(k in oldProps){
        if(oldProps[k] !== newProps[k]){
            if( k !== 'onClick') return true;
        }
    }
    return false;
}

function shouldUpdate2(oldProps: scatterProps,newProps: scatterProps){
   return(
     oldProps.xs !== newProps.xs ||
     oldProps.ys !== newProps.ys ||
     oldProps.xRange !== newProps.xRange ||
     oldProps.yRange !== newProps.yRange ||
     oldProps.color !== newProps.color
   );
}

interface Vector2D{ x:number, y:number;};
function add96(a:Vector2D, b:Vector2D):{x:number,y:number}{
    return { x:a.x + b.x, y:a.y + b.y };
}

add96({x:2,y:4},{x:3,y:5});
