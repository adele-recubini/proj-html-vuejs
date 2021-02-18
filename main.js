var app = new Vue({
   el: "#app",
   data: {
     bgImg: 'img/header-image-homepage.jpg',
     logo:'img/medical_logo_1x_light.png',
     logoLight:'img/medical_logo_1x_dark.png',
     linkHeader:['HOME' , 'ABOUT', 'DEPARTMENTS', 'ARTICLES'],
     iconSocial:[
       {
         name: "twitter-square",
         group: "fab",
         prefix: "fa-",
         

       },
       {
         name: "youtube",
         group: "fab",
         prefix: "fa-",
       },
       {
         name: "facebook-square",
         group: "fab",
         prefix: "fa-",
       }
     ],

    iconPosition:[
       {
         name: "phone",
         group: "far",
         prefix: "fa-",
         contact: "121 King Street, London United Kingdom"
       },
       {
         name: "map-marker-alt",
         group: "far",
         prefix: "fa-",
         contact:"1.800.458.556"

       }
     ],

     medicalDepartment:[ "Cardiology" , "pediatrics" , "Diabetes Care" , "Pre-natel-care", "Ultrasound Echocardiogram" ],









   }


   // <i class="fab fa-twitter-square"></i>
   // <i class="fab fa-youtube"></i>
   // <i class="fab fa-facebook-square"></i>

   // <i class="far fa-phone"></i>
   // <i class="far fa-map-marker-alt"></i>

 })
