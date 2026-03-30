import greengrow from '../images/agri.jpg'
import hms from '../images/hospital.jpeg'
import autohub from '../images/car.jpg'
import calmora from '../images/habit.jpg'
import wellnesshub from '../images/study.jpg'

const myworkData = [
  {
    id: 1,
    title: 'GreenGrow Agriculture Management System',
    description:
      'A MERN-based agriculture platform for consultant booking, appointment handling, dashboard views, and secure CRUD operations.',
    image: greengrow,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/methma490/Online-Agriculture-Management-System',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description:
      'A Java web application using JSP, Servlets, and MVC to support appointments, doctor records, and admin workflows.',
    image: hms,
    tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'MVC'],
    github: 'https://github.com/methma490/HMS-part-methma',
  },
  {
    id: 3,
    title: 'AutoHub Advertising Platform',
    description:
      'A vehicle advertising system with profile handling, ad posting, membership features, and responsive front-end pages.',
    image: autohub,
    tech: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/methma490/AutoHub',
  },
  {
    id: 4,
    title: 'WellnessHub Android App',
    description:
      'An Android app for habit tracking, reminders, journaling, and simple analytics using Kotlin and SharedPreferences.',
    image: wellnesshub,
    tech: ['Kotlin', 'Android', 'SharedPreferences'],
    github: 'https://github.com/methma490/wellnesshub',
  },
  {
    id: 5,
    title: 'Calmora Student Productivity App',
    description:
      'A productivity-focused Android application for planning tasks, tracking deadlines, and supporting study routines.',
    image: calmora,
    tech: ['Kotlin', 'Android', 'Material Design'],
    github: 'https://github.com/methma490/Calmora',
  },
]

export default myworkData