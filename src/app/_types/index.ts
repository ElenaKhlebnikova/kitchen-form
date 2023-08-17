export interface NonRecurringDate {
  date: string | Date;
  startTime: number;
  endTime: number;
}

export interface RecurringDate {
  dayOfWeek: number;
  startTime: number;
  endTime: number;
}

export interface Photo {
  secure_url: string | undefined;
  photo_id: string | undefined;
}

export interface TFormFields {
  description: string;
  location: string;
  photos: Photo[];
  price: number;
  features: (string | boolean)[];
  rules: (string | boolean)[];
  title: string;
  size: number;
  languages: (string | boolean)[];
  availability: {
    nonRecurring: NonRecurringDate[];
    recurring: RecurringDate[];
  };
  policies: {
    cancel: boolean;
    terms: boolean;
    safety: boolean;
  };
}
