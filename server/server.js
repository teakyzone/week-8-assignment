import express from "express";

import cors from "cors";

const app = express();


app.use(cors());

const PORT = 2222

const MyDigitalCameras = [

    {
        title: "Nikon Coolpix A900",
        subHeading: "The Canon g7x dupe, this camera does bits"
    },
    {
        title: "Sony Cybershot DSC-W55",
        subHeading: "This is a small but mighty camera that outputs a nostalgic but crisp image with vivid colours"
    },
    {
        title: "Canon Powershot S100",
        subHeading: "The vlogging camera before the g7x,"
    }
    
];

app.get("/digitalcameras", function (request, response) {


    response.json(MyDigitalCameras);

});



app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);   
});

app.get("/", function(request, response) {
    response.json("Hello, World!");
});