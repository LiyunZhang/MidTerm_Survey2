Survey
    .StylesManager
    .applyTheme("default");

var json = {
   page:[
        {
            questions: [
            {
                name: "name",
                type: "text",
                title: "Please enter your name:",
                placeHolder: "Jon Snow",
                isRequired: true
            }, {
                name: "birthdate",
                type: "text",
                inputType: "date",
                title: "Your birthdate:",
                isRequired: true
            }
            ]
        },
        {
            questions:[
            {
                name: "phone",
                type: "text",
                title: "Your phone number:",
                placeHolder: "xxx-xxx-xxxx",
                isRequired: true
            }, 
            {
                name: "color",
                type: "text",
                inputType: "color",
                title: "Your favorite color:"
            }]
        },
        {
            questions:[
            {
                name: "email",
                type: "text",
                inputType: "email",
                title: "Your e-mail:",
                placeHolder: "jon.snow@nightwatch.org",
                isRequired: true,
                validators: [
                    {
                        type: "email"
                    }
                ]
            },{
                type: "dropdown",
                name: "car",
                title: "What car are you driving?",
                isRequired: true,
                colCount: 0,
                choices: [
                    "None",
                    "Ford",
                    "Vauxhall",
                    "Volkswagen",
                    "Nissan",
                    "Audi",
                    "Mercedes-Benz",
                    "BMW",
                    "Peugeot",
                    "Toyota",
                    "Citroen"
                ]
            }]
        },
        {
            questions:[ {
                type: "panel",
                name: "panel_countriesByRegion",
                title: "Show countries by region",
                elements: [
                    {
                        type: "dropdown",
                        name: "region",
                        title: "Select the region...",
                        choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
                    }, {
                        type: "dropdown",
                        name: "reg_country",
                        title: "Select the country...",
                        isRequired: true,
                        choicesByUrl: {
                            url: "https://restcountries.eu/rest/v2/region/{region}",
                            valueName: "name"
                        }
                    }
                ]
            }]
        },
        {
            questions:[
                {
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Result?",
                    minRateDescription: "Not Satisfied",
                    maxRateDescription: "Completely satisfied"
                }, {
                    type: "comment",
                    name: "suggestions",
                    title: "What would make you more satisfied with the Result?"
                }
            ]
        }
     
    ]   
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
     window.location = "https://liyunzhang.github.io/MidTerm_Survey2/thankyou2.html?";
    });

$("#surveyElement").Survey({model: survey});
