// Tarea 1 MongoDB -- Baruch Sias a271503

// 1) ¿Cuántos registros arrojó el comando count?

use students;
switched to db students
db.grades.count()
800

// 2) Encuentra todas las calificaciones del estudiante con el id número 4

db.grades.find({"student_id":4});
{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }

// 3) ¿Cuántos registros hay de tipo exam?

db.grades.count({"type":"exam"})
200

// 4) ¿Cuántos registros hay de tipo homework?

db.grades.count({"type":"homework"})
400

// 5) ¿Cuántos registros hay de tipo quiz?

db.grades.count({"type":"quiz"})
200

// 6) Elimina todas las calificaciones del estudiante con el id numero 3

db.grades.find({"student_id":3})
db.grades.remove({"student_id":3})

// 7) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?

db.grades.find({"score": 75.29561445722392})
{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

// 8) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100

db.grades.update({'_id': ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score":100}} );
db.grades.find({'_id': ObjectId("50906d7fa3c412bb040eb591" ) })
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }

// 9) ¿A que estudiante pertenece esta calificación?

db.grades.find({"score": 100})
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }