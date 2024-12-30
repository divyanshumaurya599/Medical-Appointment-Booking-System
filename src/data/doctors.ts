import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Abhinav Maurya',
    speciality: 'Orthopaedics',
    experience: 6,
    image: 'https://media.istockphoto.com/id/1437249753/vector/cartoon-doctor-without-face-vector.jpg?s=612x612&w=0&k=20&c=K1IU3mgYAqHw2bQgcp3ZaLZ4SC08gq526lGrTztztHE=',
    fee: 500,
    availability: {
      days: ['Monday', 'Wednesday','Friday'],
      hours: '9:00 AM - 5:00 PM'
    },
    education: ['MBBS' , 'MS(Orthopaedics)'],
    description: 'Orthopedic surgeon and Spine Surgeon (Ortho) and has an experience of 6 years in these fields..'
  },
  {
    id: '2',
    name: 'Dr. Pratibha Shalini',
    speciality: 'Obstetrics Gynaecology',
    experience: 5,
    image: 'https://img.freepik.com/premium-vector/simple-female-doctor-cartoon-vector-art-illustration_1048368-434.jpg',
    fee: 500,
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      hours: '10:00 AM - 6:00 PM'
    },
    education: ['MBBS' , 'MS(Obstetrics & Gynaecology)'],
    description: 'medical specialization focused on the health of women reproductive systems.'
  }
];