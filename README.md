# An Open Source fully functional School management system

In this project, I intend to develop and fully functional
school management system.

In this system only school teachers, school admins, and system admins can login.


### Features

[-] Secure signup and login

[-] Add student bio data

[-] create subjects

[-] create classes

[-] asign students to a class

[-] Award marks to student per subject

[-] Manage school information. i.e logo, school name, address, color schema

[-] create teachers

[-] assign class to a class teacher.

[-] asign teachers to multiple subjects in multiple classes.

[-] create a subject to teacher dashboard

## Student

- full name
- sex 
- date of birth
- religion [optional]
- Parent or Guidian name
- student password photo
- date of joining
- date of information last changed
- class of joining school
- blood group
- nationality
- status ["active", "transfered", "completed", "inactive" ]
- School Id number
- other [ any other info about the student ]
- sporting house [optional]
- residence 
- role ["student"] 

## class

- class name
- stream [optional, this will cater for schools that have classes with multiple streams]
- creation date
- last updation date
- class teacher ID

## subject

- subject name
- subject code [ optional ]
- class [some subjects are for specific classes] this will be an array of strings with class Ids or "all" to mean that it is for all class


## Teacher

- full name
- martial status
- sex
- telephone number
- date of joining
- staff id number 
- date profile last updated
- photo
- nationality
- role ["teacher"]
- residence 

## School general information

- School name
- Address
- contact information
- logo