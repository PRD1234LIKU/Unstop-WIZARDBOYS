function showStudentForm() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('studentFields').style.display = 'block';
    document.getElementById('teacherFields').style.display = 'none';
}

function showTeacherForm() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('teacherFields').style.display = 'block';
    document.getElementById('studentFields').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demonstration

    const role = document.querySelector('input[name="role"]:checked').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const terms = document.getElementById('terms').checked;

    let additionalInfo = '';
    if (role === 'student') {
        const regNumber = document.getElementById('regNumber').value;
        const course = document.getElementById('course').value;
        additionalInfo = `Registration Number: ${regNumber}, Course: ${course}`;
    } else {
        const facultyRegNumber = document.getElementById('facultyRegNumber').value;
        const qualification = document.getElementById('qualification').value;
        const subjects = document.getElementById('subjects').value;
        additionalInfo = `Faculty Registration Number: ${facultyRegNumber}, Qualification: ${qualification}, Subjects: ${subjects}`;
    }

    alert(`Name: ${name}\nDate of Birth: ${dob}\nPhone: ${phone}\n${additionalInfo}\nAgreed to Terms: ${terms}`);
});
