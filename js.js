

var svgNS = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";

var CurrentDir='S';
var ThisDir='S';
var LastUpdate=(new Date()).getTime();
var GameOver=true;
var MyInterval=null;
var HeadX=10;
var HeadY=40;
var FoodX=10;
var FoodY=10;
var MoveCount=0;
var ThisLevel=1;
var Score=0;

var Snake;
var Player;
var Head;
var Food;
var ScoreBoard;
var Splash;
var Text1;
var Text2;

function ShowSplash(T1,T2) //splashskärmen med varierande texter
{
    Text1.nodeValue=T1;
    Text2.nodeValue=T2;
    Splash.setAttribute('visibility','visible');
}

function Init()
{
    Player=document.getElementById('Player');
    Head=document.getElementById('Head');
    Food=document.getElementById('Food');
    Splash=document.getElementById("Splash");
    Text1=document.getElementById("Text1");
    Text2=document.getElementById("Text2");
    PausedText=document.getElementById("Paused");
    ScoreBoard=document.getElementById("ScoreBoard");
    ShowSplash('SNAKE','press enter to play');
}

function NewGame() //resettar poäng, position, och matbiten
{
    Splash.setAttribute('visibility','hidden');
    Score=0;
    ScoreBoard.nodeValue='Score: 0';
    ThisLevel=1;
    ResetSnake();
    MoveFood();
    GameOver=false;
    MyInterval=setInterval("update()", 10);
}

function ResetSnake() //ställer tillbaka ormen vid spawnpoint
{
    Snake=new Array();
    Snake[0]='10,40'; //huvudet
    Snake[1]='10,30';
    Snake[2]='10,20';
    Snake[3]='10,10';
    HeadX=10;
    HeadY=40;
    ThisDir='S';
}

function MoveFood() //placera maten slumpat inom spelbrädan
{
    var PathStr=Snake.join(' ');
    PathStr+=' ';
    while(PathStr.indexOf(FoodX+','+FoodY)>-1)
    {
        FoodX=Math.round(Math.random()*40)*10;
        FoodY=Math.round(Math.random()*30)*10;
    }
    Food.setAttribute("cx",FoodX);
    Food.setAttribute("cy",FoodY);
}

function update()//så länge ormen lever så fortsätter uppdateringen av dess rörelse
{
    if(!GameOver)
    {
            if((new Date()).getTime()-LastUpdate>50) //hur fort ormen åker, 50ms uppdatering
            {
                Move();
                LastUpdate=(new Date()).getTime();
            }
    }
    else
    {
        window.clearInterval(MyInterval);
        GameOver=true;
        ShowSplash('Game Over','press enter to replay');
    }
}

function Move()//här ändrar man snakes position enligt dess riktning
{
    CurrentDir=ThisDir;

    var MyAngle=0; //börja med att peka neråt, SOUTH(S)
    if(ThisDir=='N')
    {
        HeadY=HeadY-10;
        MyAngle=180;
    }
    else if(ThisDir=='E')
    {
        HeadX=HeadX+10;
        MyAngle=270;
    }
    else if(ThisDir=='S')
    {
        HeadY=HeadY+10;
        MyAngle=0;
    }
    else if(ThisDir=='W')
    {
        HeadX=HeadX-10;
        MyAngle=90;
    }
    var HeadStr=HeadX;
    HeadStr+=',';
    HeadStr+=HeadY;
    var PathStr='M';
    PathStr+=HeadStr;
    PathStr+=' ';

    if(HeadX==FoodX && HeadY==FoodY) { //när huvudet kolliderar med maten så kommer snake bli längre
        MoveCount=MoveCount+10^4;
    }
    else if(MoveCount<10^4) //10000 är en symbolisk siffra som ska motsvara en oändlighet
    {
        Snake.pop(); //poppa ormens sista kroppsbit för att inte bli längre
        MoveCount++;
    }
    else
        MoveCount=0;

    PathStr+=Snake.join(' L');
    PathStr+=' ';

    Snake.unshift(HeadStr);

    if(HeadX<0 || HeadX>400 || HeadY<0 || HeadY>300 || PathStr.indexOf('L'+HeadStr+' ')>-1) //game over om snake har åkt in i en vägg eller sig själv
    {
        GameOver=true;
        return;
    }

    Player.setAttribute('d',PathStr);
    Head.setAttribute('transform','translate('+HeadX+','+HeadY+') rotate('+MyAngle+',0,0)');

    if(HeadX==FoodX && HeadY==FoodY) //öka poäng med 1 om huvudet har åkt in i en matbit
    {
        MoveFood(); //flytta matbiten
        Score++;
        ScoreBoard.nodeValue='Score: '+Score;
    }
}

function KeyPress(evt)//Hindrar snake från att kunna göra 180graders sväng
{
    if(evt.keyCode==37 && CurrentDir!='E') // 37=West
    {
        evt.preventDefault();
        ThisDir='W';
    }
    else if(evt.keyCode==38 && CurrentDir!='S') // 38=North
    {
        evt.preventDefault();
        ThisDir='N';
    }
    else if(evt.keyCode==39 && CurrentDir!='W') // 39=East
    {
        evt.preventDefault();
        ThisDir='E';
    }
    else if(evt.keyCode==40 && CurrentDir!='N') // 40=South
    {
        evt.preventDefault();
        ThisDir='S';
    }

    else if(evt.keyCode==13)  // 13=enter - starta nytt spel när splashskärmen är uppe
    {
        evt.preventDefault();
            NewGame();
    }
    document.documentElement.addEventListener("keydown",KeyPress,false)();
}


