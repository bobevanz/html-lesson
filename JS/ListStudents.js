var students = [
		{FirstName: "Greg", LastName: "Olsen", SAT:"1200", GPA:"3.2"},
		{FirstName: "Bob", LastName: "Evans", SAT:"1200", GPA:"3.2"},
		{FirstName: "Sue Ann ", LastName: "Prewitt", SAT:"1200", GPA:"3.2"},
		{FirstName: "Eric", LastName: "Smith", SAT:"1200", GPA:"3.2"},
		{FirstName: "Eric", LastName: "Bambach", SAT:"1200", GPA:"3.2"}

]
		$().ready(function(){
		$("button").click(function(){

		
		for (var student of students)	{	
			var aStudent = "<tr>";
			aStudent += "<td>" + student.FirstName + " " + student.LastName + "<td>";
			aStudent += "<td>" + student.SAT +"<td>";
			aStudent += "<td>" + student.GPA +"<td>";
			aStudent += "</tr>";
			 $("#Students").append(aStudent);
			}
	
		});

		});
	// function getStudents(){
			
	// 		var tbodyCtrl = document.getElementById("students");
	// 		tbodyCtrl.innerHTML = "";
