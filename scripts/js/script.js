document.addEventListener('DOMContentLoaded', function() {
    const NPCSheet = {
        'Races': [
            'Random',
            'Aarakocra',
            {
                name: 'Aasimar',
                subraces: ['Protector', 'Scourge', 'Fallen']
            },
            'Bugbear',
            'Centaur',
            'Changeling',
            {
                name: 'Dragonborn',
                subraces: [
                    {
                        name: 'Gem',
                        subraces: ['Amethyst', 'Crystal', 'Emerald', 'Sapphire', 'Topaz']
                    },
                    {
                        name: 'Metalic',
                        subraces: ['Brass', 'Bronze', 'Copper', 'Gold', 'Silver']
                    },
                    {
                        name: 'Chromatic',
                        subraces: ['Black', 'Blue', 'Green', 'Red', 'White']
                    }
                ]
            },
            {
                name: 'Dwarf',
                subraces: ['Hill Dwarf', 'Mountain Dwarf', 'Duergar']
            },
            {
                name: 'Elf',
                subraces: ['High Elf', 'Wood Elf', 'Drow', 'Eladrin', 'Sea Elf', 'Shadar-Kai']
            },
            'Feral Tiefling',
            'Firbolg',
            'Genasi',
            {
                name: 'Genasi',
                subraces: ['Air Genasi', 'Earth Genasi', 'Fire Genasi', 'Water Genasi']
            },
            'Gith',
            {
                name: 'Gith',
                subraces: ['Githyanki', 'Githzerai']
            },
            'Gnome',
            {
                name: 'Gnome',
                subraces: ['Forest Gnome', 'Rock Gnome', 'Deep Gnome']
            },
            'Goblin',
            'Goliath',
            'Grung',
            'Half-Elf',
            'Half-Orc',
            {
                name: 'Halfling',
                subraces: ['Lightfoot', 'Stout', 'Ghostwise']
            },
            'Hobgoblin',
            'Human',
            'Kalashtar',
            'Kenku',
            'Kobold',
            'Locathah',
            'Loxodon',
            'Lizardfolk',
            'Minotaur',
            'Orc',
            'Shifter',
            'Simic Hybrid',
            'Tabaxi',
            'Tiefling',
            {
                name: 'Tiefling',
                subraces: ['Asmodeus', 'Baalzebul', 'Dispater', 'Fierna', 'Glasya', 'Levistus', 'Mammon', 'Mephistopheles', 'Zariel']
            },
            'Tortle',
            'Triton',
            'Vedalken',
            'Verdan',
            'Warforged',
            'Yuan-ti Pureblood'
        ],
        'Gender': ['Random', 'Male', 'Female', 'Non-Binary', 'Genderfluid', 'Agender'],
        'Aligment': [
            'Random', 'Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
            'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
        ],
        'Occupation': {
            'Class': [
                'Random', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 
                'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Blood Hunter'
            ],
            'Profession': [
                'Random', 'Alchemist', 'Blacksmith', 'Brewer', 'Carpenter', 'Cartographer', 'Cook', 'Jeweler', 'Leatherworker',
                'Mason', 'Painter', 'Potter', 'Scribe', 'Shipwright', 'Smith', 'Tinker', 'Weaver', 'Woodcarver'
            ]
        }
    };
    function PopulateOptions(Element){
        const ElementID = document.getElementById(Element);
        let option;
        if (Element == 'Class' || Element == 'Profession'){
            option = NPCSheet.Occupation[Element];            
        }else{
            option = NPCSheet[Element];

        }
        ElementID.innerHTML = '';
        
        option.forEach(function(option){
            if (typeof option === 'string'){
                const CreateOption = document.createElement('option');
                
                CreateOption.value = option;
                CreateOption.text = option;
                ElementID.appendChild(CreateOption);
            }
            else if (typeof option === 'object'){
                const CreateOption = document.createElement('option');
                CreateOption.value = option.name;
                CreateOption.text = option.name;
                ElementID.appendChild(CreateOption);
                if(option.subraces){
                    option.subraces.forEach(function(subrace){
                        const CreateSubOption = document.createElement('option');
                        CreateSubOption.value = `${option.name} - ${subrace.name || subrace}`;
                        CreateSubOption.text = `${option.name} - ${subrace.name || subrace}`;
                        ElementID.appendChild(CreateSubOption);
                    if(subrace.subraces){
                        subrace.subraces.forEach(function(subSubrace){
                            const CreateSubSubOption = document.createElement('option');
                            CreateSubSubOption.value = `- ${option.name} ${subSubrace}`;
                            CreateSubSubOption.text = `- ${option.name} ${subSubrace}`;
                            ElementID.appendChild(CreateSubSubOption);
                        })
                    }
                })
                }
            }
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
                FormGet.appendChild(OccupationLabel);
                FormGet.appendChild(OccupationOption); 
                PopulateOptions('Class')

            }
            else{
                OccupationLabel.for = 'Profession'
                OccupationLabel.innerHTML = 'Profession'
                OccupationLabel.className = 'Occupations'
                OccupationOption.id = 'Profession';
                OccupationOption.className = 'Occupations'
                FormGet.appendChild(OccupationLabel);
                FormGet.appendChild(OccupationOption); 
                PopulateOptions('Profession')
                }
            
            }
        })
    });