var student = {
    studentName: "yogesh chaudhary",
    getInvite(a, b) {
        console.log("student" + " : " + this.studentName);
        console.log(a * b);
    }
}

var student2 = {
    studentName: "Manish chaudhary",
}
student.getInvite.call(student2,3, 4); 

var teacher = {
    teacherName: "priti mam",
    getInvite: function (a, b) {
        console.log("teacher" + " : " + this.teacherName);
        console.log(a + b);
    }
}


var teacher2 = {
    teacherName: "ashish sir",
}
teacher.getInvite.apply(teacher2, [30, 4]);


var Friend = {
    friendName: "pravin masekar",
    getInvite: function (a, b) {
        console.log(this);
        console.log(a - b);
    }
}


var Friend2= {
    friendName: "pratik sharma",
}
var data = Friend.getInvite.bind(Friend2, 6, 4);
data();