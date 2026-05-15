import { ContactItem } from '../../../shared/types';

//------------------------------------------------------
// Placeholder Data - replace with DB queries when ready
//------------------------------------------------------

const email: ContactItem = {
  icon: "✉️",
  label: "Email",
  value: "jonathanlemain@gmail.com",
  href: "mailto:jonathanlemain@gmail.com"
};
const phone: ContactItem = {
  icon: "📞",
  label: "Phone",
  value: "780-655-6719",
};
const github: ContactItem = {
  icon: "⌥",
  label: "GitHub",
  value: "https://github.com/Jonathan-C-L",
  href: "https://github.com/Jonathan-C-L"
};

export const contactInfo: ContactItem[] = [email, phone, github];
