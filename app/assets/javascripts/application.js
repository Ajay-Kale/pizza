// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3

//= require bootstrap-sprockets


function myFunction() 
{
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");

var checkBox0 = document.getElementById("myCheck0");
  var text0 = document.getElementById("text0");

  var checkBox1 = document.getElementById("myCheck1");
  var text1 = document.getElementById("text1");

var checkBox2 = document.getElementById("myCheck2");
  var text2 = document.getElementById("text2");

var checkBox3 = document.getElementById("myCheck3");
  var text3 = document.getElementById("text3");

  if (checkBox.checked == true)
{
    text.style.display = "block"
  }
 else 
{
     text.style.display = "none"
  }

 if (checkBox1.checked == true)
{
    text1.style.display = "block"
  }
 else 
{
     text1.style.display = "none"
  }

if (checkBox2.checked == true)
{
    text2.style.display = "block"
  }
 else 
{
     text2.style.display = "none"
  }

if (checkBox0.checked == true)
{
    text0.style.display = "block"
  }
 else 
{
     text0.style.display = "none"
  }

if (checkBox3.checked == true)
{
    text3.style.display = "block"
  }
 else 
{
     text3.style.display = "none"
  }

}
