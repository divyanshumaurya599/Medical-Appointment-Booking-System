export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  experience: number;
  image: string;
  fee: number;
  availability: {
    days: string[];
    hours: string;
  };
  education: string[];
  description: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}