document.addEventListener('DOMContentLoaded', function() {
    const NPCSheet = {
        'Races': ['Random', 'Human', 'Elf', 'Dwarf', 'Gnome'],
        'Gender': ['Random', 'Male', 'Female'],
        'Aligment':['Random'],
        'Occupation':{
            'Class': ['Random', 'Paladin', 'Ranger'],
            'Profession': ['Random', 'Blacksmith', 'Alchemist']
        }
    }
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
    /*function PopulateClassOrProf(OccupationVar){
        OccupationVar.forEach(function(option){
            const CreateOption = document.createElement('option');
            CreateOption.value = option
            CreateOption.text = option

        })
    }*/
    PopulateOptions('Races');
    PopulateOptions('Gender');
    PopulateOptions('Aligment');

    const occupationSelect = document.getElementById('Occupation');
    occupationSelect.addEventListener('change', function(){
        const selectedValue = occupationSelect.value;
        const FormGet = document.getElementById('NPCGen');
        if (selectedValue != 'Random'){
            const OccupationLabel = document.createElement('label');
            const OccupationOption = document.createElement('select');
            
            if(selectedValue == 'Class'){
                OccupationLabel.for = 'Class';
                OccupationLabel.innerHTML = 'Class';
                OccupationOption.id = 'Class';
                if (document.getElementById('Class') == null && document.getElementById('Profession') == null){
                    FormGet.appendChild(document.createElement('br'))
                    FormGet.appendChild(OccupationLabel);
                    FormGet.appendChild(document.createElement('br'))
                    FormGet.appendChild(OccupationOption);
                    PopulateClassOrProf('Class')
                }

            }
            else{
                OccupationLabel.for = 'Profession'
                OccupationLabel.innerHTML = 'Profession'
                OccupationOption.id = 'Profession';
                if (document.getElementById('Profession') == null && document.getElementById('Class') == null){
                    FormGet.appendChild(document.createElement('br'))
                    FormGet.appendChild(OccupationLabel);
                    FormGet.appendChild(document.createElement('br'))
                    FormGet.appendChild(OccupationOption);
                    PopulateClassOrProf('Profession')
                }
        } 
        }
    })
});