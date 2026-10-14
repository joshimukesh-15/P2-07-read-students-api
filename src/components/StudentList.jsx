import StudentCard from './StudentCard.jsx';
export default function StudentList({students}){if(!students.length)return <div className="message">No student records match your search.</div>;return <section className="list">{students.map((student,index)=><StudentCard key={student.id} student={student} index={index}/>)}</section>}
