document.addEventListener('DOMContentLoaded', function() {
    const NPCSheet = {
        'Races': [
            'Random', 'Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling',
            'Aarakocra', 'Genasi', 'Goliath', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold',
            'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Feral Tiefling', 'Tortle', 'Changeling',
            'Kalashtar', 'Shifter', 'Warforged', 'Gith', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken',
            'Verdan', 'Locathah', 'Grung'
        ],
        'Gender': ['Random', 'Male', 'Female'],
        'Aligment': [
            'Random', 'Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
            'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
        ],
        'Occupation': {
            'Class': [
                'Random', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 
                'Sorcerer', 'Warlock', 'Wizard', 'Artificer'
            ],
            'Profession': [
                'Random', 'Alchemist', 'Blacksmith', 'Brewer', 'Carpenter', 'Cartographer', 'Cook', 'Jeweler', 'Leatherworker',
                'Mason', 'Painter', 'Potter', 'Scribe', 'Shipwright', 'Smith', 'Tinker', 'Weaver', 'Woodcarver'
            ]
        }
    };
    function PopulateOptions(Element){
        const ElementID = document.getElementById(Element);
        const option = NPCSheet[Element]
        ElementID.innerHTML = '';
        
        option.forEach(function(option){
            const CreateOption = document.createElement('option');
            CreateOption.value = option;
            CreateOption.text = option;
            ElementID.appendChild(CreateOption);
        })
    }
    function PopulateClassOrProf(Element){
        const ElementID = document.getElementById(Element);
        const OccupationSelected = NPCSheet.Occupation[Element]
        ElementID.innerHTML = '';
        
        OccupationSelected.forEach(function(OccupationSelected){
            const CreateOption = document.createElement('option');
            CreateOption.value = OccupationSelected;
            CreateOption.text = OccupationSelected;
            ElementID.appendChild(CreateOption);
        })
    }
    PopulateOptions('Races');
    PopulateOptions('Gender');
    PopulateOptions('Aligment');

    const occupationSelect = document.getElementById('Occupation');
    occupationSelect.addEventListener('change', function(){
        const elementsToRemove = document.getElementsByClassName('Occupations');
        while (elementsToRemove.length > 0){
            elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
        }
        const selectedValue = occupationSelect.value;
        const FormGet = document.getElementById('NPCGen');
        if (selectedValue != 'Random'){
            const OccupationLabel = document.createElement('label');
            const OccupationOption = document.createElement('select');
            
            if(selectedValue == 'Class'){
                OccupationLabel.for = 'Class';
                OccupationLabel.innerHTML = 'Class';
                OccupationLabel.className = 'Occupations'
                OccupationOption.id = 'Class';
                OccupationOption.className = 'Occupations'
                FormGet.appendChild(OccupationOption);
                PopulateClassOrProf('Class')

            }
            else{
                OccupationLabel.for = 'Profession'
                OccupationLabel.innerHTML = 'Profession'
                OccupationLabel.className = 'Occupations'
                OccupationOption.id = 'Profession';
                OccupationOption.className = 'Occupations'
                FormGet.appendChild(OccupationOption);
                PopulateClassOrProf('Profession')
                } 
            }
        })
    });