var app = new Vue({
   el: "#app",
   data: {
     colorF:'#46525f',
     colorT:'#3ba5bd',
     colorI:'#88acab',
     bgImg: 'img/header-image-homepage.jpg',
     logo:'img/medical_logo_1x_light.png',
     logoLight:'img/medical_logo_1x_dark.png',
     linkHeader:['HOME' , 'ABOUT', 'DEPARTMENTS', 'ARTICLES'],
     doctorOne:'img/doctor-1.jpg',
     doctorTwo:'img/doctor-2.jpg',
     doctorThree:'img/doctor-3.jpg',
     servicesA:'img/icon-14.png',
     servicesB:'img/icon-15.png',
     servicesC:'img/icon-16.png',
     servicesD:'img/icon-11.png',
     servicesE:'img/icon-12.png',
     servicesF:'img/icon-13.png',
     rights: ['Copyright by Ado', ' Avada Theme By Theme Fusion', ' All Rights reserved', 'Power By Ado'],


     iconSocial:[
       {
         name: "twitter",
         group: "fab",
         prefix: "fa-",
         color:"#449ebf"
       },
       {
         name: "youtube",
         group: "fab",
         prefix: "fa-",
         color:"#cc201f"
       },
       {
         name: "facebook",
         group: "fab",
         prefix: "fa-",
         color:"#0000ff"

       },
       {
         name: "instagram",
         group: "fab",
         prefix: "fa-",
         color:"#3d4954"

       },

     ],


    iconPosition:[
       {
         name: "phone",
         group: "fas",
         prefix: "fa-",
         contact: "121 King Street, London United Kingdom",

       },
       {
         name: "map-marker-alt",
         group: "fas",
         prefix: "fa-",
         contact:"1.800.458.556",


       }
     ],

     medicalDepartment:[ "Cardiology" , "pediatrics" , "Diabetes Care" , "Pre-natel-care", "Ultrasound Echocardiogram" ],
   },

   methods: {
     scrollWin:function() {
        window.scrollTo(0,50);
     }
   }

   // fine app
});


 Vue.config.devtools = true
