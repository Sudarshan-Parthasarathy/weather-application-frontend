export class Weather {
    todays_weather:{
        today:{
            temp: GLfloat;
            pressure : GLfloat;
            humidity : GLfloat;
            temp_min : GLfloat;
            temp_max : GLfloat;
            main : string;
            description : string ;
            city:String;
            icon:String;
        }
    }
}
