/**
 * Created by dawid on 2016-10-27.
 */
        <![CDATA[
    var svgNS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";

    var CurrentDir='S';
    var ThisDir='S';
    var LastUpdate=(new Date()).getTime();
    var GameOver=true;
    var Paused=false;
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
    var PausedText;
    var FeedBack;
    var FeedBack2;

    function ShowSplash(T1,T2)
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
        Text1=document.getElementById("Text1").firstChild;
        Text2=document.getElementById("Text2").firstChild;
        PausedText=document.getElementById("Paused");
        ScoreBoard=document.getElementById("ScoreBoard").firstChild;
        ShowSplash('SNAKE','press enter to play');
    }

    function NewGame()
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

    function ResetSnake()
    {
        Snake=new Array();
        Snake[0]='10,40';
        Snake[1]='10,30';
        Snake[2]='10,20';
        Snake[3]='10,10';
        HeadX=10;
        HeadY=40;
        ThisDir='S';
    }

    function MoveFood()
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

    function update()
    {
        if(!GameOver)
        {
            if(!Paused)
            {
                if((new Date()).getTime()-LastUpdate>50)
                {
                    Move();
                    LastUpdate=(new Date()).getTime();
                }
            }
        }
        else
        {
            window.clearInterval(MyInterval);
            GameOver=true;
            ShowSplash('Game Over','press enter to replay');
        }
    }

    function Move()
    {
        CurrentDir=ThisDir;

        var MyAngle=0;
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


        if(MoveCount<10)
        {
            Snake.pop();
            MoveCount++;
        }
        else
            MoveCount=0;

        PathStr+=Snake.join(' L');
        PathStr+=' ';

        Snake.unshift(HeadStr);

        if(HeadX<0 || HeadX>400 || HeadY<0 || HeadY>300 || PathStr.indexOf('L'+HeadStr+' ')>-1)
        {
            GameOver=true;
            return;
        }

        Player.setAttribute('d',PathStr);
        Head.setAttribute('transform','translate('+HeadX+','+HeadY+') rotate('+MyAngle+',0,0)');

        if(HeadX==FoodX && HeadY==FoodY)
        {
            MoveFood();
            Score=Score+ThisLevel;
            ScoreBoard.nodeValue='Score: '+Score;
        }
    }

    function KeyPress(evt)
    {
        if(evt.keyCode==37 && CurrentDir!='E') // West
        {
            evt.preventDefault();
            ThisDir='W';
        }
        else if(evt.keyCode==38 && CurrentDir!='S') // North
        {
            evt.preventDefault();
            ThisDir='N';
        }
        else if(evt.keyCode==39 && CurrentDir!='W') // East
        {
            evt.preventDefault();
            ThisDir='E';
        }
        else if(evt.keyCode==40 && CurrentDir!='N') // South
        {
            evt.preventDefault();
            ThisDir='S';
        }
        else if(evt.keyCode==80) // Pause
        {
            evt.preventDefault;
            if(!Paused)
            {
                Paused=true;
                ShowSplash('Paused','press enter to resume');
            }
            else
            {
                Paused=false;
                Splash.setAttribute('visibility','hidden');
            }
        }
        else if(evt.keyCode==13 && (GameOver || Paused))  // enter - newgame
        {
            evt.preventDefault();
            if(Paused)
            {
                Paused=false;
                Splash.setAttribute('visibility','hidden');
            }
            else
                NewGame();
        }
    }

    document.documentElement.addEventListener("keydown",KeyPress,false)

        ]]>