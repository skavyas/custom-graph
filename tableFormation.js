function graph_gen(text)
{
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};


/*var text = [
    {
    "backup_size":"3000",
    "start":"Mar 09 2016 09:45 AM",
    "backup_status":"Success"
    }, 
    {
    "backup_size":"1000",
    "start":"Mar 08 2016 09:45 AM",
    "backup_status":"Failed"
    },
    {
    "backup_size":"250",
    "start":"Mar 07 2016 09:45 AM",
    "backup_status":"Failed"
    },
];
*/
//obj = JSON.parse(text);
var c =0;
var t='<div id="main"><table style="margin: 0 auto; " width="600" height="500" cellspacing="0" cellpadding="0">';
for(var i=0;i<100;i++)
{
   t += '<tr class="equidis">';
   for(var j=0;j<15;j++)
   {
      if(j%2!=0)
      {
        t+='<td id="bar_'+i+'_'+j+'"></td>';    
      }
      else
      { 
        t += '<td class="wrapper" id="bar_'+i+'_'+j+'"></td>'; 
      }
   }
   t += "</tr>";
}

t += '<tr style="border-style:none">';
var cc=0;
var flag = new Array(15);
for(var j=0;j<15;j++)
{
        if(j%2 ==0)
        {
             t += '<td class="bar" ></td>';
        }        
        else
        {
             if(typeof(text[cc]) == "undefined")
             {
                 flag.insert(j,'0');
             }
             else
             {
                 flag.insert(j,'1');
                 t += '<td style="text-align:center" class="bar">'+text[cc].start_time+'</td>';
                 cc=cc+1;
             }
       }
}
t += '</tr>';
t+= '</table></div>';
var max = Math.max.apply(null,
                        Object.keys(text).map(function(e) {
                                return text[e]['backup_size'];
                        }));
t += '<p>'+max+'</p>';



document.write(t);
var sub2 = 10;
var p="";
var count = 1;
for(i=0;i<text.length;i++)
{
  var a = (text[i].backup_size/max) * 100;
  var sub2 = Math.round(99-a);
  for(j=99;j>sub2;j--)
  {
      k=i+count;
      if(flag[k] == 1)
      {
          if(text[i].backup_status == "Failed")
          {
             document.getElementById('bar_'+j+'_'+k+'').style.backgroundColor = "red";
          }
          else
          {
             document.getElementById('bar_'+j+'_'+k+'').style.backgroundColor = "green"; 
          }
          document.getElementById('bar_'+j+'_'+k+'').style.cursor = "help";
          document.getElementById('bar_'+j+'_'+k+'').setAttribute("title",""+text[i].backup_size+"GB");  
         
          //document.getElementById('bar_'+j+'_'+k).style.backgroundColor = "red";
      }
   }  
   count++;
}
document.write(p);  
}
