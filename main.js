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
     customColor:function(){
       if (this.name === 'instagram') {
         return this.color === 'black';
       }
     }
   }

   // fine app
});


 Vue.config.devtools = true
