document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the student ID entered by the user
    let studentID = document.getElementById('studentID').value.trim();
    
    // Define grades for each student ID
    let grades = {
        "122100001": [9.5],
        "122200007": [9],
        "191800129": [9.5],
        "191800144": ["absent"],
        "191900004": [9.5],
        "191900340": ["absent"],
        "192000011": [9.5],
        "192000031": [9.5],
        "192000040": [9.5],
        "192000218": [9.5],
        "192000268": [9.5],
        "192100002": [9],
        "192100005": [9],
        "192100017": [10],
        "192100019": [9.5],
        "192100029": [10],
        "192100035": [9.5],
        "192100037": [10],
        "192100040": [9],
        "192100046": [9],
        "192100047": [10],
        "192100054": [9.5],
        "192100058": [9.5],
        "192100064": [10],
        "192100069": [9.5],
        "192100074": [9],
        "192100080": [10],
        "192100083": [9],
        "192100088": [9.5],
        "192100089": [10],
        "192100092": [9.5],
        "192100095": [9.5],
        "192100096": [9],
        "192100097": [9],
        "192100099": [10],
        "192100103": [10],
        "192100116": [9],
        "192100120": [10],
        "192100121": [9.5],
        "192100124": [9.5],
        "192100125": [10],
        "192100128": [9.5],
        "192100132": [9.5],
        "192100133": [9.5],
        "192100136": [5],
        "192100137": [9.5],
        "192100138": [9.5],
        "192100139": [9.5],
        "192100140": [9.5],
        "192100141": [10],
        "192100144": [10],
        "192100154": [8],
        "192100158": [9.5],
        "192100160": [9],
        "192100164": [9.5],
        "192100170": [10],
        "192200136": [9],
        "192200283": [10],
        "192200332": [10]
    };

    
    let gradeDisplay = document.getElementById('gradeDisplay');
    
    if (studentID in grades) {
        // Display grades for the student
        let gradeList = '<h2>Your Grades : ' +  '</h2>';
        gradeList += '<ul>';
        grades[studentID].forEach(function(grade) {
            gradeList += '<li>' +'Quiz1 Grade : '+ grade + '</li>';
        });
        gradeList += '</ul>';
        gradeList +='<p>'+'Bravo! May success always be with you.'+'<p>';
        gradeDisplay.innerHTML = gradeList;

    } else {
        // Display error message if ID is not found
        gradeDisplay.innerHTML = '<p>Student ID not found</p>';
    }
});
