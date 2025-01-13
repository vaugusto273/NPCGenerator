document.addEventListener('DOMContentLoaded', function() {
    const Races = ['Random', 'Human', 'Elf', 'Dwarf', 'Gnome'];
    const Gender = ['Random', 'Male', 'Female'];
    const Aligment = ['Random'];
    const Occupation = {
        'Class': [
            'Random', 'Paladin', 'Ranger'
        ],
        'Profission': [
            'Random','Blacksmith','Alchemist'
        ]
    }
    let Element = document.getElementById('Races');
    Races.forEach(function(Races) {
        const CreateOption = document.createElement('option');
        CreateOption.value = Races;
        CreateOption.text = Races;
        Element.appendChild(CreateOption);
    });
    Element = document.getElementById('Gender');
    Gender.forEach(function(Gender){
        const CreateOption = document.createElement('option');
        CreateOption.value = Gender;
        CreateOption.text = Gender;
        Element.appendChild(CreateOption);
    })
    Element = document.getElementById('Aligment');
    Aligment.forEach(function(Aligment){
        const CreateOption = document.createElement('option');
        CreateOption.value = Aligment;
        CreateOption.text = Aligment;
        Element.appendChild(CreateOption);
    })
});
