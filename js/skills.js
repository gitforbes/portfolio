const isFas = true; //Constant for Font Awesome distinctions

//Model for different types of skills
let SkillType = function(name, icon){
    this.typeName = name;
    this.icon = icon;
    this.typeClass = "fas fa-" + this.icon + " fa-7x";
}

//Model for specific skills
let Skill = function(name, type, icon, faStyle){
    this.name = name;
    this.type = type;
    this.icon = icon;
    this.faStyle = function (){
        if(faStyle == isFas){
            return "fas";
        }else{
            return "fab";
        }
    }
    this.skillClass = this.faStyle()+" fa-"+this.icon;
}

function SkillModel() {
    let self = this;
    self.skillTypes = [
        new SkillType("Front-End", "pencil-ruler"),
        new SkillType("Back-End", "code"),
        new SkillType("Frameworks", "tools")
    ];

    self.skills = ko.observableArray([
        new Skill("JavaScript", 0, "js-square"),
        new Skill("CSS", 0, "css3"),
        new Skill("HTML", 0, "html5"),
        new Skill("SASS", 0, "sass"),

        new Skill("C#", 1, "windows"),
        new Skill("PHP", 1, "php"),
        new Skill("Java", 1, "java"),
        new Skill("MySQL", 1, "database", isFas),
        new Skill("REST", 1, "cloud", isFas),

        new Skill("Bootstrap", 2, "bootstrap"),
        new Skill("KnockoutJS", 2, "desktop", isFas),
        new Skill("AngularJS",2, "angular"),
        new Skill("jQuery", 2, "file-code", isFas),
        new Skill("Tailwind", 2, "wind", isFas)
    ]);

    self.getSkillsByType = function (type){
        return ko.utils.arrayFilter(self.skills(), function (skill) {
            return skill.type == type;
        });
    };
}

ko.applyBindings(new SkillModel());
