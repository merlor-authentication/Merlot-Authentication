var express = require('express');
var app = express();
var clientID;

function Authentication(type, data)
{
   switch(type) {
  case 0:
      clientId = Facial(data);
    break;
  case 1:
      clientId = NFC(data);
    break;
  case 2:
      clientId = OTP(data);
    break;
  case 3:
      clientId = Type(data);
    break;
        
  default:
    clientId = Default(data);
}
}

function Facial(data)
{
   
}
function NFC(data)
{
   
}
function OTP(data)
{
   
}
function Type(data)
{
   
}
function Default(data)
{
   
}
